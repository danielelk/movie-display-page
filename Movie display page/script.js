const movies = [
  {
    id: 1,
    title: "john wick",
    category: "action",
    rating: 86,
    img: "./images/movie-1.jpg",
    desc: `Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his
    life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and
    his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the
    remorseless killing machine within and seeks vengeance.`,
  },
  {
    id: 2,
    title: "the hangover",
    category: "comedy",
    rating: 78,
    img: "./images/movie-2.jpg",
    desc: `Two days before his wedding, Doug (Justin Bartha) and three friends (Bradley Cooper, Ed Helms, Zach Galifianakis) drive to Las Vegas for a wild and memorable stag party. In fact, when the three groomsmen wake up the next morning, they can't remember a thing; nor can they find Doug. With little time to spare, the three hazy pals try to re-trace their steps and find Doug so they can get him back to Los Angeles in time to walk down the aisle.`,
  },
  {
    id: 3,
    title: "the conjuring",
    category: "horror",
    rating: 86,
    img: "./images/movie-3.jpg",
    desc: `In 1970, paranormal investigators and demonologists Lorraine (Vera Farmiga) and Ed (Patrick Wilson) Warren are summoned to the home of Carolyn (Lili Taylor) and Roger (Ron Livingston) Perron. The Perrons and their five daughters have recently moved into a secluded farmhouse, where a supernatural presence has made itself known. Though the manifestations are relatively benign at first, events soon escalate in horrifying fashion, especially after the Warrens discover the house's macabre history.`,
  },
  {
    id: 4,
    title: "black widow",
    category: "action",
    rating: 79,
    img: "./images/movie-4.jpg",
    desc: `In 1970, paranormal investigators and demonologists Lorraine (Vera Farmiga) and Ed (Patrick Wilson) Warren are summoned to the home of Carolyn (Lili Taylor) and Roger (Ron Livingston) Perron. The Perrons and their five daughters have recently moved into a secluded farmhouse, where a supernatural presence has made itself known. Though the manifestations are relatively benign at first, events soon escalate in horrifying fashion, especially after the Warrens discover the house's macabre history.`,
  },
  {
    id: 5,
    title: "your name",
    category: "romance",
    rating: 98,
    img: "./images/movie-5.jpg",
    desc: `A teenage boy and girl embark on a quest to meet each other for the first time after they magically swap bodies.`,
  },
  {
    id: 6,
    title: "horrible bosses",
    category: "comedy",
    rating: 69,
    img: "./images/movie-6.jpg",
    desc: `Nick (Jason Bateman), Dale (Charlie Day) and Kurt (Jason Sudeikis) are workers who would like nothing better than to grind their oppressive employers into the dirt. Quitting their jobs is not an option, so -- fueled by alcohol and dubious advice from a criminal (Jamie Foxx) -- the men devise a complex and seemingly foolproof plan to permanently rid themselves of their terrible bosses. The problem is, any plan is only as clever as the brains behind it.`,
  },
  {
    id: 7,
    title: "it",
    category: "horror",
    rating: 86,
    img: "./images/movie-7.jpg",
    desc: `Seven young outcasts in Derry, Maine, are about to face their worst nightmare -- an ancient, shape-shifting evil that emerges from the sewer every 27 years to prey on the town's children. Banding together over the course of one horrifying summer, the friends must overcome their own personal fears to battle the murderous, bloodthirsty clown known as Pennywise.`,
  },
  {
    id: 8,
    title: "the perfect date",
    category: "romance",
    rating: 67,
    img: "./images/movie-8.jpg",
    desc: `A high school student creates an app to offer his services as a fake date to make money for college. When he develops feelings for someone, his plan gets complicated.`,
  },
  {
    id: 9,
    title: "wanted",
    category: "action",
    rating: 71,
    img: "./images/movie-9.jpg",
    desc: `Wesley Gibson (James McAvoy) is an office worker whose life is going nowhere. After his estranged father is murdered, he meets Fox (Angelina Jolie), who recruits him into the Fraternity, a secret society of assassins which takes its orders from Fate itself. Fox and Sloan (Morgan Freeman), the Fraternity's leader, teach Wesley to tap into dormant powers. Though he enjoys his newfound abilities, he begins to suspect that there is more to the Fraternity than meets the eye.`,
  },
];

const midsection = document.querySelector(".mid-section");
const buttonFilter = document.querySelectorAll(".button-filter");

window.addEventListener("DOMContentLoaded", function () {
  displayDiffMovies(movies);
});

buttonFilter.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.category;
    const moviesCategory = movies.filter(function (movie) {
      if (movie.category == category) {
        return movie;
      }
    });
    if (category === "all") {
      displayDiffMovies(movies);
    }
    else {
      displayDiffMovies(moviesCategory);
    }
  });
});

function displayDiffMovies(diffMovies) {
  let displayMovies = diffMovies.map(function (movie) {
    return `<article class="movie">
    <img src=${movie.img} class="image" alt=${movie.title}>
    <div class="movie-details">
      <header>
        <h4>${movie.title}</h4>
        <h4 class="rating">${movie.rating}%</h4>
      </header>
      <p class="description">
        ${movie.desc}
      </p>
    </div>
  </article>`;
  });
  displayMovies = displayMovies.join("");
  midsection.innerHTML = displayMovies;
}