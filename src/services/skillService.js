import * as tokenService from './tokenService'
const BASE_URL = "/api/skills/"

export const getSkillById = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`, { mode: 'cors'})
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const handleCreateMilestone = async (milestone, id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}/milestones` , {
      method: "POST",
      headers: { 
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      },
      body: JSON.stringify(milestone)
      }, { mode: 'cors' })
      const data = await res.json()
      return data
  } catch (error) {
    throw error
  }
}