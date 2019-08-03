var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();
var Items = require('../models/Items');
var Commons = require('../models/commons.js')

router.get('/leftPanelData', function(req, res, next) {

    var location = req.query.location;
    var data = Items.getLeftSidepanelData(location, function(err, data) {
        res.send(data);
        res.end();
    });
});

router.get('/rightPanelData', function(req, res, next) {

    var location = req.query.location;

    var data = Items.getRightSidepanelData(location, function(err, data) {
        res.send(data);
        res.end();
    });
});

router.post('/addNewElement', function(req, res, next) {

    var itemName = req.body.itemName;
    var itemType = req.body.itemType;
    var itemClass = req.body.itemClass;
    var itemParentId = req.body.itemParentId;

    var data = Items.addNewElement(itemName, itemType, itemClass, itemParentId, function(err, data) {
        //  res.send(data);
        res.end();
    });
});

router.get('/getTreeChildElements', function(req, res, next) {

    var location = req.query.location;
    var selectedFolder = req.query.selectedFolder;

    var data = Items.getTreeChildElements(location, selectedFolder, function(err, data) {
        res.send(data);
        res.end();
    });
});

router.get('/getSelectedElementData', function(req, res, next) {

    var location = req.query.location;
    var id = req.query.id;

    var data = Items.getSelectedElementData(location, id, function(err, data) {
        res.send(data);
        res.end();
    });
});

router.post('/editElementName', function(req, res, next) {

    var location = req.body.location;
    var elementId = req.body.elementId;
    var elementNewName = req.body.elementNewName;

    var data = Items.updateElementName(location, elementId, elementNewName, function(err, data) {
        // res.send(data);
        res.end();
    });
});

router.post('/removeSelectedElement', function(req, res, next) {

    var location = req.body.location;
    var elementId = req.body.elementId;

    var data = Items.removeSelectedElement(location, elementId, function(err, data) {
        //  res.send(data);
        res.end();
    });
});

router.get('/getRightTreeChildElements', function(req, res, next) {

    var location = req.query.location;
    var selectedFolder = req.query.selectedFolder;

    var data = Items.getRightTreeChildElements(location, selectedFolder, function(err, data) {
        res.send(data);
        res.end();
    });

});

module.exports = router;