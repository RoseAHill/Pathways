import mongoose from "mongoose"
const Schema = mongoose.Schema

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
        required: true
    },
}, {
    timestamps: true
    
})

const milestoneSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    learned: {
        type: Boolean,
        default: false
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile'
    },
    comments: [commentSchema]
}, {
    timestamps: true
})

const Milestone = mongoose.model("Milestone", milestoneSchema)

export {
    Milestone
}