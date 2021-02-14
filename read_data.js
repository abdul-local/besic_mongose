const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
const SchemaModel=mongoose.Schema({
    name:String,
    rating:String,
    review:String
});

const Fruit=mongoose.model("Fruit",SchemaModel);

Fruit.find(function (error,fruits) {
    if(error){
        console.log(error);
    }else {
        mongoose.connection.close();
        // console.log(fruits);
        fruits.map(item=>{
            console.log(item.name);
        })
    }

    
})