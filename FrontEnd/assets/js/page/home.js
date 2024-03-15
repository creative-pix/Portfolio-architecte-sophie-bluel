import { API_URL } from "../utils/api.js"
import { getData } from "../utils/api.js"
import { getTemplate } from "../utils/template.js"

//  Variables

const menu = document.querySelector('.menu')
const gallery = document.querySelector(".gallery")

//  Affichage des travaux dans le dom
export async function displayWorks() {

    const arrayWorks = await getData("works")
    
//  Creation du tableaux des travaux avec un template 
    arrayWorks.forEach((work) => {
        createWorks(work)
    })
}
        function createWorks(work) {    

        const cards = getTemplate("mon-template", ".card")
        cards.querySelector("figcaption").textContent = work.title
        cards.querySelector("img").src = work.imageUrl
        gallery.appendChild(cards)
}    
//  -----------------------------------------------------------------//

//  Affichage des catégories
export async function displayMenuButtons()  {

    const arrayCategories = await getData("categories")
    const Allbutton = document.createElement("button")
    menu.appendChild(Allbutton)

    Allbutton.id = "0"
    Allbutton.textContent = "Tous"
    Allbutton.style.width = "100px"
    
    arrayCategories.forEach((category) => { 
        const button = document.createElement("button")
        menu.appendChild(button)
        
        button.textContent = category.name
        button.id = category.id
    })
    document.getElementById("1").style.width = "100px"
    document.getElementById("2").style.width = "140px"
}
//  --------------------------------------------------------------- //

//  Filtration de la galerie par son category id
export async function  filterGallery() {

    const allworks = await getData("works")
    const buttons = document.querySelectorAll(".menu button")

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {

//  Affectation de l'appel de l'évenement à l'Id du boutton
        let BtnId = e.target.id   
        console.log(BtnId)

//  Efface la galerie et fait le test
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
