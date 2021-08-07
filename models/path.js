import mongoose from "mongoose"
const Schema = mongoose.Schema

const skillSchema = new Schema({
  skillName: {
    type: String
  },
  milestones: {
    type: Schema.Types.ObjectId,
    ref: "Milestone"
  }
})

const pathSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  skills: {
    type: [skillSchema],
  }
}, {
  timestamps: true 
})

const Path = mongoose.model("Path", pathSchema)

export {
  Path
}