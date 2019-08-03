var db = require('../db.js')
var commons = require('./commons.js')

var Test = function() {

    var updateTest = function(id) {

        //  $mysql.query("UPDATE tests SET modified_at ='#{Time.new}', modified_by = '#{getUserName()}' WHERE object_id = '#{id}';")
    }

    var getParametersInputs = function(id) {
        
         var results =[];
        /*
          $mysql.query("SELECT id, parameter_name, parameter_value FROM automation.component_parameters
                        WHERE component_rel_id ='#{id}';",:as => :json).each do |row|

            results << row
          end

          results = results.to_json
           */
          return results;
       
    }

    var updateTestWorkflow = function(id, updateComponent) {
        /*
          updateComponent.each do |component|

            component['parameters'].each do |row|

               $mysql.query("UPDATE test_workflow SET param_value ='#{row['param_value']}',
                             execution_order = '#{component['execution_order']}'
                             WHERE id = '#{row['id']}';")

            end
            if component['parameters'].empty?
              $mysql.query("INSERT INTO test_workflow (test_rel_id, component_rel_id, execution_order)
                           VALUES('#{id}', '#{component['object_id']}', '#{component['execution_order']}');")

            end
          end
*/
          updateTest(id)    
          
    }

    var saveTestWorkflow = function(id, newComponent) {
        /*
          newComponent.each do |component|

            component['parameters'].each do |row|

              $mysql.query("INSERT INTO test_workflow (test_rel_id, component_rel_id, execution_order, param_id, param_value)
                           VALUES('#{id}', '#{component['object_id']}', '#{component['execution_order']}', '#{row['param_id']}', '#{row['param_value']}');")

            end
            if component['parameters'].empty?
              $mysql.query("INSERT INTO test_workflow (test_rel_id, component_rel_id, execution_order)
                           VALUES('#{id}', '#{component['object_id']}', '#{component['execution_order']}');")

            end

          end
        */
          updateTest(id)
                  
    }

    var deleteTestWorkflow = function(id, component, order) {

        // $mysql.query("DELETE FROM test_workflow WHERE test_rel_id = '#{id}' and execution_order = '#{order}' and component_rel_id = '#{component}' ")

        updateTest(id)
    }


    var saveTestDetails = function(id, details) {

        // $mysql.query("UPDATE tests SET object_description ='#{details}' WHERE object_id = '#{id}';")
        updateTest(id)

    }

    var saveTestBrowser = function(id, browser) {

        // $mysql.query("UPDATE tests SET browser ='#{browser}' WHERE object_id = '#{id}';")
        updateTest(id)
    }


    return {
        updateTest: updateTest,
        getParametersInputs: getParametersInputs,
        updateTestWorkflow: updateTestWorkflow,
        saveTestWorkflow: saveTestWorkflow,
        deleteTestWorkflow: deleteTestWorkflow,
        saveTestDetails: saveTestDetails,
        saveTestBrowser: saveTestBrowser
    }
}();

module.exports = Test;