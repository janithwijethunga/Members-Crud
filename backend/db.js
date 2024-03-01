const mongoose=require("mongoose");

var mongoURL=`mongodb+srv://it22305978:200025901044@memcrud.tmo79pz.mongodb.net/`;

mongoose.connect(mongoURL,{useUnifiedTopology : true,useNewUrlParser:true});

var connection = mongoose.connection;

connection.on('error',()=>{
    console.log('Mongo DB connection failed')
})

connection.on('connected',()=>{
    console.log('Mongo DB connection successful')
})

module.exports=mongoose;
