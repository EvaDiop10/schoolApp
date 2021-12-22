// recuperation du formulaire
var myform = document.getElementsByClassName('formulaire')
// recuperation des info du formulair
var inputNom = document.getElementsByClassName('name')
var inputPrenom = document.getElementsByClassName('prenom')
var inputBio = document.getElementsByClassName('bio')
var option = document.getElementsByClassName('')
var niveau = option.value
// recuperation du bouton ajouter
var boutonAjouter = document.getElementsByClassName('btnAdd')



// tableau d'objet
var liste_apprenant =[
    {
        nom:"Eva",
        prenom: "diop",
        niveau: "debutant",
        bio: "je suis entrains dessayer un truc",
        photo: 'header.JPG'
    },
    {
        nom:"zalle",
        prenom: "talla",
        niveau: "debutant",
        bio: " A peur de manger son made",
        photo:'header.JPG'
    }
]
function creerProfil (){

}
// verification des données
boutonAjouter.addEventListener('click', ()=> {
    if (inputNom ){
        alert('Veuillez renseigner les champs!')
    }
}) 