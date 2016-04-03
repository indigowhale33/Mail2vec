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
import gensim
import numpy
import scipy
import string
import json
import os

THRESHOLD_VAL = 0.24

class NLProcessor(object):
    def __init__(self):
        self.model = gensim.models.Word2Vec.load_word2vec_format('./GoogleNews-vectors-negative300.bin', binary=True)
        print('verified')

    def verifyString(self, mailString):
        mailString = mailString.split()
        mailString = ' '.join(word for word in mailString if word in self.model)
        return mailString.split()

    def categorize(self, category):
        returnArray = []
        with open('trial.json') as data_file:    
            data = json.load(data_file)
        for email in data:
            print(category.split())
            simCoeff = self.model.n_similarity(category.split(), self.verifyString(data.get(email)))
            print('simCoeff: ' + str(simCoeff))
            if simCoeff > THRESHOLD_VAL:
                returnArray.append(email)
                if len(returnArray) == 25:
                    return ' '.join(returnArray)


        return ' '.join(returnArray)



s = zerorpc.Server(NLProcessor())
s.bind("tcp://0.0.0.0:4242")
s.run()

