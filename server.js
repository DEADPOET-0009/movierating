const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname);

const movies = [
  { id: 1, emoji: "🎬", title: "Midnight Chase", genre: "Action", year: 2024, duration: "2h 05m", rating: 8.5,
    description: "A former getaway driver is pulled back into the city for one last night, racing against the clock.",
    director: "Alex Morgan", cast: "Sam Rivera, Jordan Lee, Priya Nair" },
  { id: 2, emoji: "🚀", title: "Star Voyage", genre: "Sci-Fi", year: 2023, duration: "2h 20m", rating: 8.1,
    description: "A crew of explorers travels beyond the edge of the map to find a new home for humanity.",
    director: "Linda Park", cast: "Chris Evans Jr., Mei Tan, Omar Said" },
  { id: 3, emoji: "😂", title: "Funny Friends", genre: "Comedy", year: 2022, duration: "1h 35m", rating: 7.4,
    description: "Three old friends plan a surprise wedding and everything that can go wrong does.",
    director: "Tom Baker", cast: "Lily Moore, Ben Carter, Nina Shah" },
  { id: 4, emoji: "👻", title: "The Old House", genre: "Horror", year: 2021, duration: "1h 40m", rating: 7.0,
    description: "A family moves into a quiet old house and soon learns they are not alone.",
    director: "Evelyn Grey", cast: "Jake Hall, Rosa Diaz, Tim Wood" },
  { id: 5, emoji: "💔", title: "Last Letter", genre: "Drama", year: 2024, duration: "2h 10m", rating: 8.8,
    description: "A woman finds a letter that was never sent and sets out to find the person it was written for.",
    director: "Maria Lopez", cast: "Anna Kim, Daniel Ross, Zoe Clark" },
  { id: 6, emoji: "🔥", title: "Fire Line", genre: "Action", year: 2023, duration: "1h 55m", rating: 7.8,
    description: "A team of firefighters must save a mountain town when a wildfire turns toward it.",
    director: "Rick Stone", cast: "Mark Evans, Tara Quinn, Leo Brown" },
  { id: 7, emoji: "🤖", title: "Robot City", genre: "Sci-Fi", year: 2025, duration: "2h 00m", rating: 8.3,
    description: "In a city run by robots, one repair bot begins to ask what it means to be alive.",
    director: "Yuki Tanaka", cast: "Voice of Ava Reed, Kenji Mori, Sara Bell" },
  { id: 8, emoji: "🎭", title: "Stage Lights", genre: "Drama", year: 2022, duration: "1h 50m", rating: 7.6,
    description: "An aging actor gets one more chance on stage and has to face his past.",
    director: "Paul Hughes", cast: "George Lane, Helen Cole, Ivy Chen" },
  { id: 9, emoji: "🦸", title: "Hero Rising", genre: "Action", year: 2024, duration: "2h 15m", rating: 7.2,
    description: "An ordinary student discovers a hidden power and must learn to use it for good.",
    director: "Dan Miller", cast: "Noah Price, Ella Fox, Raj Patel" },
  { id: 10, emoji: "🌊", title: "Deep Blue", genre: "Drama", year: 2023, duration: "2h 05m", rating: 8.0,
    description: "A marine scientist and her estranged father share one long summer on a fishing boat.",
    director: "Clara Jensen", cast: "Ruth Adams, Henry Cole, Mia Wong" },
  { id: 11, emoji: "🧟", title: "Dark Night", genre: "Horror", year: 2020, duration: "1h 30m", rating: 6.9,
    description: "A group of strangers is stuck in a gas station while something moves outside.",
    director: "Vince Carter", cast: "Lena Ford, Max Gray, Ola Reyes" },
  { id: 12, emoji: "🐶", title: "Lost Puppy", genre: "Comedy", year: 2022, duration: "1h 25m", rating: 7.5,
    description: "A small puppy gets lost in a big city and brings a whole street of neighbors together.",
    director: "Sophie Reed", cast: "Jack Lowe, Amy Stone, Carlos Vega" },
  { id: 13, emoji: "🪐", title: "Planet Zero", genre: "Sci-Fi", year: 2025, duration: "2h 30m", rating: 8.6,
    description: "The last colony ship reaches a strange planet that seems to be waiting for them.",
    director: "Isaac Brook", cast: "Nora Hale, Peter Nguyen, Dana Cruz" },
  { id: 14, emoji: "🕵️", title: "Cold Case", genre: "Drama", year: 2021, duration: "2h 00m", rating: 8.2,
    description: "A retired detective reopens the one case he could never solve.",
    director: "Frank Ellis", cast: "Walter Moss, Grace Lin, Omar Reed" },
  { id: 15, emoji: "🎪", title: "Circus Day", genre: "Comedy", year: 2020, duration: "1h 30m", rating: 7.1,
    description: "A small family circus has one day to save the show before the big tent closes for good.",
    director: "Betty Hart", cast: "Sid Marsh, Pia Rao, Tony Blake" }
];

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/movie/:id", function (req, res) {
  const id = Number(req.params.id);
  let movie = null;

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == id) {
      movie = movies[i];
    }
  }

  

  res.render("movie-template", { movie: movie, reviews: [] });
});

app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});
