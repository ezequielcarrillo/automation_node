/**
 * Created with JetBrains RubyMine.
 * User: ezequiel
 * Date: 12/9/14
 * Time: 8:55 PM
 * To change this template use File | Settings | File Templates.
 */
// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('automation').controller('ModalInstanceCtrl', function($scope, $modalInstance, $http, $modal, shared) {

    $scope.objectName = '';
    $scope.selectedName = '';

    //SAVE NEW ELEMENT
    $scope.saveNewElement = function() {

        var itemName = $scope.objectName;
        var itemType = $('.type option:selected').attr('id');
        var itemParentId = shared.selectedId();
        var itemClass = shared.url;


        $http
            .post('/addNewElement', { itemName: itemName, itemType: itemType, itemClass: itemClass, itemParentId: itemParentId })

        .success(function() {

                //RELOAD LEFT PANEL DATA
                shared.treePanelData();
                angular.element('.alert-success').show();
            })
            .error(function(data, status, headers, config) {

                angular.element('.alert-danger').show();
            });

    };


    $scope.ok = function() {

        $scope.saveNewElement();

        $modalInstance.close();
    };

    $scope.cancel = function() {

        $modalInstance.dismiss('cancel');
    };


});

angular.module('automation').controller('RemoveDialogCtrl', function($scope, $modalInstance, $http, $modal, shared) {


    $scope.removeElement = function() {

        var location = shared.url;
        var elementId = shared.selectedId();

        $http
            .post('/removeSelectedElement', {

                location: location,
                elementId: elementId

            })
            .success(function(data, status, headers, config) {

                shared.treePanelData();
                angular.element('.alert-success').show();

            })
            .error(function(data, status, headers, config) {

                angular.element('.alert-danger').show();
            });
    };

    $scope.remove = function() {

        $scope.removeElement();

        $modalInstance.close();
    };

    $scope.cancel = function() {

        $modalInstance.dismiss('cancel');
    };

    //SELECTED ITEM NAME
    $scope.selectedName = shared.selectedName();


});


angular.module('automation').controller('EditDialogCtrl', function($scope, $modalInstance, $http, $modal, shared) {


    $scope.editElement = function() {

        var location = shared.url;
        var elementId = shared.selectedId();
        var elementNewName = $scope.selectedName;

        $http
            .post('/editElementName', {

                location: location,
                elementId: elementId,
                elementNewName: elementNewName

            })
            .success(function(data, status, headers, config) {

                //UPDATE NAME ON THE UI
                shared.treePanelData();
            })
            .error(function(data, status, headers, config) {

                angular.element('.alert-danger').show();
            });
    };

    $scope.edit = function() {
        $scope.editElement();
        $modalInstance.close();
    };

    $scope.cancel = function() {

        $modalInstance.dismiss('cancel');
    };


    //SELECTED ITEM NAME
    $scope.selectedName = shared.selectedName();
});