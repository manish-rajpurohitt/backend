const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    brand_name: {
        type: String
    },
    category: {
        type: String
    },
    net_content: {
        type: String
    },
    measurement_unit_of_weight: {
        type: String
    },
    mrp: {
        type: String,
        required: true
    },
    gst: {
        type: String
    },
    cgst: {
        type: String
    },
    sgst: {
        type: String
    },
    igst: {
        type: String
    },
    productName: {
        type: String,
        required: true
    },
    shelf_life: {
        type: String
    },
    country_of_origin: {
        type: String
    },
    measurement_unit_of_weight: {
        type: String,
    },
    gtin: {
        type: String,
    },hsn: {
        type: String,
    },unit: {
        type: String,
    },license_number: {
        type: String,
    },modified_date: {
        type: String,
    },provider_url: {
        type: String,
    },thumbnail_url: {
        type: String,
    },
});

let Product = mongoose.model("products", ProductSchema);
module.exports = Product;