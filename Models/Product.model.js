const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  image: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  }
})

const Product = mongoose.model('product', ProductSchema)
module.exports = Product
