/**
 * Created with JetBrains RubyMine.
 * User: ezequiel
 * Date: 12/7/14
 * Time: 9:39 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('automation').controller('TestSet', function($scope, $http, shared) {

    //GET SELECTED ELEMENT DATA
    $scope.dataTransfer = shared.actionPanel;

    //SHOW ACTION PANEL WHEN SELECTING OBJECT, NOT FOLDER
    $scope.isSelected = shared.selectedType;

    //SELECT ROW
    $scope.select = function($event) {

        angular.element('.testcomp').removeClass('selected');
        angular.element($event.target).parents('.testcomp').addClass('selected');

    }

    //BROWSERS
    $scope.browsers = ['FIREFOX', 'Chrome'];

    //SAVE TEST DETAILS
    $scope.saveTestDetails = function() {

        var elementId = shared.selectedId();
        var comments = $('.comment').val();

        $http
            .post('/saveTestDetails', {

                elementId: elementId,
                comments: comments

            })
            .success(function(data, status, headers, config) {

                angular.element('.alert-success').show();

            })
            .error(function(data, status, headers, config) {

                angular.element('.alert-danger').show();

            });

    }

    //SAVE WORKFLOW AND INPUTS

    $scope.saveTestWorkflow = function() {

        var elementId = shared.selectedId();

        $http
            .post('/saveTestWorkflow', {

                elementId: elementId,
                newComponents: $scope.dropworkflow,
                updateComponents: $scope.dataTransfer.data[1].workflow

            })
            .success(function(data, status, headers, config) {

                //  $scope.dataTransfer.data[1].workflow.push($scope.dropworkflow);
                angular.element('.alert-success').show();
                shared.getActionPanelData();
            })
            .error(function(data, status, headers, config) {

                angular.element('.alert-danger').show();
            });

    }

    //DELETE COMPONENT FROM TEST
    $scope.deleteTestWorkflow = function() {

        var elementId = shared.selectedId();
        var component = $('tbody').find('.selected').attr('id');
        var order = $('tbody').find('.selected').find('td:first').children('input').val();

        $http
            .post('/deleteTestWorkflow', {

                elementId: elementId,
                component: component,
                order: order

            })
            .success(function(data, status, headers, config) {

                $('tbody').find('.selected').remove();
                angular.element('.alert-success').show();

            })
            .error(function(data, status, headers, config) {

                angular.element('.alert-danger').show();
            });
    }

    $scope.saveTestBrowser = function() {

        var elementId = shared.selectedId();
        var browser = angular.element("option:selected").val();

        $http
            .post('/saveTestBrowser', {

                elementId: elementId,
                browser: browser

            })
            .success(function(data, status, headers, config) {

                angular.element('.alert-success').show();
            })
            .error(function(data, status, headers, config) {

                angular.element('.alert-danger').show();
            });
    }

    $scope.selectedComponent = function() {

        if (angular.element('.testcomp.ng-scope.selected').length > 0) {
            return false;
        } else {
            return true;
        }
    }

    //RUN SELECTED Test
    $scope.runTest = function($event) {

        var elementId = shared.selectedId();

        $http
            .post('/runTest', {

                elementId: elementId,
                location: shared.url

            })
            .success(function(data, status, headers, config) {

                alert('ok Test is Running');

            })
            .error(function(data, status, headers, config) {

                angular.element('.alert-danger').show();
            });

    }

    $scope.workflowChange = function() {

        /*
        if( $scope.dropworkflow==0 ){
            return true;
        }
        else{return false;}
          */
    }

    $scope.testEmpty = function() {

        if ($scope.dataTransfer.data.length == 0) {
            return false;
        } else {
            if ($scope.dataTransfer.data[1].workflow.length == 0) {

                return true;
            }
        }
    }



})