
import mongoose from 'mongoose'

const mpschema = new mongoose.Schema({
    name:{type:String, required:false, trim:true},
    id:{type:String, required:false, trim:true},
    title:{type:String, required:false, trim:true},
    age:{type:String, required:false, trim:true},
    gender:{type:String, required:false, trim:true},
    religion:{type:String, required:false, trim:true},
    caste:{type:String, required:false, trim:true},
    subcaste:{type:String, required:false, trim:true},
    contact:{type:String, required:false, trim:true},
    emailID:{type:String, required:false, trim:true},
    fbID:{type:String, required:false, trim:true},
    tweet:{type:String, required:false, trim:true},
    Education:{type:String, required:false, trim:true},
    profession:{type:String, required:false, trim:true},
    address:{type:String, required:false, trim:true},
    active:{type:String, required:false, trim:true},
    parent:{type:String, required:false, trim:true},
    ZoneNo:{type:String, required:false, trim:true},
    Wards:{type:String, required:false, trim:true},
    NoBooths:{type:String, required:false, trim:true},
    created:{type:String, required:false, trim:true},
    createdBy:{type:String, required:false, trim:true},
    updated:{type:String, required:false, trim:true},
    updatedBy:{type:String, required:false, trim:true},
    verfication:{type:String, required:false, trim:true}

})

const MPModel = mongoose.model('MP_Data',mpschema);

export default MPModel