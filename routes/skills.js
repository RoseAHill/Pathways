import { Router } from 'express'
import * as skillCtrl from '../controllers/skills.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// Public Routes

router.get('/:id', skillCtrl.show)

// Protected Routers

router.use(decodeUserFromToken)

router.post('/:skillId/milestones', checkAuth, skillCtrl.addMilestone)


export {
  router
}