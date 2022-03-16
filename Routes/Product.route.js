const express = require('express')
const router = express.Router()

const ProductController = require('../Controllers/Product.controller')

// Get a list of all products
router.get('/', ProductController.getAllProducts)

//Create a new product
router.post('/', ProductController.createNewProduct)

//Get a single product
router.get('/:id', ProductController.findProductById)

//Update a product
router.patch('/:id', ProductController.updateAProduct)

//Delete a product
router.delete('/:id', ProductController.deleteAProduct)

module.exports = router
