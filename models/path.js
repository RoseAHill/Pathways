import mongoose from "mongoose"
const Schema = mongoose.Schema

const pathSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  skills: [{
    type: Schema.Types.ObjectId,
    ref: 'Skill'
  }],
  banner: {
    type: String,
    default: 'https://i.imgur.com/9Gw1rrX.jpg'
  },
  description: {
    type: String,
    default: 'Follow this path to learn'
  }
}, {
  timestamps: true 
})

const Path = mongoose.model("Path", pathSchema)

export {
  Path
}