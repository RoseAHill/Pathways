import { User } from '../models/user.js'
import jwt from 'jsonwebtoken'

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

function signup(req, res) {
  const user = new User(req.body)
  user.save()
  .then(user =>{
    console.log(user)
    const token = createJWT(user)
    res.status(200).json({ token })
  })
  .catch(err => {
    res.status(400).send({ err: err.errmsg })
  })
}


function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}