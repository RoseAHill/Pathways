import { User } from "../models/user"
import { Path } from "../models/path"
import { Profile } from "../models/profile"

const create = async (req, res) => {
    try {
        // // const path = await new Path(req.body)
        // // await path.save()
        // req.body.author = req.body.Profile
        // Path.create(req.body)


        
    } catch(error) {
        return res.status(500).json({ err: error.message})
    }

} 

export {
    create,
}