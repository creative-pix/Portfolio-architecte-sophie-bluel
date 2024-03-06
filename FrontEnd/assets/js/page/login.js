export async function getUsers() {

    const reponse = await fetch("http://localhost:5678/api/users/login/")
    const reponsejson = await reponse.json()
    return reponsejson
}