import { Router } from "express"
import { decodeUserFromToken, checkAuth } from "../middleware/auth"
import * as pathCtrl from "../controllers/paths.js"

const router = Router()

// public routes




//protected routes




//paths
router.get("/", checkAuth, pathCtrl.create)



//comments

export {
    router
}