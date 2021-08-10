import 'dotenv/config.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import cors from 'cors'

import { router as usersRouter } from './routes/users.js'
import { router as authRouter } from './routes/auth.js'
// milestone router
import {router as pathsRouter} from "./routes/paths.js"
import {router as skillsRouter} from "./routes/skills.js"
import {router as milestonesRouter} from "./routes/milestones.js"

import './config/database.js'

const app = express()

app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)),'build')))
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
// USE ROUTES ADDED
app.use("/api/paths", pathsRouter)
app.use("/api/skills", skillsRouter)
app.use("/api/milestones", milestonesRouter)


app.get("/*", function (req, res) {
	res.sendFile(
		path.join(path.dirname(fileURLToPath(import.meta.url)), "build", "index.html")
	)
})

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`)
})
