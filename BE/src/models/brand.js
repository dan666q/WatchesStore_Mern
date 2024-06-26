const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
     brandName: String
},{ timestamps: true, });

const brands = mongoose.model("Brands", brandSchema);
module.exports = brands;