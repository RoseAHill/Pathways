import { Path } from "../models/path.js"


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
}