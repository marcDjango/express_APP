const express = require("express");

const app = express();

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });

  app.get("/",(req, res)=>{
    res.send("Welcome to my favourite movie list")
  });

  const getMoviesID = (req, res) => {
    if (req.params.id){
        const answer = movies.find((movie)=> parseInt(req.params.id, 10) === movie.id)
        if (answer){
            res.status(200).json(answer)
            console.log(answer);
        }else{
            res.status(404).send("Not Found")
        }
    }
  }
  const getMovies = (req , res) => {
    res.status(200).json(movies)
  }
  app.get("/movies/:id", getMoviesID);
  app.get("/movies", getMovies)