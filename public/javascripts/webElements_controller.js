/**
 * Created with JetBrains RubyMine.
 * User: ezequiel
 * Date: 12/7/14
 * Time: 9:38 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('automation').controller('webElements', function ($scope, $http, shared) {

    //SHOW ACTION PANEL WHEN SELECTING OBJECT, NOT FOLDER
    $scope.isSelected = shared.selectedType;

    //SAVE SELECTED OBJECT PROPERTIES
    $scope.saveObjectsProperties = function (){

        var elementId = shared.selectedId();
       var locator=  $('#locator').val();
       var locatorValue=  $('#locatorvalue').val();

        $http
            .post('/saveWebElementsProperties', {

                elementId: elementId,
                locator: locator,
                locatorValue:locatorValue
            })
            .success(function (data, status, headers, config) {

                angular.element('.alert-success').show();

            })
            .error(function (data, status, headers, config) {

                angular.element('.alert-danger').show();
            });
/*
        var elementId = shared.selectedId();
        var properties = [];

        $('.properties').find('input').each(function(){

            properties.push($(this).val());

        });

        $http
            .post('/saveWebElementsProperties', {

                elementId: elementId,
                properties: properties
            })
            .success(function (data, status, headers, config) {

                angular.element('.alert-success').show();

            })
            .error(function (data, status, headers, config) {

                angular.element('.alert-danger').show();
            });
            */
    }


    //SAVE SELECTED OBJECT DETAILS
    $scope.saveObjectDetails = function (){

        var elementId = shared.selectedId();
        var comments = $scope.dataTransfer.data[0].object_description;


        $http
            .post('/saveWebElementsDetails', {

                elementId: elementId,
                comments: comments

            })
            .success(function (data, status, headers, config) {

                angular.element('.alert-success').show();

            })
            .error(function (data, status, headers, config) {

                angular.element('.alert-danger').show();
            });
    }


        $scope.dataTransfer = shared.actionPanel;

})
