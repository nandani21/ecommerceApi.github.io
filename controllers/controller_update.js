const Product=require('../models/productSchema');


module.exports.update = async function(req,res){
    if(!mongoose.isValidObjectId(req.params.id)){
        res.status(400).send('Invalid Product Id')
    }
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        quantity: req.body.quantity
      },
      { new: true}  
    )

    if(!product)
    return res.status(500).send('The Product cannot be updated')

    res.send(product);
};