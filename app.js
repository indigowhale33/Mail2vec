/*  Copyright (c) 2012 Sven "FuzzYspo0N" Bergström

    written by : http://underscorediscovery.com
    written for : http://buildnewgames.com/real-time-multiplayer/

    MIT Licensed.

    Usage : node app.js
*/

    var
        jsonfile = require('jsonfile');
        gameport        = process.env.PORT || 4004,
        passport = require('passport'),
        io              = require('socket.io'),
        express         = require('express'),
        UUID            = require('node-uuid'),
        Parse           = require('parse/node').Parse;
        verbose         = false,
        http            = require('http'),
        app             = express(),
        server          = http.createServer(app);
        clients = [];
        util = require('util');
        query = new Parse.Query(Parse.User);
        var urllib = require('url');

    var replace = require('replace');
    var google = require('googleapis');
    var coffeescript = require('iced-coffee-script/register');
    var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
    var gapi = require('gapi');
    var OAuth2 = google.auth.OAuth2;
    var request = require('request');
    var fs = require('fs');
  var readline = require('readline');
  var base64 = require('js-base64').Base64;
  var googleAuth = require('google-auth-library');
  var Promise = require('promise');
    //oogle.options({ auth: oauth2Client });
    app.use(express.bodyParser());
    var REDIRECT_URL = 'http://www.mailcat.com/oauth2callback&';
    var CLIENT_ID = '72348150251-lf1jm1l7ordsvvniqt4slgqrsp8qo4jg.apps.googleusercontent.com';
    var CLIENT_SECRET = 'FKRqJaFIko-5JWrc6s6ShUPZ';
    var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
// generate a url that asks permissions for Google+ and Google Calendar scopes
    var scopes = [
  'http://mail.google.com/',
  'https://www.googleapis.com/auth/userinfo.email','https://www.googleapis.com/auth/plus.login',
  'https://www.googleapis.com/plus/v1/people/me'
    ];

    var storage = [];

var url = oauth2Client.generateAuthUrl({
  access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
  scope: scopes // If you only need one scope you can pass it as string
});







// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/gmail-nodejs-quickstart.json
var SCOPES = ['https://www.googleapis.com/auth/gmail.readonly', 'https://www.googleapis.com/auth/userinfo.email','https://www.googleapis.com/auth/plus.login'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'gmail-nodejs-quickstart.json';

// // Load client secrets from a local file.
// fs.readFile('client_secret.json', function processClientSecrets(err, content) {
//   if (err) {
//     console.log('Error loading client secret file: ' + err);
//     return;
//   }
//   // Authorize a client with the loaded credentials, then call the
//   // Gmail API.
//   authorize(JSON.parse(content), listLabels);
// });

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
// function authorize(credentials, callback) {
  
//   });
// }

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  return authUrl;
  // console.log('Authorize this app by visiting this url: ', authUrl);
  // var rl = readline.createInterface({
  //   input: process.stdin,
  //   output: process.stdout
  // });
  // rl.question('Enter the code from that page here: ', function(code) {
  //   rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);

      callback(oauth2Client);
    });
  //});
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
}

