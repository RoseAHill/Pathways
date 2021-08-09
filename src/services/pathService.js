const BASE_URL = "/api/paths/"

export const getAllPaths = async () => {
  try {
    const res = await fetch(`${BASE_URL}`, { mode: "cors" })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const getPathById = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`, { mode: 'cors'})
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}