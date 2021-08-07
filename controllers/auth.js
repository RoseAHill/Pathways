import { User } from '../models/user.js'
import jwt from 'jsonwebtoken'
import { Profile } from "../models/profile"

export {
  signup,
  login,
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(401).json({ err: 'bad credentials'})
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user)
        res.json({ token })
      } else {
        return res.status(401).json({ err: 'bad credentials'})
      }
    })
  } catch(err) {
    return res.status(400).json(err)
  }
}

// function signup(req, res) {
//   const user = new User(req.body)
//   user.save()
//   .then(user =>{
//     console.log(user)
//     const token = createJWT(user)
//     res.status(200).json({ token })
//   })
//   .catch(err => {
//     res.status(400).send({ err: err.errmsg })
//   })
// }


async function signup (req, res) {
  // extract relevant properties out of req.body object
  const userData = {
      email: req.body.email,
      password: req.body.password
  }

  const profileData = {
      displayName: req.body.displayName,
      avatar: req.body.avatar
  }
  
  try {
      //create the User & Profile
      const user = new User(userData)
      const profile = new Profile(profileData) //make sure you import

      //save the models
      await user.save()
      await profile.save()

      //finish auth process
      const token = createJWT(user)
      res.json({ token })
  } catch (error) {
      res.status(400).send({ error })
  }
}


function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}