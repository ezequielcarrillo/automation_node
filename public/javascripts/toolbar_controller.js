/**
 * Created with JetBrains RubyMine.
 * User: ecarrillo
 * Date: 12/12/14
 * Time: 11:14 AM
 * To change this template use File | Settings | File Templates.
 */

angular.module('automation').controller('Toolbar', function($scope, $modal, $log, $http, shared) {

    //TOGGLE SEARCH BOX
    $scope.toggleSearchBox = function() {

        $('.search').toggle();
    }

    //OPEN OBJECT LEFT PANEL ADD DIALOG
    $scope.open = function(size) {

        var modalInstance = $modal.open({
            templateUrl: 'addNewItemDialog.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {

            }
        });
    };

    // OPEN REMOVE OBJECT LEFT PANEL DIALOG
    $scope.openRemoveDialog = function(size) {

        var modalInstance = $modal.open({
            templateUrl: 'deleteDialog.html',
            controller: 'RemoveDialogCtrl',
            size: size,
            resolve: {

            }
        });
    };


    // OPEN Edit OBJECT LEFT PANEL DIALOG
    $scope.openEditDialog = function(size) {

        var modalInstance = $modal.open({
            templateUrl: 'editDialog.html',
            controller: 'EditDialogCtrl',
            size: size,
            resolve: {

            }
        });
    };

    //SELECTED ELEMENT IS TYPE FOLDER
    $scope.folderSelected = function() {

        return angular.element('.t_1.selected').length;
    }

    //SELECTED ELEMENT SIDE PANEL
    $scope.isSelected = function() {
        return $('.selected').length;
    }

    //RELOAD LEFT PANEL DATA TREE
    $scope.reloadPanel = function() {

        shared.treePanelData();
    }

    $scope.toolbarRequired = function() {
        return shared.url;
    }
})