/*  Copyright (c) 2012 Sven "FuzzYspo0N" Bergström

    written by : http://underscorediscovery.com
    written for : http://buildnewgames.com/real-time-multiplayer/

    MIT Licensed.

    Usage : node app.js
*/

    var
        gameport        = process.env.PORT || 8000,
        zerorpc         = require('zerorpc'),
        categories      = '',
        nodeClient      = new zerorpc.Client(),
        io              = require('socket.io'),
        express         = require('express'),
        UUID            = require('node-uuid'),
        Parse           = require('parse/node').Parse;
        verbose         = false,
        http            = require('http'),
        app             = express(),
        server          = http.createServer(app);
        clients = [];
        query = new Parse.Query(Parse.User);


function isValid(str) { return /^[A-Za-z0-9 ]+$/.test(str); }
String.prototype.contains = function(str) { return this.indexOf(str) != -1; };

// profanities of choice
var profanities = new Array("ass", "cunt", "pope", "bitch", "fuck", "tit", "penis", "dick", "vag", "whore", "slut", "fk");

var containsProfanity = function(text){
    var returnVal = false;
    for (var i = 0; i < profanities.length; i++) {
        if(text.toLowerCase().contains(profanities[i].toLowerCase())){
            returnVal = true;
            break;
        }
    }
    return returnVal;
}

/* Express server set up. */
//The express server handles passing our content to the browser,
//As well as routing users where they need to go. This example is bare bones
//and will serve any file the user requests from the root of your web server (where you launch the script from)
//so keep this in mind - this is not a production script but a development teaching tool.
  Parse.initialize("FUO5HE5FTONLhbeCd0BrKDChQ61WbvzgBUMiuEqj", "LE4LKonCwCoURJgXALnYweOgN72qArdnum5gINTM");
  Parse.User.logIn("kkbluefrog", "badpass", {
  success: function(user) {
    // Do stuff after successful login.
    console.log("bf logged in");
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
  }
});
        //Tell the server to listen for incoming connections
    server.listen(gameport)

        //Log something so we know that it succeeded.
    console.log('\t :: Express :: Listening on port ' + gameport );

        //By default, we forward the / path to index.html automatically.
    app.get( '/', function( req, res ){
        console.log('trying to load %s', __dirname + '/index.html');
        res.sendfile( '/index.html' , { root:__dirname });
    });

        //This handler will listen for requests on /*, any file from the root of our server.
        //See expressjs documentation for more info on routing.
    app.get( '/*' , function( req, res, next ) {
            //This is the current file they have requested
        var file = req.params[0];

            //For debugging, we can track what files are requested.
        if(verbose) console.log('\t :: Express :: file requested : ' + file);

            //Send the requesting client the file.
        res.sendfile( __dirname + '/' + file );
    }); //app.get *

