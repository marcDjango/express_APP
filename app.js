// importation express
const express = require("express");

//création application en appelant le module express
const app = express();
//constante pour stocker le numero du port
const port = 5000;

//************************************tableau de données********************************************//
const listeUtilisateurs = [
  { id: 0, name: "Théo", age: 33, ville: "toulouse" },
  { id: 1, name: "Emma", age: 28, ville: "Paris" },
  { id: 2, name: "Liam", age: 30, ville: "Marseille" },
  { id: 3, name: "Olivia", age: 25, ville: "Lyon" },
  { id: 4, name: "Noah", age: 29, ville: "Bordeaux" },
  { id: 5, name: "Ava", age: 31, ville: "Paris" },
  { id: 6, name: "Lucas", age: 27, ville: "toulouse" },
  { id: 7, name: "Mia", age: 26, ville: "Bordeaux" },
  { id: 8, name: "Léo", age: 32, ville: "toulouse" },
  { id: 9, name: "Charlotte", age: 29, ville: "Paris" },
];

// renvoi le tableau selon l'id reçu comme argument
const getUserId = (req, res) => {
  //on s'assure d'obtenir un chiffre comme parametres
  const userId = parseInt(req.params.id, 10);
  let found = listeUtilisateurs.find((element) => element.id === userId);
  if (found) {
    res.status(200).send({ found });
  } else {
    res.sendStatus(404);
  }
};
// renvoi le tableau complet
const getListLimit = (req, res) => {
  let temp = req.query.ville;
  let limit = parseInt(req.query.limit, 10);
  //on vérifie si limit est bien un chiffre
  if (isNaN(limit)) {
    limit = 5;
  }
  let answer = listeUtilisateurs.slice(0, limit);

  if (temp) {
    answer = listeUtilisateurs.filter((element) => element.ville === temp);
  }
  res.send(answer);
};

//création route avec la methode get
app.get("/listeUtilisateurs", getListLimit);

//création d'une route avec la methode get pour obtenir l'objet qui correspond à l'id
app.get("/listeUtilisateurs/:id", getUserId);

//Methode pour ecouter les connexions rentrantes
app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
