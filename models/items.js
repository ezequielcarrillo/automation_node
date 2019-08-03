var mysql = require('mysql')
var db = require('../db.js')
var commons = require('./commons.js')

var Items = function() {

    var addNewElement = function(itemName, itemType, itemClass, itemParentId, callback) {
        var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'guada15joaco5momo4',
            database: 'automation'
        });
        connection.connect();
        var created_at = commons.timeNow();
        var created_by = commons.user();

        switch (itemClass) {
            case '/WebElements':
                connection.query("INSERT INTO objects (object_name,object_type, created_at, created_by, parent_object_id) VALUES('" + itemName + "','" + itemType + "','" + created_at + "','" + created_by + "','" + itemParentId + "');", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        //    callback(null, result);
                    }

                    callback(null, result);

                });
                connection.end();

                break;
            case '/PageObject':
                connection.query("INSERT INTO components (object_name,object_type, created_at, created_by, parent_object_id) VALUES('" + itemName + "','" + itemType + "','" + created_at + "','" + created_by + "','" + itemParentId + "');", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        //    callback(null, result);
                    }

                    callback(null, result);
                    connection.end();
                });
                break;
            case '/Tests':
                connection.query("INSERT INTO tests (object_name,object_type, created_at, created_by, parent_object_id) VALUES('" + itemName + "','" + itemType + "','" + created_at + "','" + created_by + "','" + itemParentId + "');", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null, result);
                    }

                    callback(null, result);
                    connection.end();
                });
                break;
            case '/Suites':
                connection.query("INSERT INTO suites (object_name,object_type, created_at, created_by, parent_object_id) VALUES('" + itemName + "','" + 1 + "','" + created_at + "','" + created_by + "','" + itemParentId + "');", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null, result);
                    }

                    callback(null, result);
                    connection.end();
                });
                break;
            case '/Libraries':
                connection.query("INSERT INTO settings (object_name,object_type, created_at, created_by, parent_object_id) VALUES('" + itemName + "','" + itemType + "','" + created_at + "','" + created_by + "','" + itemParentId + "');", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null, result);
                    }

                    callback(null, result);
                    connection.end();
                });
                break;
        }

    }

    var getLeftSidepanelData = function(location, callback) {
        var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'guada15joaco5momo4',
            database: 'automation'
        });
        connection.connect(function(err) {});
        switch (location) {
            case '/WebElements':

                connection.query('SELECT * FROM objects WHERE parent_object_id = 0;', function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }

                    callback(null, temp);

                });

                break;
            case '/PageObject':
                connection.query('SELECT * FROM components WHERE parent_object_id = 0;', function(err, rows, result) {
                    var temp = JSON.stringify(rows);
                    callback(null, temp);
                    connection.end();
                });
                break;
            case '/Tests':
                connection.query('SELECT * FROM tests WHERE parent_object_id = 0;', function(err, rows, result) {
                    var temp = JSON.stringify(rows);
                    callback(null, temp);
                    connection.end();
                });
                break;
            case '/Suites':
                connection.query('SELECT * FROM suites WHERE parent_object_id = 0;', function(err, rows, result) {
                    var temp = JSON.stringify(rows);
                    callback(null, temp);
                    connection.end();
                });
                break;
            case '/Libraries':
                connection.query('SELECT * FROM settings;', function(err, rows, result) {
                    var temp = JSON.stringify(rows);
                    callback(null, temp);
                    connection.end();
                });
                break;
        }

    }

    var getRightSidepanelData = function(location, callback) {
        var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'guada15joaco5momo4',
            database: 'automation'
        });
        connection.connect(function(err) {});
        switch (location) {
            case '/PageObject':
                connection.query('SELECT * FROM objects WHERE parent_object_id = 0;', function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }

                    callback(null, temp);
                    connection.end();
                });

                break;
            case '/Tests':
                connection.query('SELECT * FROM components WHERE parent_object_id = 0;', function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }

                    callback(null, temp);
                    connection.end();
                });

                break;
            case '/Suites':
                connection.query('SELECT * FROM tests WHERE parent_object_id = 0;', function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }

                    callback(null, temp);
                    connection.end();
                });

                break;
        }

    }

    var getTreeChildElements = function(location, selectedFolder, callback) {
        var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'guada15joaco5momo4',
            database: 'automation'
        });
        connection.connect(function(err) {});
        switch (location) {
            case '/WebElements':
                connection.query('SELECT * FROM objects WHERE parent_object_id = ' + selectedFolder + ';', function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);

                        return callback(null, temp);
                    }

                    callback(null, temp);
                    connection.end();
                });
                break;
            case '/PageObject':
                connection.query('SELECT * FROM components WHERE parent_object_id = ' + selectedFolder + ';', function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);

                        return callback(null, temp);
                    }

                    callback(null, temp);
                    connection.end();
                });
                break;
            case '/Tests':
                connection.query('SELECT * FROM tests WHERE parent_object_id = ' + selectedFolder + ';', function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);

                        return callback(null, temp);
                    }

                    callback(null, temp);
                    connection.end();
                });
                break;
            case '/Suites':
                connection.query('SELECT * FROM suites WHERE parent_object_id = ' + selectedFolder + ';', function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);

                        return callback(null, temp);
                    }

                    callback(null, temp);
                    connection.end();
                });
                break;
            case '/Libraries':
                connection.query('SELECT * FROM settings WHERE parent_object_id = ' + selectedFolder + ';', function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);

                        return callback(null, temp);
                    }

                    callback(null, temp);
                    connection.end();
                });
                break;
        }

    }

    var getRightTreeChildElements = function(location, selectedFolder, callback) {
        var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'guada15joaco5momo4',
            database: 'automation'
        });
        connection.connect(function(err) {});
        switch (location) {
            case '/PageObject':
                connection.query('SELECT * FROM objects WHERE parent_object_id = ' + selectedFolder + ';', function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }

                    callback(null, temp);
                    connection.end();
                });
                break;
            case '/Tests':
                connection.query('SELECT * FROM components WHERE parent_object_id = ' + selectedFolder + ';', function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }

                    callback(null, temp);
                    connection.end();
                });
                break;
            case '/Suites':
                connection.query('SELECT * FROM tests WHERE parent_object_id = ' + selectedFolder + ';', function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }

                    callback(null, temp);
                    connection.end();
                });
                break;
        }
    }

    var updateElementName = function(location, elementId, elementNewName, callback) {
        var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'guada15joaco5momo4',
            database: 'automation'
        });
        connection.connect(function(err) {});
        switch (location) {
            case '/WebElements':
                connection.query("UPDATE objects SET object_name = '" + elementNewName + "' WHERE object_id= " + elementId + ";", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }

                    callback(null, temp);

                })
                connection.end();
                break;
            case '/PageObject':

                connection.query("UPDATE components SET object_name = '" + elementNewName + "' WHERE object_id= " + elementId + ";", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }

                    callback(null, temp);
                    connection.end();
                })
                break;
            case '/Tests':

                connection.query("UPDATE tests SET object_name = '" + elementNewName + "' WHERE object_id= " + elementId + ";", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }

                    callback(null, temp);
                    connection.end();
                })
                break;
            case '/Suites':

                connection.query("UPDATE suites SET object_name = '" + elementNewName + "' WHERE object_id= " + elementId + ";", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }

                    callback(null, temp);
                    connection.end();
                })
                break;
            case '/Libraries':

                connection.query("UPDATE settings SET object_name = '" + elementNewName + "' WHERE object_id= " + elementId + ";", function(err, rows, result) {
                        if (err) {
                            callback(err, null);
                        } else {
                            var temp = JSON.stringify(rows);
                            return callback(null, temp);
                        }

                        callback(null, temp);
                        connection.end();
                    })
                    //rename fisical file
                break;
        };

    }

    var removeSelectedElement = function(location, elementId, callback) {

        var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'guada15joaco5momo4',
            database: 'automation'
        });
        connection.connect();
        switch (location) {
            case '/WebElements':
                connection.query("DELETE FROM objects WHERE object_id = '" + elementId + "';", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }
                });
                connection.end();
                break;
            case '/PageObject':
                connection.query("DELETE FROM components WHERE object_id = '" + elementId + "';", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }
                });
                connection.query("DELETE FROM component_parameters WHERE component_rel_id  = '" + elementId + "';", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }
                });
                connection.query("DELETE FROM component_automation WHERE component_rel_id  = '" + elementId + "';", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }
                });
                connection.query("DELETE FROM test_workflow WHERE component_rel_id  = '" + elementId + "';", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }
                });
                connection.end();
                break;
            case '/Tests':
                connection.query("DELETE FROM tests WHERE object_id = '" + elementId + "';", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }
                });
                connection.query("DELETE FROM requirements WHERE test_rel_id = '" + elementId + "';", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }
                });
                connection.query("DELETE FROM test_workflow WHERE test_rel_id = '" + elementId + "';", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }
                });
                connection.end();
                break;
            case '/Suites':
                connection.query("DELETE FROM suites WHERE object_id = '" + elementId + "';", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }
                });
                connection.query("DELETE FROM suite_dependencies WHERE suites_id = '" + elementId + "';", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }
                });
                connection.end();
                break;
            case '/Libraries':
                connection.query("DELETE FROM settings WHERE object_id = '" + elementId + "';", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }
                });
                connection.end();
                break;
        }
    }

    var getSelectedElementData = function(location, id, callback) {
        var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'guada15joaco5momo4',
            database: 'automation'
        });
        connection.connect();
        switch (location) {
            case '/WebElements':
                connection.query("SELECT * FROM objects  INNER JOIN object_properties ON object_id = object_rel_id WHERE object_id = '" + id + "';", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var temp = JSON.stringify(rows);
                        return callback(null, temp);
                    }

                    callback(null, temp);
                    connection.end();
                })
                break;
            case '/PageObject':

                break;
            case '/Tests':
                var results = [];
                var dependencies = [];
                var coverage = [];
                var workflow = [];
                var results_history = [];

                connection.query("SELECT * FROM tests WHERE object_id =  '" + id + "';", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        results.push(rows);
                    }
                })

                connection.query("SELECT * FROM test_history WHERE test_rel_id =  '" + id + "';", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        results_history.push(rows);
                    }
                })
                connection.query("SELECT * FROM suite_dependencies INNER JOIN suites ON object_id = suite_id WHERE test_rel_id = '" + id + "' GROUP BY object_name;", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        dependencies.push(rows);
                        //  return callback(null, dependencies);
                    }
                })
                connection.query("SELECT null as parameters, test_workflow.id, test_workflow.execution_order, components.object_id, components.object_name FROM test_workflow INNER JOIN components ON component_rel_id = object_id WHERE test_rel_id = '" + id + "' GROUP BY execution_order ORDER BY execution_order;", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var pageObjects = JSON.stringify(rows);
                        if (pageObjects.length < 3) {
                            return false;
                        } else {
                            var params = [];
                            var dat = JSON.parse(pageObjects);
                            workflow.push(dat);

                            for (var i in dat) {

                                console.log(dat[i]);
                                console.log('=================================')
                                connection.query("SELECT component_parameters.parameter_name, test_workflow.id,test_workflow.param_id,test_workflow.param_value FROM test_workflow INNER JOIN component_parameters ON test_workflow.param_id = component_parameters.id WHERE test_workflow.component_rel_id = '" + dat[i].object_id + "' AND test_workflow.test_rel_id = '" + id + "' AND test_workflow.execution_order = '" + dat[i].execution_order + "';", function(err, rows, result) {
                                    if (err) {
                                        callback(err, null);
                                    } else {
                                        var param = rows;
                                        console.log(param);
                                        console.log('----------------------------------------');
                                        params.push(param);
                                        // console.log(dat[i].object_id);

                                    }
                                })

                                if (dat.length - 1 == i) {
                                    results.push({ 'dependencies': dependencies, 'coverage': coverage, 'workflow': workflow, 'results_history': results_history });
                                    callback(null, results);
                                    connection.end();
                                }
                            }
                        }

                    }
                })



                break;

            case '/Suites':
                connection.query("SELECT * FROM suites WHERE object_id = '" + id + "';", function(err, rows, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var deatils = JSON.stringify(rows);

                    }

                    connection.query("SELECT *, null as result FROM suite_dependencies INNER JOIN tests ON object_id = test_rel_id WHERE suite_id = '" + id + "';", function(err, rows, result) {
                        if (err) {
                            callback(err, null);
                        } else {
                            var tests = JSON.stringify(rows);
                        }

                        callback(null, tests);
                        connection.end();
                    })
                })

                break;

            case '/Libraries':
                connection.query("SELECT * FROM settings WHERE object_id = '" + id + "';", function(err, rows, result) {
                        if (err) {
                            callback(err, null);
                        } else {
                            var temp = JSON.stringify(rows);
                            return callback(null, temp);
                        }

                        callback(null, temp);
                        connection.end();
                    })
                    //read file and send content
                break;
        }
        /*
            when '/PageObject'

                            param = []
                            auto = []
                            dependencies = []
                            operations = []

                            $mysql.query("SELECT * FROM components WHERE object_id = '#{id}';").each do |row|

                              results << row
                            end

                            $mysql.query("SELECT * FROM component_parameters WHERE component_rel_id = '#{id}';").each do |row|

                              param <<  row
                            end

                            $mysql.query("SELECT tests.object_name, tests.created_by, tests.created_at FROM tests
                                          INNER JOIN test_workflow
                                          ON test_rel_id = object_id
                                          WHERE component_rel_id = '#{id}'
                                          GROUP BY object_name;").each do |row|
                              dependencies <<  row
                            end

                            $mysql.query("
                                    SELECT component_automation.id,objects.object_id, objects.object_name,
                                    actions.id as action_id, actions.action_name,
                                    component_parameters.id as param_id,
                                    component_parameters.parameter_name
                                    FROM component_automation
                                    INNER JOIN objects
                                    ON element_rel_id = object_id
                                    INNER JOIN actions
                                    ON operation_rel_id = actions.id
                                    INNER JOIN component_parameters
                                    ON parameter_rel_id = component_parameters.id
                                    WHERE component_automation.component_rel_id = '#{id}';").each do |row|
                              auto <<  row
                            end

                              $mysql.query("
                                      select component_automation.id,objects.object_id, objects.object_name,
                                      actions.id as action_id, actions.action_name
                                      FROM component_automation
                                      INNER JOIN objects
                                      ON element_rel_id = object_id
                                      INNER JOIN actions
                                      ON operation_rel_id = actions.id
                                      WHERE (component_automation.component_rel_id = '#{id}'
                                      and parameter_rel_id = -1 or parameter_rel_id = '');").each do |row|
                                auto <<  row
                            end

                            $mysql.query("SELECT * FROM actions;",:as => :json).each do |operation|

                              operations << operation

                            end

                            results <<  {:parameters => param , :automation => auto, :dependencies => dependencies, :operations => operations }

                         */


    }

    return {
        addNewElement: addNewElement,
        getLeftSidepanelData: getLeftSidepanelData,
        getRightSidepanelData: getRightSidepanelData,
        getTreeChildElements: getTreeChildElements,
        getRightTreeChildElements: getRightTreeChildElements,
        updateElementName: updateElementName,
        removeSelectedElement: removeSelectedElement,
        getSelectedElementData: getSelectedElementData

    }

}();

module.exports = Items;