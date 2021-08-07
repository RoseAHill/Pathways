import mongoose from "mongoose"
const Schema = mongoose.Schema

export {
Path
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
   description: String,
   completedUsers: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true}],
}, { 
    timestamps: true

})

const skillSchema = new Schema({
title: {
    type: String,
    required: true,
},
completedUsers: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true}],
milestones: [milestoneSchema],
}, {
    timestamps: true


})

const pathSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    skills: [skillSchema],
    author:  {type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true},
    comments: [commentSchema],
    completedUsers: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true}],
}, {
    timestamps: true

})

const Path = mongoose.model("Path", pathSchema)