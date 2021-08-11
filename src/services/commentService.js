import * as tokenService from './tokenService'
const BASE_URL = '/api/milestones/'

export const createComment = async (milestoneId, comment) => {
    console.log(comment);
    try {
        const res = await fetch(`${BASE_URL}${milestoneId}/comments`, { //might need to fix this path
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
            body: JSON.stringify(comment)
        }, { mode: 'cors' })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export const deleteComment = async (milestoneId, commentId) => {
    try {
        const res = await fetch(`${BASE_URL}${milestoneId}/comments/${commentId}`, {
            method: "DELETE",
            headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
        }, { mode: 'cors' })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export const updateCommentLink = async (refLink, commentId, milestoneId) => {
    try {
        const res = await fetch(
            `${BASE_URL}${milestoneId}/comments/${commentId}`,
            {
                method: "PUT",
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + tokenService.getToken()
                },
                body: JSON.stringify(refLink)
            }, { mode: 'cors' }
        )
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }

}