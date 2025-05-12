// Récupère les paramètres de l'URL pour obtenir la SAE actuelle
let param = new URLSearchParams(location.search);
let sae = param.get('sae');

// Extraction des données de l'objet SAE
let titre = (SAE[sae].titre); // Récupère le titre de la SAE
let description = (SAE[sae].description); // Récupère la description
let competence = (SAE[sae].compétences); // Récupère les compétences
let ac = ""; // Initialisation pour les AC
let ressource = ""; // Initialisation pour les ressources
let semestre = (SAE[sae].semestre); // Récupère le semestre

// Génère la liste des AC
Object.keys(SAE[sae]["AC"]).forEach(function (AC) {
    ac += "<a href='PDF/" + AC + ".pdf' class= 'pdf' target= '_blank'><ul><li>" + AC + " : " + SAE[sae]["AC"][AC] + "</li></ul></a>"
});

// Génère la liste des ressources
Object.keys(SAE[sae]["ressources"]).forEach(function (ressources) {
    ressource += "<ul><li>" + ressources + " : " + SAE[sae]["ressources"][ressources] + "</li></ul>"
});

// Affichages des données récupérées 
document.querySelector("h1").innerHTML = titre; // Ajoute le titre au <h1>
document.querySelector(".compétences").innerHTML = "Compétences : " + competence; // Ajoute les compétences
document.querySelector(".description").innerHTML = "Description : <p>" + description + "</p>"; // Ajoute la description
document.querySelector(".AC").innerHTML = "Apprentissages critiques : " + ac; // Ajoute les AC
document.querySelector(".ressources").innerHTML = "Ressources : " + ressource; // Ajoute les ressources
document.querySelector(".semestre").innerHTML = "Semestre : " + semestre; // Ajoute le semestre