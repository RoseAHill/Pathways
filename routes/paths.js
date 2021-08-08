import { Router } from 'express'
import * as pathCtrl from '../controllers/paths.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// Public Routes

router.get("/", pathCtrl.index)
router.get("/:id", pathCtrl.show)

// Protected Routers

router.use(decodeUserFromToken)

router.post('/', pathCtrl.create)
router.post('/:pathId/skills', pathCtrl.addSkill)


export {
  router
}