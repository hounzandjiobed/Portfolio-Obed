
const messageErreur = document.getElementById("message-erreur");

const resultatMessage = document.getElementById("resultat-message");

const soumettre = document.getElementById("formulaire-contact");



const liens = document.getElementById("liens");

const boutonMenu = document.getElementById("bouton-menu");



function validerNom(nom) {

   const nomValeur = nom.value.trim();

    if (nomValeur === "") {
       
        return "le champs nom est vide";
    
    } else if (/\d/.test(nomValeur)) {
        return "le nom ne doit pas contenir de chiffre";

        
    } else if (nomValeur.length <= 2) {
        return "le nom doit dépasser deux lettres";
    } else {
        return null;
    } 

}

function validerEmail(email) {

    const emailValeur = email.value.trim();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValeur === "") {
       
        return "le champs email est vide";

    } else if (!regex.test(emailValeur)) {

        return "Votre email est invalide";

    } else {
        return null;
    } 


}


function validerMessage(message) {

    const messageValeur = message.value.trim();
    
    if (messageValeur === "") {
       
        return "le champs message est vide";

    } else if (!isNaN(messageValeur)) {

        return "le message ne doit pas contenir uniquement de chiffre";
        
    } else if (messageValeur.length < 50) {

        return "le message doit contenir au moins 50 caractere";

    } else {
        return null;
    } 

}


if (soumettre) {

    const nom = document.getElementById("nom");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    
    soumettre.addEventListener("submit", (e) => {

    e.preventDefault();

    messageErreur.textContent = " ";
    resultatMessage.textContent = " ";

    const erreurNom = validerNom(nom);
    const erreurEmail = validerEmail(email);
    const erreurMessage = validerMessage(message);

    if (erreurNom || erreurEmail || erreurMessage) {

        const premierErreur = erreurNom || erreurEmail || erreurMessage;
        messageErreur.textContent = premierErreur;
        messageErreur.style.color = "red";

    } else {

        resultatMessage.textContent = "Message envoyé avec succès !";
        resultatMessage.style.color = "green";
        soumettre.reset();
        
    }

    setTimeout(() => {

        resultatMessage.textContent = " ";

    }, 5000);
    
    });

}


if (boutonMenu) {
    
    boutonMenu.addEventListener("click", () => {

        liens.classList.toggle("visible");

    });

    // Fermer le menu si on clique en dehors
    document.addEventListener("click", (e) => {
        if (!boutonMenu.contains(e.target) && !liens.contains(e.target)) {
            liens.classList.remove("visible");
        }
    });

}




