

const SUPABASE_URL = 'https://uapervjhiibhkhzcpbfq.supabase.co/rest/v1/Apprenant?'
const SUPABASE_KEY =
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDI3NDAwMywiZXhwIjoxOTU1ODUwMDAzfQ.ifXAy-0sSyQq91FOkkHOv9ruD1NZ8p_mUZWxVXB7NkQ"
const Apprenant_items =[
    // {
    //     nom:"Eva",
    //     prenom: "diop",
    //     niveau: "debutant",
    //     bio: "je suis entrains dessayer un truc",
    //     photo: 'header.JPG'
    // },
    // {
    //     nom:"zalle",
    //     prenom: "talla",
    //     niveau: "debutant",
    //     bio: " A peur de manger son made",
    //     photo:'header.JPG'
    // }
]
const ajouterApp = (item) =>{ 
    const URL_PATCH = `https://uapervjhiibhkhzcpbfq.supabase.co/rest/v1/Apprenant?id=eq.${item.id}`
    const idboutonModifier = "btn_modifier-"+item.id

    // on selectionne le containeur 
    const  container = document.querySelector("ul")
    // on ajoute le html
    container.insertAdjacentHTML(
    "beforeend",
    `
            <div class="card mb-3 shadow " style="max-width: 540px;" id=${idcardBody}>
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
                            <i class="bi bi-pencil btn" style="color: green;"  ></i>
                            <i class="bi bi-x-lg btn" style="color: #ce0033;" id=${idboutonmodifier}></i>
                        </div>
                    </div>
                </div>
            </div>
        
    `)
// recuperation du bouton modifier
const btnModifier = document.getElementById(idboutonModifier)

// ecouter le bouton modifier
btnModifier.addEventListener('click',()=>{
    btnModifier.style.visibility = 'hidden'
    document.querySelector('.formulaire')
    
})
    // modification dans supabase
    fetch(URL_PATCH, {
        method: "PATCH",
        headers: {
        apikey: API_KEY,
        "Content-Type": "application/json",
        Authorization:`"Bearer" ${API_KEY}`,
        Prefer: "return=representation" 
        },
        body: JSON.stringify({btnModifier:true}),
        })  
}

// On souhaite réagir à chaque fois que le formulaire est soumis
document.querySelector('.btnAdd').addEventListener("submit",(event)=>{
//     // On souhaite aussi empêcher le rechargement de la page
    event.preventDefault()
    const inputNom = document.getElementById('nom').value
    const inputPrenom = document.getElementById('prenom').value
    const select = document.getElementById('selected').selectedOptions[0].value
    const bio = document.getElementById('biographie').value
    const item = {
        nom:inputNom,
        prenom: inputPrenom,
        niveau: select,
        bio: bio,
        bouton_modifier : false
        }
        ajouterApp(item)
    const sauvegarderbtn = document.getElementById('sauvegarder')
    sauvegarderbtn.addEventListener('click',() =>{

    fetch(SUPABASE_URL, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_KEY,
        // Prefer: "return=representation",
        },
    })
    // .then((response) => response.json())
    // .then((items) => {
    //     ajouterApp(items[0]);
    // }); 

    })
    
// Lorsque les éléments du DOM sont tous connus
document.addEventListener("DOMContentLoaded", () => {
    // Appel HTTP vers Supabase
    // On vide l'input et replace le curseur dedans
    document.querySelector(".formulaire").reset()
})

// recuperation du btnliste des apprenants
// const btnListApp = document.getElementsById("listeApp");
// alert("btnListApp")


//     // On récupère les inputs
//     console.log('avant iput recup');
//     const inputNom = document.getElementById('nom').value
//     const inputPrenom = document.getElementById('prenom').value
//     const select = document.getElementById('selected').selectedOptions[0].value
//     const bio = document.getElementById('biographie').value

//  //   On créé un nouveau profil d'apprenant
//     const item = {
//         nom:inputNom,
//         prenom: inputPrenom,
//         niveau: select,
//         bio: bio
//     }

//     fetch(SUPABASE_URL, {
//             method: "POST",
//             body: JSON.stringify(item),
//             headers: {
//                 "Content-Type": "application/json",
//                 apiKey: SUPABASE_KEY,
//             Prefer: "return=representation",
//             },
//         })
//         .then((response) => response.json())
//         .then((items) => {
//             ajouterApp(items[0]);
//         });
        
//         window.addEventListener("DOMContentLoaded", (event) => {
//             //RECUPERATION DES DONNEES VIA API
//             fetch(SUPABASE_URL, {
//             method: "GET",
//             headers: {
//                 apikey: SUPABASE_KEY,
//             },
//             }).then((response) => response.json())
//             .then((items) => {
//                 allItems.forEach((item) => {
//                     ajouterApp(item)
                    
//                 })
//             })
//         })
//     // On vide l'input et replace le curseur dedans
//     document.querySelector(".formulaire").reset()

}) 