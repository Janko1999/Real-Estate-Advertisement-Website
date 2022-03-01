import mongoose from 'mongoose';

const Schema= mongoose.Schema;

let Street= new Schema({
    name:{
        type:String
    }

});


export default mongoose.model('Street', Street, 'streets');