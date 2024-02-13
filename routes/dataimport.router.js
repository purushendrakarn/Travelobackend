const express = require('express');
const Hotel = require("../model/hotel.model");
const hotels = require("../data//hotels");

const router = express.Router();
router.route("/")
.post(async(req,res) => {
    try{
        await Hotel.deleteMany();
        const hotelsInDB =  await Hotel.insertMany(hotels.data);
        // console.log(hotels.data)
        res.json(hotelsInDB)
    }
 catch(err){
    res.json({ message : "could not add data to database"})
    console.log(err);
 }

})
module.exports = router;