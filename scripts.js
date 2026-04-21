const animeList = [
  {
    title: "Naruto",
    genre: "Action",
    rating: 9.5,
    year: 2002,
    image: "https://wallpapercave.com/wp/wp10059970.png"
  },

  {
    title: "One Piece",
    genre: "Adventure",
    rating: 9.5,
    year: 1999,
    image: "https://wallpapercave.com/wp/wp12922491.png"
  },

  {
    title: "Attack on Titan",
    genre: "Action",
    rating: 10.0,
    year: 2013,
    image: "https://wallpapercave.com/wp/wp14351724.jpg"
  },

  {
    title: "My Hero Academia",
    genre: "Action",
    rating: 8.3,
    year: 2016,
    image: "https://images.wallpapersden.com/image/download/my-hero-academia-season-7_bmdnZW6UmZqaraWkpJRnbm5nrWdraWs.jpg"
  },

  {
    title: "Hunter x Hunter",
    genre: "Adventure",
    rating: 9.0,
    year: 2011,
    image: "https://wallpapercave.com/wp/wp12678227.jpg"
  },

  {
    title: "Black Clover",
    genre: "Fantasy",
    rating: 8.2,
    year: 2017,
    image: "https://wallpapercave.com/wp/wp9148776.jpg"
  },

  {
    title: "Demon Slayer",
    genre: "Action",
    rating: 8.6,
    year: 2019,
    image: "https://wallpapercave.com/wp/wp9566203.jpg"
  },

  {
    title: "Jujutsu Kaisen",
    genre: "Action",
    rating: 8.7,
    year: 2020,
    image: "https://4kwallpapers.com/images/walls/thumbs_3t/14684.png"
  },

  {
    title: "Fairy Tail",
    genre: "Fantasy",
    rating: 7.9,
    year: 2009,
    image: "https://i.pinimg.com/736x/cc/3b/b1/cc3bb10caaa1c5542c86ab89c33bf0a5.jpg"
  },

  {
    title: "Death Note",
    genre: "Thriller",
    rating: 9.0,
    year: 2006,
    image: "https://i.pinimg.com/736x/67/31/b9/6731b95a00ef2cbdd75f8c346ccb6d24.jpg"
  }
];

let currentAnimeList = animeList.slice();

function showCards() {
  const container = document.getElementById("card-container");
  const template = document.querySelector(".card");

  container.innerHTML = "";

  for (let i = 0; i < currentAnimeList.length; i++) {
    const anime = currentAnimeList[i];
    const card = template.cloneNode(true);

    card.style.display = "block";

    card.querySelector("h2").textContent = anime.title;
    card.querySelector("img").src = anime.image;

    const items = card.querySelectorAll("li");
    items[0].textContent = "Genre: " + anime.genre;
    items[1].textContent = "Rating: " + anime.rating;
    items[2].textContent = "Year: " + anime.year;

    container.appendChild(card);
  }
}
function filterByGenre() {
  const selectedGenre = document.getElementById("genre-filter").value;

  currentAnimeList = [];

  if (selectedGenre === "All") {
    for (let i = 0; i < animeList.length; i++) {
      currentAnimeList.push(animeList[i]);
    }
  } else {
    for (let i = 0; i < animeList.length; i++) {
      if (animeList[i].genre === selectedGenre) {
        currentAnimeList.push(animeList[i]);
      }
    }
  }

  sortByRating();
}

function sortByRating() {
  const selectedSort = document.getElementById("rating-sort").value;

  if (selectedSort === "high") {
    currentAnimeList.sort(function (a, b) {
      return b.rating - a.rating;
    });
  }

  if (selectedSort === "low") {
    currentAnimeList.sort(function (a, b) {
      return a.rating - b.rating;
    });
  }

  showCards();
}
document.addEventListener("DOMContentLoaded", showCards);
