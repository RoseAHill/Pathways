import { Path } from "../models/path.js"
import { Skill } from "../models/skill.js"

const addSkill = async (req, res) => {
  try {
    if(!Path.exists({ _id: req.params.pathId })) {
      return res.status(500).json({ err: `No such path exists with the id of ${req.params.pathId}` })
    }
    req.body.parentPath = req.params.pathId
    const skill = await new Skill(req.body)
    await skill.save()
    await Path.updateOne(
      { _id: req.params.pathId },
      { $push: { skills: skill } }
    )
    return res.status(201).json(skill)
  } catch (error) {
    return res.status(500).json({ err: error.message })
  }
}

const show = async (req, res) => {
  try {
    const path = await Path.findById(req.params.id)
      .populate('skills')
    return res.status(200).json(path)
  } catch (error) {
    return res.status(500).send(error.message, 'Could not locate path')
  }
}

const create = async (req, res) => {
  try {
    const path = await new Path(req.body)
    await path.save()
    return res.status(201).json(path)
  } catch (error) {
    return res.status(500).json({ err: error.message })
  }
}

const index = async (req, res) => {
  const limitNum = 5
  
  try {
    const paths = await Path.find({})
      .populate('skills')
      .limit(limitNum)
    return res.status(200).json(paths)
  } catch (error) {
    return res.status(500).send(error.message, 'Could not load paths')
  }
}


export {
  index,
  create,
  show,
  addSkill
}