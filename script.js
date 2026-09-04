const boutonCommencer = document.getElementById("commencer");

const accueilCard = document.getElementById("accueilCard");
const rechercheCard = document.getElementById("rechercheCard");

const boutonChercher = document.getElementById("chercher");
const champNom = document.getElementById("nomMembre");

const messageErreur = document.getElementById("messageErreur");


const membres = [
  {
    nom: "bénédicte kinkela",
    carte: "Cartes/Bénédicte-KINKELA.png"
  },

  {
    nom: "darlène yowa",
    carte: "Cartes/Darlène-YOWA.png"
  },

  {
    nom: "elisabeth olela",
    carte: "Cartes/Elisabeth-OLELA.PNG"
  },

  {
    nom: "esther saleh",
    carte: "Cartes/Esther-SALEH.png"
  },

  {
    nom: "hope diya",
    carte: "Cartes/Hope-DIYA.PNG"
  },

  {
    nom: "jemima tubadi",
    carte: "Cartes/Jemima-TUBADI.png"
  },

  {
    nom: "julie nzengu",
    carte: "Cartes/Julie-NZENGU.png"
  },

  {
    nom: "ketsia avene",
    carte: "Cartes/Ketsia-AVENE.png"
  },

  {
    nom: "louise manantinu",
    carte: "Cartes/Louise-MANANTINU.png"
  },

  {
    nom: "marie julienne mangala",
    carte: "Cartes/Marie-Julienne-MANGALA.PNG"
  },

  {
    nom: "martha kalemba",
    carte: "Cartes/Martha-KALEMBA.png"
  },

  {
    nom: "materdei banangabu",
    carte: "Cartes/MaterDei-BANANGABU.png"
  },

  {
    nom: "nathalie okenge",
    carte: "Cartes/Nathalie-OKENGE.png"
  },

  {
    nom: "nelson mukunayi",
    carte: "Cartes/Nelson-MUKUNAYI.PNG"
  },

  {
    nom: "olivia nzalabu",
    carte: "Cartes/Olivia-NZALABU.PNG"
  },

  {
    nom: "prescillia ngonzela",
    carte: "Cartes/Prescillia-NGONZELA.png"
  },

  {
    nom: "ruth kumba",
    carte: "Cartes/Ruth-KUMBA.png"
  },

  {
    nom: "saphir kevani",
    carte: "Cartes/Saphir-KEVANI.png"
  },

  {
    nom: "soraya kasekwa",
    carte: "Cartes/Soraya-KASEKWA.PNG"
  },

  {
    nom: "tommy zege",
    carte: "Cartes/Tommy-ZEGE.png"
  },

  {
    nom: "audrey katunda",
    carte: "Cartes/Audrey-KATUNDA.png"
  },

  {
    nom: "forty mantuba",
    carte: "Cartes/Forty-MANTUBA.png"
  },
  
  {
    nom: "lauredi etoko",
    carte:"Cartes/Lauredi-ETOKO.png"
  },
];


boutonCommencer.addEventListener("click", function () {

  accueilCard.style.display = "none";

  rechercheCard.style.display = "block";

  champNom.focus();

});


boutonChercher.addEventListener("click", rechercherMembre);


champNom.addEventListener("keydown", function (event) {

  if (event.key === "Enter") {
    rechercherMembre();
  }

});


function rechercherMembre() {

  const nomEntre = normaliserNom(champNom.value);


  if (nomEntre === "") {

    messageErreur.textContent =
      "Entre ton nom complet pour retrouver ta carte.";

    messageErreur.style.display = "block";

    return;
  }


  const motsEntres = nomEntre
    .split(" ")
    .sort()
    .join(" ");


  const membreTrouve = membres.find(function (membre) {

    const nomMembre = normaliserNom(membre.nom);

    const motsMembre = nomMembre
      .split(" ")
      .sort()
      .join(" ");

    return (
      nomMembre === nomEntre ||
      motsMembre === motsEntres
    );

  });


  if (membreTrouve) {

    messageErreur.style.display = "none";

    afficherCarte(membreTrouve);

  } else {

    messageErreur.textContent =
      "Nous n'avons pas trouvé de carte correspondant à ce nom. Vérifie l'orthographe de ton nom complet et réessaie.";

    messageErreur.style.display = "block";

  }

}


function normaliserNom(nom) {

  return nom
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-_]/g, " ")
    .trim()
    .replace(/\s+/g, " ");

}


function afficherCarte(membre) {

  rechercheCard.innerHTML = `
    <img
  src="images/logo-dynamique.png"
  alt="Logo Dynamique Femmes UCC"
  class="logo-dynamique"
>
    <p class="annee">
      DYNAMIQUE FEMME UCC
    </p>

    <h2>
      Merci 💙
    </h2>

    <p class="description">
      Voici la carte que nous avons préparée pour toi.
      Merci pour ta contribution à l'histoire de la Dynamique Femme.
    </p>

    <img
      src="${membre.carte}"
      alt="Carte de remerciement"
      class="carte-membre"
    >

    <a
      href="${membre.carte}"
      download
      class="download-btn"
    >
      Télécharger ma carte
    </a>

    <br>

    <button
      class="retour-btn"
      onclick="location.reload()"
    >
      Rechercher une autre carte
    </button>

  `;

}
