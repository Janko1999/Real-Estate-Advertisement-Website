import mongoose from 'mongoose';

const Schema= mongoose.Schema;

let Microlocation= new Schema({
    name:{
        type:String
    }

});


export default mongoose.model('Microlocation', Microlocation, 'microlocations');