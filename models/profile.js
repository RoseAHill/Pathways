import mongoose from "mongoose"
const Schema = mongoose.Schema


export {
    Profile,
}

const profileSchema = new Schema({
    displayName: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    joinedPaths: [{type: mongoose.Schema.Types.ObjectId, ref: "Path", required: true}],
    completedPaths: [{type: mongoose.Schema.Types.ObjectId, ref: "Path", required: true}],
}, {
    timestamps: true
   
})

const Profile = mongoose.model("Profile", profileSchema)