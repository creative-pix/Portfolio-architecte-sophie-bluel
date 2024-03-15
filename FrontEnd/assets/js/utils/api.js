export const API_URL = "http://localhost:5678/api"

export async function getData(endpoint) {
    const reponse = await fetch(API_URL + "/" + endpoint)
    return await reponse.json()
}