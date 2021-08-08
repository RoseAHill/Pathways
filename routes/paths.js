import { Router } from 'express'
import * as pathCtrl from '../controllers/paths.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// Public Routes

router.get("/", pathCtrl.index)
router.get("/:id", pathCtrl.show)

// Protected Routers

router.use(decodeUserFromToken)

router.post('/', checkAuth, pathCtrl.create)
router.post('/:pathId/skills', checkAuth, pathCtrl.addSkill)


export {
  router
}