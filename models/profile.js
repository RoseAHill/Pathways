import mongoose from "mongoose"
const Schema = mongoose.Schema

const profileSchema = new Schema({
    displayName: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    
}, {
    timestamps: true
    
})

const Profile = mongoose.model("Profile", profileSchema)

export {
    Profile,
}