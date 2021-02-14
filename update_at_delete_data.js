const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
const SchemaModel=mongoose.Schema({
    name:{
        type:String,
        required:[true,'nama harus diisi']
    },
    rating:{
        type:Number,
        max:10,
        min:1
    },
    review:String
});

const Fruit=mongoose.model("Fruit",SchemaModel);

// update data
// Fruit.updateOne({_id:'6025cfcd958c2f51c0cd658d'},{
//     name:'semangka'
// }, function (error) {
//     if (error){
//         console.log(error);
//     }
//     else {
//         console.log('berhasil update data dari semongko jadi semangka');
//     }
    
// })

// prose delete data


Fruit.deleteOne({_id:'6025cfcd958c2f51c0cd658d'}, function (error) {
    if (error){
        console.log(error);
    }
    else {
        console.log('berhasil delete data semangka');
    }
    
})

Fruit.find(function (error,fruits) {
    if (error){
        console.log(error)
    }else{
        fruits.map(item=>{
            mongoose.connection.close();
            console.log(item.name);
          
        })
    }
    
})