/**
 * Lists the labels in the user's account.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listLabels(auth) {
  var gmail = google.gmail('v1');
  gmail.users.labels.list({
    auth: auth,
    userId: 'me',
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err + 'listlabels');
      return;
    }
    var labels = response.labels;
    if (labels.length == 0) {
      console.log('No labels found.');
    } else {
      console.log('Labels:');
      for (var i = 0; i < labels.length; i++) {
        var label = labels[i];
        console.log('- %s', label.name);
      }
    }
  });
}


function isValid(str) { return /^[A-Za-z0-9 ]+$/.test(str); }
String.prototype.contains = function(str) { return this.indexOf(str) != -1; };


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
    //console.log("bf logged in");
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
        // Load client secrets from a local file.

        res.sendfile( '/index.html' , { root:__dirname });
    });



    app.get('/auth/google?', function(req, res){
      fs.readFile('client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }

      var credentials = JSON.parse(content);
  //authorize(JSON.parse(content), listLabels);
  var clientSecret = credentials.web.client_secret;
  var clientId = credentials.web.client_id;
  var redirectUrl = credentials.web.redirect_uris[0];
  var auth = new googleAuth();
  var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);
  var redURL = 0;
  var labels;
      var url_parts = urllib.parse(req.url, true);
      var query = url_parts.query;
      console.log(query.code);
      oauth2Client.getToken(query.code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);

      //listLabels(oauth2Client);
      var gmail = google.gmail('v1');

      function getMessage(len, labels, categories){
        var nonce = 0;
        var retArr = [];
        var file = './trial.json';
        for(i= 0; i < len; i++){
          var requed = gmail.users.messages.get({
          'userId': 'me',
          id: labels[i].id,
          'auth': oauth2Client,
          'format': 'full'
          },function(err, response) {
            if (err) {
              console.log('The API returned an error: ' + err + "get message");
              return;
            }
            var bodyData = "";
            //for(i=0; i < response.payload.parts.length; i++){
              if(typeof response.payload.parts == "object"){
              bodyData += response.payload.parts[0].body.data;
              //console.log('1111111111111111111111111111111111111111111111111111111111111');
            //bodyData = base64.decode(bodyData).replace(/-/g, '+').replace(/_/g, '/').replace(/<br>/gi, "\n");
            bodyData = base64.decode(bodyData);
            bodyData = bodyData.replace(/[^a-z+]+/gi, ' ');
            retArr.push({key: response.id, value: bodyData});
            nonce = nonce + 1;
            if(nonce == len){
                jsonfile.writeFile(file, retArr, function(result){
                var zerorpc = require('zerorpc')
                var client = new zerorpc.Client();
                client.connect('tcp://127.0.0.1:4242');
                client.invoke('categorize', categories, function(error, res, more) { 
                    res = res.split(' ')
                });
        });
           }
           }
          });
        }
      }

      var reque = gmail.users.messages.list({
          'userId': 'me',
          'auth': oauth2Client,
          'labelIds': 'INBOX',
          'maxResults': 100
        },function(err, response) {
        if (err) {
          console.log('The API returned an error: ' + err + "message list");
          return;
        }
        labels = response.messages;

        getMessage(labels.length, labels, 'sports');


        

     //console.log(storage);
    
    });

    });
  });
    res.writeHead(302, {'location':'/test'});
       res.end();
    })
    

    app.get('/test', function( req, res ){
        
    console.log('done!');
    return;
  });


     app.get('/authorize', function( req, res ){
        fs.readFile('client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }

  // Authorize a client with the loaded credentials, then call the
  // Gmail API.
  var credentials = JSON.parse(content);
  //authorize(JSON.parse(content), listLabels);
  var clientSecret = credentials.web.client_secret;
  var clientId = credentials.web.client_id;
  var redirectUrl = credentials.web.redirect_uris[0];
  var auth = new googleAuth();
  var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);
  var redURL = 0;


  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function(err, token) {
    if (err) {
      redURL = getNewToken(oauth2Client, listLabels);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      redURL = getNewToken(oauth2Client, listLabels);
      //listLabels(oauth2Client);
    }



  if(redURL != 0){
    // request(redURL, function(error,response){
    //   if(!error){
      
       res.writeHead(302, {'location':redURL});
       res.end();
    // }
    // });
  }
  });
  });
    });

    

  

app.get('/callback', function(req, res){  
  var code = req.query.code;
  oauth2Client.getToken(code, function(error, tokens) {
    if (error) {res.send(error)};
    var accessToken = tokens.access_token
    //either save the token to a database, or send it back to the client to save.
    //CloudBalance sends it back to the client as a json web token, and the client saves the token into sessionStorage
  });
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

            //game_server.onMessage(client, m);

        }); //client.on message

            //When this client disconnects, we want to tell the game server
            //about that as well, so it can remove them from the game they are
            //in, and make sure the other player knows that they left and so on.
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
