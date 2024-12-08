const express = require('express')
const Router = express.Router()
const RoutesControllers = require('../controllers/RouteControllers') 


// This is the Change

Router.route('/')
     .get(RoutesControllers.getAllDoc) 
     .post(RoutesControllers.CreateDoc) 
      

Router.route('/:id')
     .get(RoutesControllers.getDocbyId)
     .delete(RoutesControllers.DeleteDoc) 
     .patch(RoutesControllers.UpdateDoc) 


module.exports=Router