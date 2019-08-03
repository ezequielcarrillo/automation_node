/**
 * Created with JetBrains RubyMine.
 * User: ezequiel
 * Date: 12/7/14
 * Time: 10:57 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('automation').controller('login', function($scope, $http, $window) {

    $scope.logout = function() {

        $http
            .post('/logout', {})
            .success(function(data, status, headers, config) {

                $window.location.href = '/';
            })
            .error(function(data, status, headers, config) {

            });

    }


    $scope.remember = function() {

        if ($('input:checked').length == 1) {

            $('#name').attr('autocomplete', 'on')
        } else {
            $('#name').attr('autocomplete', 'off')
        }
    }

})