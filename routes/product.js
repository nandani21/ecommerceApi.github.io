const express=require('express');
const router=express.Router();
const Product = require('../controllers/controller_product');
const productDelete = require('../controllers/controller_delete');
const productUpdate = require('../controllers/controller_update');
const mongoose = require('mongoose');


//or the list
router.get('/', Product.list);

//for add products to the database
router.post('/',Product.add);

//for updating

router.put('/:id', productUpdate.update);

//for delete the product

router.delete('/:id', productDelete.delete);

module.exports=router;