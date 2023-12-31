const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL);
        if(connection.STATES.connected){
            console.log("MongoDB Connected");
        }
        else{
            console.log("MongoDB Connection failed");
        }
    } catch(error){
        console.log(error.message)
    }
}

module.exports = {connectDB};