import mongoose from "mongoose"
const Schema = mongoose.Schema

const skillSchema = new Schema({
  parentPath: {
    type: Schema.Types.ObjectId,
    ref: "Path",
    required: true,
  },
  skillName: {
    type: String,
    required: true
  },
  milestones: [{
    type: Schema.Types.ObjectId,
    ref: "Milestone"
  }]
}, {
  timestamps: true
})

const Skill = mongoose.model("Skill", skillSchema)

export {
  Skill
}