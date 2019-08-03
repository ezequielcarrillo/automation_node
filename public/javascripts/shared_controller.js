/**
 * Created with JetBrains RubyMine.
 * User: ezequiel
 * Date: 12/11/14
 * Time: 8:19 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('automation').factory('shared', function($location, $http) {


    var getSelectedElementId = function() {
        return $('.selected').attr('id');
    }
    var getSelectedElementName = function() {

        return $('.selected > span').text();
    }
    var getSelectedElementType = function() {

        return $('.selected').prop('type');
    }
    var getSelectedElementParentId = function() {

        return $('.selected').parent('li').attr('id');
    }
    var getUrl = location.pathname;

    var isSelected = function() {

        return $('.selected').length;
    }

    var rightPanelSelected = function() {

        return $('.active_selected').attr('id');
    }

    var rightSelectedType = function() {

        return $('.active_selected').prop('type');
    }

    var panelData = [];
    var dataList = { list: '' };
    var empty = [];
    var row = [];
    var status = '';
    var rightData = { list: '' };
    var multidrop = [];
    var workflow = [];
    var dropworkflow = [];
    var actionPanel = { data: [] };
    var getActionPanelData = function() {

        var location = getUrl;
        var id = getSelectedElementId();

        $http
            .get('/getSelectedElementData', {
                params: {
                    location: location,
                    id: id

                }
            })
            .success(function(data, status, headers, config) {

                actionPanel.data = data;

                empty.length = 0;
                row.length = 0;
                status = data[0]['object_status'];
                multidrop.length = 0;
                workflow.length = 0;
                dropworkflow.length = 0;

            })
            .error(function(data, status, headers, config) {

                angular.element('.alert-danger').show();
            });


    }
    var rightPanelData = function() {

        var location = getUrl;

        $http
            .get('/rightPanelData', {
                params: {
                    location: location
                }
            })
            .success(function(data, status, headers, config) {

                rightData.list = data;
            })
            .error(function(data, status, headers, config) {

                angular.element('.alert-danger').show();
            });
    }

    var treePanelData = function() {

        $http
            .get('/leftPanelData', {
                params: {
                    location: getUrl,
                }
            })
            .success(function(data, status, headers, config) {

                dataList.list = data;

            })
            .error(function(data, status, headers, config) {

                angular.element('.alert-danger').show();
            });


    }
    var alerts = "'Oh snap! Change a few things up and try submitting again.'";

    return {

        selectedId: getSelectedElementId,
        selectedName: getSelectedElementName,
        selectedType: getSelectedElementType,
        parentId: getSelectedElementParentId,
        url: getUrl,
        isSelected: isSelected,
        rightPanelSelected: rightPanelSelected,
        rightSelectedType: rightSelectedType,
        treePanelData: treePanelData,
        data: dataList,
        panelData: panelData,
        alert: alerts,
        empty: empty,
        row: row,
        status: status,
        rightPanelData: rightPanelData,
        datas: rightData,
        multidrop: multidrop,
        dropworkflow: dropworkflow,
        workflow: workflow,
        getActionPanelData: getActionPanelData,
        actionPanel: actionPanel
    }

})