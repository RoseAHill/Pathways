import { Router } from 'express'
import * as pathCtrl from '../controllers/paths.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// Public Routes

router.get("/", pathCtrl.index)


export {
  router
}