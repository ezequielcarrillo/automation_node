var db = require('../db.js')
var commons = require('./commons.js')

var Suites = function() {

    var updateSuite = function(id) {

        //$mysql.query("UPDATE suites SET modified_at ='#{Time.new}', modified_by = '#{getUserName()}' WHERE object_id = '#{id}';")
    }

    var saveSuiteTests = function(id, testsIds) {
        /*
          testsIds.each do |test|

              $mysql.query("INSERT INTO suite_dependencies (suite_id, test_rel_id) VALUES('#{id}','#{test['testId']}');")

          end
          */
          updateSuite(id);
               
    }

    var removeTestFromSuite = function(id, testsId) {

        //$mysql.query("DELETE FROM suite_dependencies WHERE suite_id ='#{id}' AND  test_rel_id ='#{testsId}';")
        updateSuite(id);
    }

    var saveSuiteDetails = function(id, details) {

        //  $mysql.query("UPDATE suites SET object_description = '#{details}' WHERE object_id ='#{id}';")
        updateSuite(id);
    }

    var getSuiteDependencies = function(id) {
        
          var tests = [];
          /*
          $mysql.query("SELECT * FROM suite_dependencies WHERE suite_id ='#{id}';").each do |test|
            tests << test['test_rel_id']
          end
        */
          return tests;
        
    }

    return {
        updateSuite: updateSuite,
        saveSuiteTests: saveSuiteTests,
        removeTestFromSuite: removeTestFromSuite,
        saveSuiteDetails: saveSuiteDetails,
        getSuiteDependencies: getSuiteDependencies,

    }
}();

module.exports = Suites;