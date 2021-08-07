import { Milestone } from '../models/milestone.js'

const updateCommentLink = async (req, res) => {
    try {
        const milestone = await Milestone.findById(req.params.milestoneId)
        const index = milestone.comments.findIndex((comment) => 
            comment._id.equals(req.params.commentId)
        )
        milestone.comments[index].refLink = req.body.refLink

        await milestone.save()

        return res.status(200).json(milestone)
    } catch (error) {
        res.json(error)
    }
}

const deleteComment = async (req, res) => {
    try {
        const milestone = await Milestone.findById(req.params.milestoneId)
        const index = milestone.comments.findIndex((comment) => 
            comment._id.equals(req.params.commentId)
        )
        const removedComment = milestone.comments.splice(index, 1)
        await milestone.save()
        return res.status(200).json(removedComment)
    } catch (error) {
        res.json(error)
    }
}

const createComment = async (req, res) => {
    try {
        const milestone = await Milestone.findById(req.params.milestoneId)
        milestone.comments.push(req.body)
        await milestone.save()
        const newComment = milestone.comments[milestone.comments.length - 1]
        return res.status(201).json(newComment)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export {
    createComment,
    deleteComment,
    updateCommentLink
}