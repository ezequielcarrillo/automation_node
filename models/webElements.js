var db = require('../db.js')
var commons = require('./commons.js')

var WebElements = function() {
    var saveWebElementProperties = function(id, locator, locatorValue) {
 
        var results = [];
        /*
        db.conection.query("SELECT * FROM object_properties WHERE object_rel_id = '#{id}'").each do |result |

                results << result

            end

        if results.empty ? == true

        $mysql.query("INSERT INTO object_properties
                (object_rel_id, locator, locator_value) VALUES('#{id}', '#{locator}', '#{locatorValue}');
                ")
                else

                    $mysql.query("UPDATE object_properties SET locator = '#{locator}', locator_value ='#{locatorValue}'
                    WHERE object_rel_id = '#{id}';
                    ")

                    end

                    $mysql.query("UPDATE objects SET modified_at ='#{Time.new}', modified_by = '#{getUserName()}' WHERE object_id = '#{id}';")

                    end                          
                            */
    };

    var saveWebElementDetails = function(id, details) {

        //    $mysql.query("UPDATE objects SET object_description ='#{details}' WHERE object_id = '#{id}';")
        //    $mysql.query("UPDATE objects SET modified_at ='#{Time.new}', modified_by = '#{getUserName()}' WHERE object_id = '#{id}';")
    }
    return {
        saveWebElementProperties: saveWebElementProperties,
        saveWebElementDetails: saveWebElementDetails

    }
}();
module.exports = WebElements;