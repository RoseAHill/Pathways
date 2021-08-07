import { Skill } from "../models/skill.js"
import { Milestone } from "../models/milestone.js"

const addMilestone = async (req, res) => {
  try {
    if(!Skill.exists({ _id: req.params.skillId })) {
      return res.status(500).json({ err: `No such skill exists with the id of ${req.params.skillId}` })
    }
    req.body.parentSkill = req.params.skillId
    const milestone = await new Milestone(req.body)
    await milestone.save()
    await Skill.updateOne(
      { _id: req.params.skillId },
      { $push: { milestones: milestone } }
    )
    return res.status(201).json(milestone)
  } catch (error) {
    return res.status(500).json({ err: error.message })
  }
}

const show = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id)
      .populate('milestones')
      .populate('milestones.comments')
    return res.status(200).json(skill)
  } catch (error) {
    return res.status(500).send(error.message, 'Could not locate skill')
  }
}

export {
  show,
  addMilestone
}