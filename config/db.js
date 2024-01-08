const mongoose = require('mongoose');

const connectDB = async (req,res)=>{
    try{
        // mongodb+srv://<username>:<password>@pavan.wefhnzm.mongodb.net/?retryWrites=true&w=majority
        await mongoose.connect("mongodb+srv://pavan:pavan@pavan.wefhnzm.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex : true,
            useFindAndModify:false
        });
        console.log('DB connected')
    }
    catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
