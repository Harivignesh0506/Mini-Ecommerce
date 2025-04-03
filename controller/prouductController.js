const productModel = require('../modles/productModel'); // Fixed typo in 'models'
const mongoose = require("mongoose");

// Get all products - /api/v1/product
exports.getProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
    
        res.json({
            success: true,
            message: "Get products working!!",
            data: products
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Error fetching products",
            error: error.message
        });
    }
};

// Get single product - /api/v1/singleproduct/:id
exports.getSingleProducts = async (req, res) => {
    try {
        const id = req.params.id;

        // Validate if ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid product ID"
            });
        }

        const product = await productModel.findById(id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.json({
            success: true,
            data: product
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error fetching products", // Made consistent
            error: err.message
        });
    }
};
