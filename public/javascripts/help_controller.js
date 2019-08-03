angular.module('automation').controller('helpController', function ($scope, $http, shared) {

    $scope.showContent = function(){
		
		angular.element('h4').on('click',function(){
			
			angular.element('h4').removeClass('selected');
			$(this).addClass('selected');
			content = $(this).parent('div').attr('class');
			angular.element('article > div').hide();
			angular.element('article >.'+ content).show();
			
		});
	}
	$scope.scrollToSubContent = function(){
		//scroll to see subcontent
	}
	
    $scope.sizeHeight = function(){

       $('aside').height($(window).height()-$('nav').height()-$('footer').height());
	   $('article').height($(window).height()-$('nav').height()-$('footer').height());
	   $('article').width($(window).width()-$('aside').width()-$('aside').width()/10);		
    }
	
	$scope.sizeHeight();
	$scope.showContent();
	
})
