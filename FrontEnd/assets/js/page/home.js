//  Variables

const menu = document.querySelector('.menu')
const gallery = document.querySelector(".gallery")

//  Récupération dynamique des travaux depuis le back-end
export async function getWorks() {
    const reponse = await fetch("http://localhost:5678/api/works/")
    const reponsejson = await reponse.json()
    return reponsejson
}
//--------------------------------------------------------------------//

//  Affichage des travaux dans le dom
export async function displayWorks() {

    const arrayWorks = await getWorks()
    
//  Creation du tableaux des travaux dans les balises 
    arrayWorks.forEach((work) => {
        createWorks(work)
    })
}
    function createWorks(work) {    
        const figure = document.createElement("figure")
        const img = document.createElement("img")
        const figcaption = document.createElement("figcaption")

        gallery.appendChild(figure)
        figure.appendChild(img)
        figure.appendChild(figcaption)
        
        img.src = work.imageUrl
        figcaption.textContent = work.title
}    
//  -----------------------------------------------------------------//

//  Récupération des catégories
export async function getCategories() {

    const reponse = await fetch("http://localhost:5678/api/categories")
    const reponsejson = await reponse.json()
    return reponsejson
}
//  Affichage des catégories
export async function displayMenuButtons()  {

    const arrayCategories = await getCategories()

    arrayCategories.forEach((category) => { 
        const button = document.createElement("button")

        menu.appendChild(button)
        button.classList.add("btn")   // problème //
        button.textContent = category.name
        button.id = category.id
    })
}
//  --------------------------------------------------------------- //

//  Filtration de la galerie par son category id
export async function  filterGallery() {

    const allworks = await getWorks()
    const buttons = document.querySelectorAll(".menu button")

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {

//  Affectation de l'appel de l'évenement à l'Id du boutton   
        let BtnId = e.target.id   
        console.log(BtnId)

//  Efface la galerie et test
        gallery.innerHTML = ""
        if (BtnId == "0") {
            displayWorks()
        }
        else {

//  tri de la galerie avec la methode filter             
            const TriCategory = allworks.filter((work) => {
                return work.category.id == BtnId       
            })
//  Categories sans doublons            
            const set = new Set(TriCategory)
            TriCategory.forEach((set) => {
                createWorks(set)
            })
        }
        })    
    })
}
