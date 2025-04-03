const express = require('express');
const { CreateOrder } = require('../controller/orderController');
const router=express.Router();



router.route('/order').post(CreateOrder);

module.exports =router;
 