const Product=require('../models/productSchema');



//add products to the database

module.exports.add = async function(req,res){
    const product = new Product({
        name: req.body.name,
        quantity: req.body.quantity  
    })

    
    await product.save();

    if(!product)
    return res.status(500).send('The product cannot be created')

    res.send(product);
};

// for list products
module.exports.list = async function(req,res){
    const productList = await Product.find();

    if(!productList){
        res.status(500).json({success: false})
    }
    return res.send(productList);
};

