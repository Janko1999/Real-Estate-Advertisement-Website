import mongoose from 'mongoose';

const Schema= mongoose.Schema;

let City= new Schema({
    name:{
        type:String
    },
    states:{
        type:Array
    }

});


export default mongoose.model('City', City, 'cities');