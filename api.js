var express = require('express');
var router = express.Router();

var Status = require('../model/models.js');

Status.methods(['get' , 'post', 'put' , 'delete']);
Status.register(router,'/models');

module.exports = router;