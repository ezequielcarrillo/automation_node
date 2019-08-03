/**
 * Created with JetBrains RubyMine.
 * User: ezequiel
 * Date: 12/7/14
 * Time: 10:09 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('automation').controller('SidePanel', function ($scope, $http, shared) {


    //TOGGLE SIDE PANELS
    $scope.toggleSidePanels = function(event){

        $(event.target).prev('.sidePanel').toggle();

        $scope.calculateActionPanelWidth();  //CALCULATE ACTION PANEL WIDTH
    }

    //RESIZEPANEL

    $scope.resizePanel = function(){

        $( ".left_panel" ).resizable({
            minWidth: 200,
            maxWidth:500
        });
        $( ".left_panel" ).resizable({
            alsoResizeReverse: ".action_panel"
        });
        $( ".action_panel" ).resizable();
    }


    //SIDE PANEL WIDTH

    $scope.sizeHeight = function(){

        $('.sidePanel, .left_panel_bar, .right_panel_bar').height($('html').height()-$('nav').height());

    }

    //CALCULATE ACTION PANEL WIDTH
    $scope.calculateActionPanelWidth = function (){


        panels = [$('.left_panel'), $('.left_panel_bar'), $('.right_panel_bar'), $('.right_panel')]

        var space =[];
        $.each(panels,function(index,value){
            var visible = $(value).is(':visible');

            if (visible){
                space.push($(value).width());
            }
        });

        var total = 0;
        $.each(space,function() {

            total += parseInt(this, 10);
        });
            var actionPanelWith = parseInt($(document).width() -total -20);
            $('.action_panel').css('width',actionPanelWith);

     }

		//
		$scope.min = function(){
				$( ".action_panel" ).width( $( window ).width() - $('.left_panel').width() - $('.left_panel_bar').width() - $('.right_panel_bar').width() );
				
			$( window ).resize(function() {
				$( ".action_panel" ).width( $( window ).width() - $('.left_panel').width() - $('.left_panel_bar').width() - $('.right_panel_bar').width());
			});
			$( ".action_panel" ).css('min-width','900');			
		}

     $scope.h = function (){
         if (shared.url == '/Reports' ){
              angular.element('.sidePanel ,.left_panel_bar').css('display','none');
          }
        }
		 
	$scope.nn = function(){
		var win = $(window).height();
		var nav = $('nav').height();
		var footer = $('footer').height();
		$('.sidePanel, .left_panel_bar, .right_panel_bar, .ui-tabs-panel ').height(win-nav-footer);
	}
			 
    //BIND
    $scope.calculateActionPanelWidth();
    $scope.resizePanel();
    $scope.sizeHeight();
    $scope.h();
	$scope.nn();
	$scope.min();

})
