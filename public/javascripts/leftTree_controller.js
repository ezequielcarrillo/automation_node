/**
 * Created with JetBrains RubyMine.
 * User: ezequiel
 * Date: 12/11/14
 * Time: 10:05 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('automation').controller('LeftPanel', function($scope, $http, shared) {


    //GET LEFT PANEL DATA
    $scope.getLeftPanelData = function() {

        shared.treePanelData();
        $scope.leftTreeData = shared.data;
    }


    //SELECT ELEMENT SIDE PANEL LEFT

    $scope.selectElementLeftPanel = function($event) {

        $event.stopPropagation();

        if (shared.selectedType() == 0) {

            angular.element('.left_panel').find('.selected').removeClass('selected');

            if (angular.element($event.target).prop("tagName") == 'SPAN') {

                angular.element($event.target).parent('li').addClass('selected open');

            } else {
                angular.element($event.target).addClass('selected open');

            }

        } else {

            $('.left_panel').find('.selected').removeClass('selected');
            if (angular.element($event.target).prop("tagName") == 'SPAN') {

                angular.element($event.target).parent('li').addClass('selected');
            } else {
                angular.element($event.target).addClass('selected');
            }
        }

    }

    //GET CHILDRENS FOR THE SELECTED ELEMENT
    $scope.getSelectedObjectChildElements = function() {


        var location = shared.url;
        var selectedFolder = shared.selectedId();

        $http
            .get('/getTreeChildElements', {
                params: {
                    location: location,
                    selectedFolder: selectedFolder

                }
            })
            .success(function(data, status, headers, config) {

                $('.selected').find('ul').remove();

                $.each(data, function(index, element) {

                    $('.selected').append("<ul><li ng-click='getSelectedElementData($event)' ng-repeat='item in leftTreeData | filter : searchLeftPanel' type='" + element.object_type + "' class='child panelItem t_" + element.object_type + "' id='" + element.object_id + "'><span>" + element.object_name + "</span></li></ul>");

                });

            })
            .error(function(data, status, headers, config) {

                angular.element('.alert-danger').show();
            });
    }

    //GET ACTION PANEL DATA
    $scope.getSelectedActionPanelData = function() {

        shared.getActionPanelData();

    }

    //GET Page Object SCREENSHOT

    $scope.loadImage = function() {

        var id = shared.selectedId();
        $http
            .get('/pic/' + id, { data: id })
            .success(function(data, status, headers, config) {

                angular.element('.preview').attr('src', 'pic/' + id)
            })
            .error(function(data, status, headers, config) {});
    }


    //GET SELECTED ELEMENT DATA
    $scope.getSelectedElementData = function($event) {

        if (angular.element($event.target).hasClass('selected')) {

            if (shared.selectedType() == 0) {

                angular.element($event).children('ul').toggle();
                angular.element($event.target).toggleClass('open');
                angular.element('.left_panel').find('.selected').children('ul').toggleClass('closed');
            } else {
                return false;
            }
        } else {
            $scope.selectElementLeftPanel($event);

            if (shared.selectedType() == 0) {

                //get childs element
                $scope.getSelectedObjectChildElements();

            }
            if (shared.selectedType() == 1) {

                //get element data
                $scope.getSelectedActionPanelData();
            } else {
                // alert(shared.alertMsg);
            }
        }

    }


    $scope.arrowControl = function() {

            $(document).keydown(function(e) {
                let selected = angular.element('.selected');
                let leftPanelSelected = angular.element('.left_panel').find('.selected');

                if (e.keyCode == 40) {
                    if (selected.attr('type') == 0) {
                        if (leftPanelSelected.find('ul').next().length == 0) {
                            leftPanelSelected.closest('li').next().trigger('click');
                            return false;
                        } else {
                            selected.find('li').eq(0).trigger('click');
                            return false;
                        }
                    }
                    if (selected.attr('type') == 1) {

                        if (leftPanelSelected.parent('ul').next('ul').find('li').length == 0) {
                            leftPanelSelected.parent('ul').parent('li').next('li').click();
                        } else {
                            leftPanelSelected.parent('ul').next('ul').find('li').trigger('click');
                            return false;
                        }
                    }
                }
                if (e.keyCode == 38) {
                    if (selected.attr('type') == 0) {
                        leftPanelSelected.closest('li').prev().trigger('click');
                        return false;
                    }
                    if (selected.attr('type') == 1) {

                        if (leftPanelSelected.parent('ul').prev('ul').find('li').length == 0) {
                            leftPanelSelected.parent('ul').parent('li').click();
                        } else {
                            leftPanelSelected.parent('ul').prev('ul').find('li').trigger('click');
                            return false;
                        }
                    }
                }
            });
        }
        //BIND


    $scope.getLeftPanelData();
    $scope.arrowControl();
})