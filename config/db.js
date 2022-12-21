const mongoose = require("mongoose");

const connectDb = async ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log("Mongodb connected");
}

module.exports = connectDb;