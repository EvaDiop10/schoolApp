import { applyRouting } from "./routing.js";


const SUPABASE_URL = 'https://uapervjhiibhkhzcpbfq.supabase.co/rest/v1/Apprenant?'
const SUPABASE_KEY =
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDI3NDAwMywiZXhwIjoxOTU1ODUwMDAzfQ.ifXAy-0sSyQq91FOkkHOv9ruD1NZ8p_mUZWxVXB7NkQ"
const allItems =[
    {
        "nom": "",
        "prenom": "",
        "bio": "",
        "niveau": "",
        "photo": null
    }
]
const ajouterApp = (item) =>{ 
    // on selectionne le containeur 
    const  container = document.querySelector("ul")
    // on ajoute le html
    container.insertAdjacentHTML(
    "beforeend",
    `
            <div class="card mb-3 shadow " style="max-width: 540px;" >
                <div class="row g-0 ">
                    <div class="col-md-4 p-4">
                        <img src="img/header.JPG" class="img-fluid " alt="...">
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title">${item.nom} ${item.prenom}</h5>
                            <p class="card-text">${item.bio}</p>
                            <p class="fw-bold float-end">${item.niveau}</p>
                        </div>
                        </div>  
                        <div class="col-md-2">
                            <i class="bi bi-pencil btn" style="color: green;"></i>
                            <i class="bi bi-x-lg btn" style="color: #ce0033;"></i>
                        </div>
                    </div>
                </div>
            </div>
        
    `)
    // localStorage.setItem(key, value);
}


// On souhaite réagir à chaque fois que le formulaire est soumis
document.querySelector('.formulaire').addEventListener("submit",(event)=>{
    // On souhaite aussi empêcher le rechargement de la page
    event.preventDefault()
    // On récupère les inputs
    console.log('avant iput recup');
    const inputNom = document.getElementById('nom').value
    const inputPrenom = document.getElementById('prenom').value
    const select = document.getElementById('selected').selectedOptions[0].value
    const bio = document.getElementById('biographie').value

 //   On créé un nouveau profil d'apprenant
    const item = {
        nom:inputNom,
        prenom: inputPrenom,
        niveau: select,
        bio: bio,
        // photo: avatar
    }

    fetch(SUPABASE_URL, {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_KEY,
            Prefer: "return=representation",
            },
        })
        .then((response) => response.json())
        .then((items) => {
            ajouterApp(items[0]);
        });
        
        window.addEventListener("DOMContentLoaded", (event) => {
            //RECUPERATION DES DONNEES VIA API
            fetch(SUPABASE_URL, {
            method: "GET",
            headers: {
                apikey: SUPABASE_KEY,
            },
            }).then((response) => response.json())
            .then((items) => {
                allItems.forEach((item) => {
                    ajouterApp(item)
                    
                })
            })
        })
    // On vide l'input et replace le curseur dedans
    document.querySelector(".formulaire").reset()

}) 

