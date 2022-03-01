
import mongoose from 'mongoose';

const Schema= mongoose.Schema;

let User= new Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    },
    city:{
        type:String
    },
    birthday:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    email:{
        type:String
    },
    agency:{
        type:String
    },
    licenseNumber:{
        type:String
    },
   
    status:{
        type:String
    },
    typeString:{
        type:String
    },
    imageData:{
        type:String
    },
    time:{
        type:String
    },
    favCount:{
        type:Number
    }

});


export default mongoose.model('User', User, 'users');