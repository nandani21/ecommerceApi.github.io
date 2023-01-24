const Product=require('../models/productSchema');


module.exports.delete = async function(req,res){
    Product.findByIdAndRemove(req.params.id).then(product =>{
        if(product) {
            return res.status(200).json({success: true, message: 'The product is deleted'})
        } else {
            return res.status(404).json({success: false, message: 'The product cannot be deleted'})
        }
    }).catch(err=>{
        return res.status(500).json({success: false, error: err})
    })
};