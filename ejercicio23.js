const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

//ejercicio 23

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

const moviesany = ()
const moviesmedianas = ()
const movieslargas = ()

for (let i= 0; i < movies.length; i++) {
    if (movies(i).durationInMinutes < 100) {
        moviesany.push(movies[i]);
    } else if (movies[i].durationInMinutes >= 100 && movies[i].durationInMinutes <= 200) 
        {
        moviesmedianas.push(movies[i]);
    } else if (movies[i].durationInMinutes >= 200) {
        movieslargas.push(movies[i]);
    }

    console.log('peliculas pequeñas:', moviesany);
    console.log('peliculas medianas:', moviesmedianas);
    console.log('peliculas largas:', movieslargas);
}