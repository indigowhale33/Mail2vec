"""
Usage:
1. Run this file: python testrpc.py
2. Run node in another terminal
3. Run this code in the node command line:
   > var zerorpc = require('zerorpc');
   > var client = new zerorpc.Client();
   > client.connect('tcp://127.0.0.1:4242');
   > client.invoke('hello', 'World!', function(error, res, more) {
   >     console.log(res);
   > });
"""

import zerorpc


class HelloRPC(object):
    def hello(self, name):
        return "Hello, %s" % name

s = zerorpc.Server(HelloRPC())
s.bind("tcp://0.0.0.0:4242")
s.run()