/* Socket.IO server set up. */
//Express and socket.io can work together to serve the socket.io client files for you.
//This way, when the client requests '/socket.io/' files, socket.io determines what the client needs.
        //Create a socket.io instance using our express server
    var sio = io.listen(server);
        //Configure the socket.io connection settings.
        //See http://socket.io/
    sio.configure(function (){

        sio.set('log level', 0);
        sio.set('authorization', function (handshakeData, callback) {
          callback(null, true); // error first callback style
        });
    });
        //Enter the game server code. The game server handles
        //client connections looking for a game, creating games,
        //leaving games, joining games and ending games when they leave.
    //game_server = require('./game.server.js');

        //Socket.io will call this function when a client connects,
        //So we can send that client looking for a game to play,
        //as well as give that client a unique ID to use so we can
        //maintain the list if players.
    sio.sockets.on('connection', function (client) {
        client.auth = false;
            //Generate a new UUID, looks something like
            //5b2ca132-64bd-4513-99da-90e838ca47d1
            //and store this on their socket/connection
        client.userid = UUID();
            //tell the player they connected, giving them their id
        client.emit('onconnected', { id: client.userid } );
        //game move
        client.on('gameMove', function(data){
          console.log('\t User move');

        });
        //new signup
        client.on('signup', function(data){
          console.log('\t signup attempt!');
          var user = new Parse.User();
          user.set("username", data.username);
          user.set("password", data.password);
          user.set("email", data.email);
          user.set("bdate", data.bdate);
          user.signUp(null, {
            success: function(user) {
              // Hooray! Let them use the app now.
              var userData = new Parse.Object("userData");
              userData.set("userID", user.id);
              userData.set("logNum", 0);
              userData.set("userExp", 0);
              userData.save(null, {
  success: function(gameScore) {
    // Execute any logic that should take place after the object is saved.
  },
  error: function(gameScore, error) {
      console.log(error.message);
  }
});
            },
            error: function(user, error) {
              // Show the error message somewhere and let the user try again.
            }
          });
        });
            //now we can find them a game to play with someone.
            //if no game exists with someone waiting, they create one and wait.
        //game_server.findGame(client);
        client.on('lego', function(data){
          console.log('\t socket.io:: player ' + data.legouser + ' logged in!');
          var dataQuery = new Parse.Query("userData");
          dataQuery.equalTo("userID", data.legouser);
          dataQuery.first().then(function(object)
      {
         if(object == undefined)
         {
           console.log("not found");
         }
         else
         {
          client.auth = true;
          client.dataid = object.id;
          if(object.get("logNum") == 0)
           client.emit('name', { id: client.userid } );
          else
          {
           client.emit('ready', { id: object.get("userIGN") } );
           object.increment("logNum");
           object.save();
          }
           console.log(object.id);
         }

      }, function(error)
      {

          console.log("first failed");
      });

    });

    client.on('atSign', function(obj){
      var newName = obj.testName.trim();
      console.log(newName);
      if(containsProfanity(newName)){
          client.emit('signErr', { err: "Your username contains profanity." } );
      }
      else if(newName.length < 3 || newName.length > 16){
          client.emit('signErr', { err: "Your username is of invalid length." } );
          console.log("invalidLength");
      }
      else if(newName.match("^[a-zA-Z0-9 ]+$"))
      {
      var dataQuery = new Parse.Query("userData");
      dataQuery.equalTo("userIGN", newName);
      dataQuery.first().then(function(object)
  {
     if(object == undefined)
     {
        dataQuery = new Parse.Query("userData");
        dataQuery.get(client.dataid, {
         success: function(object) {
           // object is an instance of Parse.Object.
           object.set("userIGN", newName);
           object.set("logNum", 1);
           object.save();
           client.emit('ignAuth', { id: client.userid} );
         },

         error: function(object, error) {
     // error is an instance of Parse.Error.
     client.emit('signErr', { err: "Parse Error" } );
      }
      });
     }
     else
     {
      client.emit('signErr', { err: "This username is already taken." } );

     }

  }, function(error)
  {
      client.emit('signErr', { err: "Parse Error2" } );
      console.log("first failed");
  });

    }
    else {
      client.emit('signErr', { err: "Your username contains invalid characters." } );
    }
    });
            //Useful to know when someone connects
        console.log('\t socket.io:: player ' + client.userid + ' connected heyhey!');
            //Now we want to handle some of the messages that clients will send.
            //They send messages here, and we send them to the game_server to handle.
        client.on('message', function(m) {
        });
            //When this client disconnects, we want to tell the game server
            //about that as well, so it can remove them from the game they are
            //in, and make sure the other player knows that they left and so on.
            client.on('enterCat', function(obj){
              categories = obj.cat;
              console.log(categories);
            });
            client.on('oneMail', function(obj){
              emailID = obj.id;
              bodyData = obj.body;
              nodeClient.connect('tcp://127.0.0.1:4242');
              nodeClient.invoke('categorize', emailID, categories, bodyData, function(error, res, more) {
                console.log("DEBUG_START");
                console.log("emailID");
                console.log(emailID);
                console.log(categories);
                console.log(res);
                client.emit('getID', {emailID:res});
            });
            });
        client.on('disconnect', function () {
                //Useful to know when soomeone disconnects
            console.log('\t socket.io:: client disconnected ' + client.userid + ' ' + client.game_id);
                //If the client was in a game, set by game_server.findGame,
                //we can tell the game server to update that game state.
            if(client.game && client.game.id) {
                //player leaving a game should destroy that game
                //game_server.endGame(client.game.id, client.userid);
            } //client.game_id
        }); //client.on disconnect
    }); //sio.sockets.on connection
