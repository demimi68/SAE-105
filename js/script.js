// Parcourt les clés de l'objet SAE pour générer dynamiquement du contenu
Object.keys(SAE).forEach(function (numSAE) {
    let compé = ''; // Variable pour stocker les compétences associées à une SAE

    // Parcourt les compétences associées à une SAE et génère du contenu HTML pour chacune
    SAE[numSAE].compétences.forEach(function (competence) {
        compé += '<div class="competence">' + competence + '</div>'; // Création d'une div par compétence
    });

    // Ajoute une carte pour chaque SAE dans le conteneur avec la classe "carre"
    document.querySelector(".carre").innerHTML += '<a href="page3.html?sae=' + numSAE + '">' + '<div class="part"><div class="numSAE">' + numSAE + '</div><div class="titre">' + SAE[numSAE].titre + '</div>' + compé + '</div></a>';

});
