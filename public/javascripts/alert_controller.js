/**
 * Created with JetBrains RubyMine.
 * User: ezequiel
 * Date: 12/16/14
 * Time: 7:13 PM
 * To change this template use File | Settings | File Templates.
 */
angular.module('automation').controller('AlertDemoCtrl', function($scope) {

    $scope.alerts = [
        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    ];


    $scope.closeAlert = function(index) {
        // $scope.alerts.splice(index, 1);
        angular.element('.alert-danger').hide();

    };
});


angular.module('automation').controller('successDemoCtrl', function($scope) {

    $scope.alerts = [
        { type: 'success', msg: 'Ok Changes were saved correctly!!!' },
    ];


    $scope.closeAlert = function(index) {
        // $scope.alerts.splice(index, 1);
        angular.element('.alert-success').hide();

    };

});