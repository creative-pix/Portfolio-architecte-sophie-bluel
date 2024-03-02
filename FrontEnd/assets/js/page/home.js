// Variables
const gallery = document.querySelector("div")

// Récupération dynamique des travaux depuis le back-end
export async function getWorks() {
    const reponse = await fetch("http://localhost:5678/api/works/")
    const reponsejson = await reponse.json()
    return reponsejson
}
//-----------------------------------------------------------------------//

// Fonction affichage des works dans le dom
export async function displayWorks() {

    const arrayWorks = await getWorks()
    console.log(gallery)

// Creation des balises pour chaques travaux
    arrayWorks.forEach((work) => {

        const figure = document.createElement("figure")
        const img = document.createElement("img")
        const figcaption = document.createElement("figcaption")

        gallery.appendChild(figure)
        figure.appendChild(img)
        figure.appendChild(figcaption)
        
        img.src = work.imageUrl
        figcaption.textContent = work.title
    })    
}