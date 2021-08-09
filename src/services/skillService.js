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