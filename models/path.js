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
  }]
}, {
  timestamps: true 
})

const Path = mongoose.model("Path", pathSchema)

export {
  Path
}