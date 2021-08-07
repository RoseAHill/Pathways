import { Router } from "express"
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js"
// import * as milestoneCtrl from "../controllers/milestones.js"

const router = Router()

// public routes

router.get('/', )


//protected routes
router.use(decodeUserFromToken)




//milestones



//comments

export {
    router
}