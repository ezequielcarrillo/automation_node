var db = require('../db.js')
var commons = require('./commons.js')

var PageObject = function() {

    var updatePageObject = function(id) {

        //$mysql.query("UPDATE components SET modified_at ='#{Time.new}', modified_by = '#{getUserName()}' WHERE object_id = '#{id}';")
    }

    var savePageObjectDetails = function(id, details) {

        //$mysql.query("UPDATE components SET  object_description ='#{details}' WHERE object_id = '#{id}';")

        updatePageObject(id);
    }

    var savePageObjectParameter = function(id, parameters) {
        /*
        parameters.each do |param |

            if param['id'].nil ?

            $mysql.query("INSERT INTO component_parameters (component_rel_id, parameter_name, parameter_value, parameter_description) VALUES('#{id}','#{param['name']}','#{param['value']}','#{param['desc']}');")# update test workflow parameters

        $mysql.query("SELECT * FROM test_workflow WHERE component_rel_id ='#{id}' group by execution_order;").each do |row |

                $mysql.query("SELECT id FROM component_parameters WHERE component_rel_id = '#{id}' and parameter_name = '#{param['name']}' and parameter_value = '#{param['value']}' and parameter_description = '#{param['desc']}';").each do |new |

                    $mysql.query("INSERT INTO test_workflow (test_rel_id, component_rel_id, execution_order, param_id, param_value) VALUES('#{row['test_rel_id']}','#{id}','#{row['execution_order']}','#{new['id']}','#{param['value']}');")
                end
            end
        else
            $mysql.query("UPDATE component_parameters SET parameter_name ='#{param['name']}', parameter_value = '#{param['value']}', parameter_description ='#{param['desc']}' WHERE id ='#{param['id']}';")
        end
        end
        */
        updatePageObject(id);

    }

    var savePageObjectAutomation = function(id, automation) {
        /*
        automation.each do |auto |

            if auto['id'].nil ? or auto['id'] == ''#
        insert
        $mysql.query("INSERT INTO component_automation (component_rel_id, element_rel_id, operation_rel_id, parameter_rel_id, execution_order) VALUES('#{id}','#{auto['element']}','#{auto['operation']}','#{auto['param']}','#{auto['order']}');")

        else# update
        $mysql.query("UPDATE component_automation SET component_rel_id = '#{id}',element_rel_id = '#{auto['element']}',operation_rel_id = '#{auto['operation']}',parameter_rel_id = '#{auto['param']}',execution_order = '#{auto['order']}' WHERE id = '#{auto['id']}';")

        end
        end
        */
        updateComponent(id);
        
    }

    var savePageObjectScript = function(id, script) {

        //  $mysql.query("UPDATE components SET object_script = '#{script}' WHERE object_id = '#{id}';")
        updatePageObject(id);
    }

    var deletePageObjectParameter = function(id, parameterId) {

        // $mysql.query("DELETE FROM component_parameters WHERE id  = '#{parameterId}';")# update test workflow parameters
        // $mysql.query("DELETE FROM test_workflow WHERE component_rel_id = '#{id}' and param_id = '#{parameterId}';")

        updatePageObject(id);
    }

    var deletePageObjectAutomation = function(id, parameterId) {

        // $mysql.query("DELETE FROM component_automation WHERE id  = '#{parameterId}';")
        updatePageObject(id);
    }

    var deleteScreenshot = function(id) {

        // $mysql.query("UPDATE components SET object_screenshot_name = '' WHERE object_id = '#{id}';")
        updatePageObject(id);
    }
    return {
        updatePageObject: updatePageObject,
        savePageObjectDetails: savePageObjectDetails,
        savePageObjectParameter: savePageObjectParameter,
        savePageObjectAutomation: savePageObjectAutomation,
        savePageObjectScript: savePageObjectScript,
        deletePageObjectParameter: deletePageObjectParameter,
        deletePageObjectAutomation: deletePageObjectAutomation,
        deleteScreenshot: deleteScreenshot
    }
}();

module.exports = PageObject;