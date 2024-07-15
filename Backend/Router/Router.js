const express = require('express');
const Router = express.Router();
const healthPackageController = require('../Controllers/ProductController');
const TestController = require('../Controllers/SingleController')

// Define routes
Router.post('/createpackage', healthPackageController.createHealthPackage);
Router.get('/labtest', healthPackageController.getAllHealthPackages);
Router.get('/labtest/:srno',TestController.getTestPackageById);
Router.put('/:id', healthPackageController.updateHealthPackage);
Router.delete('/:id', healthPackageController.deleteHealthPackage);

module.exports = Router;
