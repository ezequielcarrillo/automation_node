/**
 * Created with JetBrains RubyMine.
 * User: ezequiel
 * Date: 12/7/14
 * Time: 9:40 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('automation').controller('Libraries', function ($scope, $http, shared) {

    //GET SELECTED ELEMENT DATA
    $scope.dataTransfer = shared.actionPanel;

    $scope.fileEmpty = function(){

        if(angular.element('.library').val().length == 0){

            return true;
        }
    }
})