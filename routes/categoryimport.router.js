const express = require('express');
const Category = require("../model/category.model");
const categories = require("../data/categories");

const router = express.Router();
router.route("/")
.post(async(req,res) => {
    try{
        await Category.deleteMany();
        const categoriesInDB =  await Category.insertMany(categories.data);
        // console.log(Category.data)
        res.json(categoriesInDB)
    }
 catch(err){
    res.json({ message : "could not add categories to database"})
    console.log(err);
 }

})
module.exports = router;