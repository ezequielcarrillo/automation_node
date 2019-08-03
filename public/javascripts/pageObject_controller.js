/**
 * Created with JetBrains RubyMine.
 * User: ezequiel
 * Date: 12/7/14
 * Time: 9:39 PM
 * To change this template use File | Settings | File Templates.
 */
angular.module('automation').controller('PageObject', function ($scope, $http, shared) {

    //SHOW ACTION PANEL WHEN SELECTING OBJECT, NOT FOLDER
    $scope.isSelected = shared.selectedType;

    //ADD PARAMETER FIELDS
    $scope.sofa= shared.empty;

    $scope.addParameter = function($event){

        var empty =true;
        $($('.sofa').find('input')).each(function(){

            if($(this).val()==''){

                empty = false;
            }

        });

        if (empty){
            $scope.sofa.push('');
        }
        else{
            angular.element($event.target).css('disabled','true');
        }

    }


    //ADD Automation FIELDS
    $scope.automationObject = shared.row;

    $scope.addfields = function(){

        $scope.automationObject.push('');

        $('.dropzone').droppable({

            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            accept: ":not(.ui-sortable-helper)",


            drop: function( event, ui ) {

                var object = ui.draggable.clone();
                $( this ).html(object.text());
                $( this ).attr('id',object.attr('id'));
            }

        });
    }

    //GET SELECTED ELEMENT DATA
    $scope.dataTransfer = shared.actionPanel;

    //SAVE COMPONENT DETAILS
    $scope.savePageObjectDetails = function(){

        var elementId = shared.selectedId();
        var comments =$('.comment').val();

        $http
            .post('/savePageObjectDetails', {

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


    //SAVE COMPONENT PARAMETERS
    $scope.savePageObjectParameter = function(){

        var elementId = shared.selectedId();
        var parameters =[];

        angular.element('.paramrow').each(function(){

               var id = $(this).attr('id');
               var name = $(this).find('.name').val();
               var value = $(this).find('.value').val();
               var desc = $(this).find('.desc').val();

               parameters.push({id: id ,name: name , value: value,desc: desc});
        })

        $http
            .post('/savePageObjectParameter', {

                elementId: elementId,
                parameters:parameters

            })
            .success(function (data, status, headers, config) {

                angular.element('.alert-success').show();
				$('.left_panel .selected').trigger('click');
				shared.getActionPanelData();
            })
            .error(function (data, status, headers, config) {

                angular.element('.alert-danger').show();

            });

    }

    //DELTE PARAMETER
    $scope.deleteParam = function($event){

        var elementId = shared.selectedId();
        var parameterId =angular.element($event.target).parents('tr').attr('id');

        $http
            .post('/deletePageObjectParameter', {

                elementId: elementId,
                parameterId:parameterId

            })
            .success(function (data, status, headers, config, $event) {

                angular.element('#'+parameterId).remove();
                angular.element('.alert-success').show();

            })
            .error(function (data, status, headers, config) {

                angular.element('.alert-danger').show();
            });


    }


    //REMOVE NEW PARAM
    $scope.removeNewParam = function($event){
        $scope.sofa.length = 0;

    }

    //Remove new auto
    $scope.removeNewAuto = function($event){
      $scope.automationObject.length = 0;
    }

    //DELTE Automation
    $scope.deleteAuto = function($event){

        var elementId = shared.selectedId();
        var parameterId =angular.element($event.target).parents('tr').attr('id');

        $http
            .post('/deletePageObjectAutomation', {

                elementId: elementId,
                parameterId:parameterId

            })
            .success(function (data, status, headers, config) {

                angular.element('#'+parameterId).remove();
                angular.element('.alert-success').show();

            })
            .error(function (data, status, headers, config) {

                angular.element('.alert-danger').show();
            });

    }

    //SAVE COMPONENT AUTOMATION
    $scope.savePageObjectAutomation = function(){

        var elementId = shared.selectedId();
        var automation = [];
        var i = 0;

        angular.element('.autorow').each(function(){

            var id = $(this).attr('id');
            var order = i++;
            var element = $(this).find('.element').attr('id');
            var operation = $(this).find('.operation option:selected').val();
            var param = $(this).find('.param option:selected').val();

            automation.push({id: id ,element: element , operation: operation,param: param,order: order});

        })

        $http
            .post('/savePageObjectAutomation', {

                elementId: elementId,
                automation: automation

            })
            .success(function (data, status, headers, config) {

                angular.element('.alert-success').show();
				shared.getActionPanelData();
            })
            .error(function (data, status, headers, config) {

                angular.element('.alert-danger').show();
            });

    }

    //SAVE COMPONENT SCRIPT
    $scope.savePageObjectScript = function(){

        var elementId = shared.selectedId();
        var script = $('.script').val();


        $http
            .post('/savePageObjectScript', {

                elementId: elementId,
                script: script

            })
            .success(function (data, status, headers, config) {

                angular.element('.alert-success').show();

            })
            .error(function (data, status, headers, config) {

                angular.element('.alert-danger').show();
            });

    }

    $scope.deleteScreenshot = function(){

        var elementId = shared.selectedId();
        $http
            .post('/deleteScreenshot', {

                elementId: elementId

            })
            .success(function (data, status, headers, config) {

                angular.element('.alert-success').show();

            })
            .error(function (data, status, headers, config) {

                angular.element('.alert-danger').show();
            });
    }
	
	
    $scope.paramsEmpty = function(){
	
		if($scope.dataTransfer.data.length == 0){ 
			return false;
		}
		else{
			if( $scope.dataTransfer.data[1].parameters.length == 0 && $scope.sofa.length == 0){

				return true;
			}
		}
    }

    $scope.autoEmpty = function(){
	
		if($scope.dataTransfer.data.length == 0){ 
			return false;
		}
		else{
			if( $scope.dataTransfer.data[1].automation.length == 0 && $scope.automationObject.length == 0){

				return true;
			}
		}
    }
});