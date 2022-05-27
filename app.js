//creation des constantes
const formulaire = document.querySelector(".formulaire")
const btnAjouter = document.getElementById("add")
const inputNom = document.getElementById("input-nom")
const inputPrenom = document.getElementById("input-prenom")
const optionNiveau = document.getElementById("select-option")
const textareaDescription = document.getElementById("textarea-description")
const container = document.getElementById("contairer-id")
const btnSauvegarder = document.getElementById("btn-sauvegarder")
const SUPABASE_URL = 'https://bmpiqremuvqolvmpvpfz.supabase.co/rest/v1/apprenants'
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTA0MzE4OCwiZXhwIjoxOTU0NjE5MTg4fQ.fmJNY-6CG7UhTDb_ImLRI96RGSEc46oJ43bbYAjVOoE"
let i = 0
const idbtnmodifier = "btn-modifier" + i
const idbtnsupprimer = "btn-supprimer" + i


//creation de la carte
const ajouterApprenant = (apprenants)=>{
    container.insertAdjacentHTML(
        "beforebegin",
        ` 
        <div class="card mb-3 card" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start img" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${apprenants.prenom} ${apprenants.nom}</h5>
                    <p class="card-text">${apprenants.niveau}</p>
                    <p class="card-text">${apprenants.description}</p>
                </div>
            </div>
            <div class="col-md-2 flex d-flex justify-content-between">
                <i class="bi bi-pencil btn" style="color: green;" id="${idbtnmodifier}" >Modifier</i>
                <i class="bi bi-x-lg btn" style="color: #ce0033;" >Supprimer</i>
            </div>
            </div>
      </div>
      `
    )
}

    //evenement du bouton ajouter apprennant
    btnAjouter.addEventListener('click', (e)=>{
    e.preventDefault();
    const apprenants = {
        nom: inputNom.value,
        prenom:inputPrenom.value,
        niveau:optionNiveau.value,
        description:textareaDescription.value
    }
    ajouterApprenant(apprenants)
    formulaire.reset()


    //evenemt du bouton sauvegarder dans la bdd
    btnSauvegarder.addEventListener('click', ()=>{
        
        fetch(SUPABASE_URL,{
            method:"POST",
            body: JSON.stringify(apprenants),
            headers:{
                "Content-Type":"application/json",
                apiKey: SUPABASE_KEY,
                Prefer: "return=representation",
            }
        })
    })

    //evenement du bouton modifier
    const boutonModifier = document.getElementById(idbtnmodifier);
    boutonModifier.addEventListener('click', (id)=>{
        console.log(idbtnmodifier);
        //fetch(SUPABASE_URL,{
           // method:"GET",
           // body: JSON.stringify(apprenants),
            //headers:{
                //"Content-Type":"application/json",
                //Authorization:`"Bearer" ${SUPABASE_KEY}`,
                //apiKey: SUPABASE_KEY,
                //Prefer: "return=representation",
           // }
        //})
    
        //fetch(SUPABASE_UR + id=eq.{apprenants.id},{
       // method:"PATCH",
       // body: JSON.stringify(apprenants),
        //headers:{
          // " Content-Type" : "application/json",
          // Authorization:`"Bearer" ${SUPABASE_KEY}`,
          // apiKey : SUPABASE_KEY,
        //  // Prefer: "return=representation",
       // }
        //})
    })
})


