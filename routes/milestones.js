import { Router } from "express"
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js"
import * as milestoneCtrl from "../controllers/milestones.js"

const router = Router()

// public routes



//protected routes
router.use(decodeUserFromToken)

//comments
router.post('/:milestoneId/comments', checkAuth, milestoneCtrl.createComment)
router.delete('/:milestoneId/comments/:commentId', checkAuth, milestoneCtrl.deleteComment)
router.put('/:milestoneId/comments/:commentId', checkAuth, milestoneCtrl.updateCommentLink)

export {
    router
}