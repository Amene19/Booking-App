import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required:true,
    },
    maxPeaple:{
        type: Number,
        required:true
    },
    
    desc:{
        type: String,
        required: true
    },
    roomNumber:{
        type: [{number:Number, unvailableDates:{type:[Date]}}],
    }
},{timestamps:true});

export default mongoose.model("Room", RoomSchema);