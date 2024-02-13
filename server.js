const express = require('express')
const mongoose = require('mongoose');


const app = express();

const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");
const hotelRouter = require("./routes/hotel.router");
const categoryRouter =require("./routes/category.router")
const singlehotelrouter = require("./routes/singlehotel.router");
const authRouter = require("./routes/auth.router");
const wishlistRouter = require("./routes/wishlist.router")

const connectDB = require("./config/dbconfig");

app.use(express.json());
connectDB();

app.use("/api/hoteldata",hotelDataAddedToDBRouter);
app.use("/api/hotels" , hotelRouter);
app.use("/api/categorydata", categoryDataAddedToDBRouter);
app.use("/api/category",categoryRouter)
app.use("/api/hotels",singlehotelrouter )
app.use("/api/auth",authRouter)
app.use("/api/wishlist", wishlistRouter)
  

const PORT = 3500;
            
app.get("/", (req,res) => {
res.send("Hello mohan")
})

mongoose.connection.once("connected" , () => {
    console.log("connected to DB");
    app.listen(process.env.PORT || PORT, () => {
        console.log("server is up and running")
    })

})
