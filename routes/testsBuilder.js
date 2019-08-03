var express = require('express');
var router = express.Router();
var auth = require('../middleware/authentication.js');
var path = require('path');
var app = express();
var TestBuilder = require('../models/runTests');

router.post('/runTest', function(req, res, next) {

    var id = req.body.elementId;
    var location = req.body.location;
    var data = TestBuilder.testQueryBuilder(test_id, suite_execution_id);
    /*
      if location == '/Suites'
      
         tests = getSuiteDependencies(id)
    	   suite_execution_id = SecureRandom.hex(20)
    	 
         tests.each do |test_id|
            testQueryBuilder(test_id, suite_execution_id)
          end
      else
    	  suie_id = nil
        testQueryBuilder(id,suite_execution_id)
      end
      */
    res.end(data);
});


module.exports = router;