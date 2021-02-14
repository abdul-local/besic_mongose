const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
const FruiteSchema=mongoose.Schema({
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

const Fruit=mongoose.model("Fruit",FruiteSchema);
const PeopleSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'nama harus diisi']
    },
    age:{
        type:Number,
        
    },
    favoritefruit:FruiteSchema
});
const People=mongoose.model("People",PeopleSchema);

const Duku= new Fruit({
    name:'duku',
    rating:8,
    review:"kecut-kecut gitu rasanya"
});

Duku.save(function(error){
    if(error){
        console.log(error)
    }else{
        console.log('save data duku succes');
    }

})

const createpeople= new People({
    name:'abdul',
    age:22,
    favoritefruit:Duku
    
});
createpeople.save(function(error){
    if(error){
        console.log(error)
    }else{
        console.log('save data relationship data duku berhasil');
    }

})

