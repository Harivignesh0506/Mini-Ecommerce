const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,  // Changed to Number
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,  // Changed to Number
        default: 0
    },
    images: [String], // Simplified images array
    category: {
        type: String,
        required: true
    },
    seller: {
        type: String,
        required: true
    },
    stock: {
        type: Number,  // Changed to Number
        required: true
    },
    numOfReviews: {
        type: Number,  // Changed to Number
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Correct schema name here
const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
