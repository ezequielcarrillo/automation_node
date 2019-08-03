/**
 * Created with JetBrains RubyMine.
 * User: ezequiel
 * Date: 12/11/14
 * Time: 10:05 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('automation').controller('RightPanel', function($scope, $http, shared) {


    //RELOAD PANEL DATA
    $scope.reloadRightPanel = function() {

        shared.rightPanelData();
        $scope.rightTreeData = shared.datas;

    }

    //GET RIGHT PANEL DATA
    $scope.getLeftPanelData = function() {

        shared.rightPanelData();
        $scope.rightTreeData = shared.datas;
    }

    //SELECT ELEMENT RIGHT PANEL
    $scope.selectElementRightPanel = function($event) {


        if (shared.rightSelectedType() == 0) {

            angular.element('.right_panel').find('.active_selected').removeClass('active_selected');

            if (angular.element($event.target).prop("tagName") == 'SPAN') {
                angular.element($event.target).parent('li').addClass('active_selected open');
            } else {
                angular.element($event.target).addClass('active_selected open');
            }

        } else {

            $('.right_panel').find('.active_selected').removeClass('active_selected');
            if (angular.element($event.target).prop("tagName") == 'SPAN') {

                angular.element($event.target).parent('li').addClass('active_selected');
            } else {
                angular.element($event.target).addClass('active_selected');
            }
        }

    }


    //GET CHILDRENS FOR THE SELECTED ELEMENT
    $scope.getSelectedObjectChildElements = function() {


        var location = shared.url;
        var selectedFolder = shared.rightPanelSelected();

        $http
            .get('/getRightTreeChildElements', {
                params: {
                    location: location,
                    selectedFolder: selectedFolder

                }
            })
            .success(function(data, status, headers, config) {

                $('.active_selected').find('li').remove();

                $.each(data, function(index, element) {


                    angular.element('.active_selected').append("<ul><li  drag  type='" + element.object_type + "' class='child panelItem t_" + element.object_type + "' id='" + element.object_id + "'><span>" + element.object_name + "</span></li></ul>");

                    var gg = angular.element('.active_selected').find('ul li');
                    angular.element(gg).draggable({
                        appendTo: "body",
                        helper: "clone",
                        start: function(event, ui) {

                        }

                    });

                });

            })
            .error(function(data, status, headers, config) {

                angular.element('.alert-danger').show();
            });
    }


    //GET SELECTED ELEMENT DATA
    $scope.getSelectedElementData = function($event) {


        if (angular.element($event.target).hasClass('active_selected')) {

            if (shared.rightSelectedType() == 0) {

                angular.element($event.target).children('ul').toggle();
                angular.element($event.target).toggleClass('open');

            } else {
                return false;
            }
        } else {
            $scope.selectElementRightPanel($event);

            if (shared.rightSelectedType() == 0) {

                //get childs element
                $scope.getSelectedObjectChildElements();

            } else {

                return false;
            }
        }
    }




    //BIND
    $scope.getLeftPanelData();

})