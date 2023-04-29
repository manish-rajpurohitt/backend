const Product = require('../models/Product');



exports.getAllProducts = async (req, res, next) => {

    try{
        
        let products = await Product.find();
        res.status(201).json({
            success: true,
            data: products
        });
    }
    catch(e){
        next(e)
    }
}