/**
 * Created with JetBrains RubyMine.
 * User: ezequiel
 * Date: 12/7/14
 * Time: 9:42 PM
 * To change this template use File | Settings | File Templates.
 */
;

angular.module('automation').controller('Layout', function($scope, $http, $location, shared) {

    //ACTIVE MENU
    $scope.activeMenuItem = function() {
        var actualUrl = shared.url;

        $("a[href='" + actualUrl + "']").addClass('active_menu');
    }

    //TABS ACTION PANEL
    $scope.createTabs = function() {

        $("#tabs").tabs();
        $('.ui-tabs-panel').height($('.sidePanel').height());

    }

    $scope.expandPanel = function() {
        $(document).keydown(function(e) {
            switch (e.which) {
                case 37: // left
                    $('.right_panel_bar').trigger('click');
                    break;
                default:
                    return; // exit this handler for other keys
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
        });
    }

    //BIND
    $scope.activeMenuItem();
    $scope.createTabs();
    $scope.expandPanel();
})