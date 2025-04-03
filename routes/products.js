const express = require('express');
const { getProducts, getSingleProducts } = require('../controller/prouductController');
const router = express.Router();

router.route('/products').get(getProducts);
router.route("/singleproduct/:id").get(getSingleProducts);


module.exports = router;