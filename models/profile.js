import mongoose from "mongoose"
const Schema = mongoose.Schema

const profileSchema = new Schema({
    displayName: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "https://i.imgur.com/jYrqtj2.jpeg"
    },
    userSkills: {
        type: Schema.Types.ObjectId,
        ref: "Skill"
    }
}, {
    timestamps: true
    
})

const Profile = mongoose.model("Profile", profileSchema)

export {
    Profile,
}