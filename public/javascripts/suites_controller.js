/**
 * Created with JetBrains RubyMine.
 * User: ezequiel
 * Date: 12/7/14
 * Time: 9:39 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('automation').controller('SuiteSet', function ($scope, $http, shared) {

    //GET SELECTED ELEMENT DATA
    $scope.dataTransfer = shared.actionPanel;

    //SHOW ACTION PANEL WHEN SELECTING OBJECT, NOT FOLDER
    $scope.isSelected = shared.selectedType;

    //DETAILS CHANGE
    $scope.details='';
    $scope.detailsChange = function(){

         angular.element('.save').show();

    }

    //SAVE DROPPED TESTS
    $scope.saveSuiteDetails = function(){

        var elementId = shared.selectedId();
        var details = $scope.details

        $http
            .post('/saveSuiteDetails', {

                elementId: elementId,
                details:details

            })
            .success(function (data, status, headers, config) {

                angular.element('.alert-success').show();

            })
            .error(function (data, status, headers, config) {

                angular.element('.alert-danger').show();
            });
    }

    //SAVE DROPPED TESTS
    $scope.saveSuiteTests = function(){

        var elementId = shared.selectedId();
        var tests =[];

        angular.element('.multipleDrop .new').each(function(){

            var id = $(this).attr('id');

            tests.push({testId: id });
        })

        $http
            .post('/saveSuiteTests', {

                elementId: elementId,
                tests:tests

            })
            .success(function (data, status, headers, config) {

                angular.element('.alert-success').show();
				shared.getActionPanelData();
            })
            .error(function (data, status, headers, config) {

                angular.element('.alert-danger').show();
            });
    }

    //REMOVE DROPED TESTS
    $scope.removeSuiteTests = function($event){

        var elementId = shared.selectedId();
        var testId = angular.element($event.target).parents('div').attr('id');


        $http
            .post('/removeSuiteTests', {

                elementId: elementId,
                tests:testId

            })
            .success(function (data, status, headers, config) {

                angular.element('#'+testId).remove();
                angular.element('.alert-success').show();

            })
            .error(function (data, status, headers, config) {

                angular.element('.alert-danger').show();
            });

    }

    //REMOVE RECENTLY DROPPED TEST
    $scope.removeNewTests = function($event){

        angular.element($event.target).parent('div').remove();
    }


    //RUN SELECTED SUITE
    $scope.runSuite = function($event){

        var elementId = shared.selectedId();

        $http
            .post('/runTest', {

                elementId: elementId,
                location: shared.url

            })
            .success(function (data, status, headers, config) {

                alert('ok Suite is Running');

            })
            .error(function (data, status, headers, config) {

                angular.element('.alert-danger').show();
            });

    }

    $scope.suiteEmpty = function(){
		if($scope.dataTransfer.data.length == 0){ 
			return false;
		}
		else{
			if( $scope.dataTransfer.data[1].tests.length == 0){

				return true;
			}
		}	
    }
	
	//BUIT CHART HISTORY
	 $scope.getChartData = function(){

			var id = shared.selectedId();

			$http
				.get('/getSuiteChartData', {
					params: {
						id: id
					}
				})
				.success(function (data, status, headers, config) {
					
					var categories = [];
					var passed = [];
					var failed = [];
					
					$.each( data, function( index, element ) {
						
						categories.push(this.suite_execution_id);
						passed.push(this.passed);
						failed.push(this.failed);
	
					});
					
					buildChart(categories, passed, failed); 
					
				})
				.error(function (data, status, headers, config) {

					angular.element('.alert-danger').show();
				});
		}
		
	function buildChart(categories, passed, failed) {
	
		$('#container_c').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Suite History'
			},
			subtitle: {
				text: 'Test Results'
			},
			xAxis: {
				categories: categories,
				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Amount of Tests'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
					'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: [{
				name: 'passed',
				data: passed

			}, {
				name: 'failed',
				data: failed

			}]
		});
	}
	
})