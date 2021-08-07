import { Path } from "../models/path.js"


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
  create
}