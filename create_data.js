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

// cara ngebuat data 

// const apple= new Fruit({
//     name:'abdul',
//     rating:"20 ribu",
//     review:"makannya enak"
// });

// apple.save(function(error){
//     if(error){
//         console.log(error)
//     }else{
//         console.log('save data succes');
//     }

// })

// create data banyak

const pisang= new Fruit({
    name:'pisang',
    rating:10,
    review:"manis dan enak"
});

const manggis= new Fruit({
    name:'manggis',
    rating:5,
    review:"manis"
});





const nanas= new Fruit({
    name:'nanas',
    rating:2,
    review:"asam"
});

Fruit.insertMany([pisang,manggis,nanas],(error)=>{
if (error){
    console.log(error);
}else {
    mongoose.connection.close();
    console.log('berhasil save data');
}
})