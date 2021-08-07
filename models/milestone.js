import mongoose from "mongoose"
const Schema = mongoose.Schema

export {
Milestone
}

const commentSchema = new Schema({
content: {
    type: String,
    requred: true
},
author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true},
}, 
{
    timestamps: true

})

const milestoneSchema = new Schema({
    title:{
        type: String,
        required: true
    },
   description:{
       type: String,
       required: true,
   },
   learned: {
       type: Boolean,
       default: false
   },
   added_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
   comments: [commentSchema]
}, { 
    timestamps: true

})

const Milestone = mongoose.model("Milestone", milestoneSchema)
