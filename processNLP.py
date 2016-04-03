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

THRESHOLD_VAL = 0.26

class NLProcessor(object):
    def __init__(self):
        self.model = gensim.models.Word2Vec.load_word2vec_format('./GoogleNews-vectors-negative300.bin', binary=True)
        print('verified')

    def verifyString(self, initString):
        initString = initString.split()
        initString = ' '.join(initString)
        mailString = ''
        for ch in initString:
            if ch in string.letters or ch == ' ':
                mailString = mailString + ch
                    
        mailString = mailString.split()
        mailString = ' '.join(word for word in mailString if word in self.model and len(word) > 1 and word != 'div')
        return mailString.split()

    def categorize(self, emailID, category, bodyData):
        returnArray = []
        #coeffArray = []
        bodyData = self.verifyString(bodyData)
        print('Categories: ' + str(category))
        simCoeff = self.model.n_similarity(bodyData, category.split())
        print('simCoeff: ' + str(simCoeff))
        print(bodyData)
        if simCoeff > THRESHOLD_VAL:
            returnArray.append(emailID)
            #coeffArray.append(simCoeff)
            if len(returnArray) == 25:
                return returnArray
        return returnArray

s = zerorpc.Server(NLProcessor())
s.bind("tcp://0.0.0.0:4242")
s.run()

