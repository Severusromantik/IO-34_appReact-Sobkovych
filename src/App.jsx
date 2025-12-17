import { useState } from 'react';
import GoodsCard from './components/GoodsCard';
import './App.css';

function App() {
  // Початкові дані про фільми
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", year: 2010, director: "Christopher Nolan", imdbRating: 8.8, genre: "Sci-Fi", isFavorite: false, image: "/film_images/Inception.jpg" },
    { id: 2, title: "The Matrix", year: 1999, director: "Lana Wachowski", imdbRating: 8.7, genre: "Action", isFavorite: false, image: "/film_images/TheMatrix.jpg" },
    { id: 3, title: "Interstellar", year: 2014, director: "Christopher Nolan", imdbRating: 8.7, genre: "Sci-Fi", isFavorite: false, image: "/film_images/Inception.jpg" },
    { id: 4, title: "The Dark Knight", year: 2008, director: "Christopher Nolan", imdbRating: 9.0, genre: "Action", isFavorite: false, image: "/film_images/TheDarkKnight.jpg" },
    { id: 5, title: "Pulp Fiction", year: 1994, director: "Quentin Tarantino", imdbRating: 8.9, genre: "Crime", isFavorite: false, image: "/film_images/PulpFiction.jpg" },
    { id: 6, title: "Avatar", year: 2009, director: "James Cameron", imdbRating: 7.9, genre: "Action", isFavorite: false, image: "/film_images/Avatar.jpg" },
    { id: 7, title: "Avengers", year: 2012, director: "Joss Whedon", imdbRating: 8.0, genre: "Action", isFavorite: false, image: "/film_images/Avengers1.jpg" },
    { id: 8, title: "Avengers Endgame", year: 2019, director: "Russo br.", imdbRating: 8.4, genre: "Action", isFavorite: false, image: "/film_images/AvengersEndgame.jpg" },
    { id: 9, title: "Hotel Grand Budapest", year: 2014, director: "Wes Anderson", imdbRating: 8.1, genre: "Drama", isFavorite: false, image: "/film_images/Budapest.jpg" },
    { id: 10, title: "Casino Royale", year: 2006, director: "Martin Campbell", imdbRating: 8.0, genre: "Adventure", isFavorite: false, image: "/film_images/CasinoRoyale.jpg" },
    { id: 11, title: "F1 Movie", year: 2025, director: "James Cameron", imdbRating: 4.0, genre: "Adventure", isFavorite: false, image: "/film_images/F1Movie.jpg" },
    { id: 12, title: "Fast & Furious 8", year: 2009, director: "James Cameron", imdbRating: 9.0, genre: "Action", isFavorite: false, image: "/film_images/FastAndFurious8.jpg" },
    { id: 13, title: "Gardians vol.1", year: 2008, director: "Martin Campbell", imdbRating: 5.5, genre: "Adventure", isFavorite: false, image: "/film_images/Gardians1.jpg" },
    { id: 14, title: "Gardians vol.2", year: 2010, director: "Christopher Nolan", imdbRating: 5.7, genre: "Adventure", isFavorite: false, image: "/film_images/Gardians2.jpg" },
    { id: 15, title: "Geostorm", year: 2012, director: "James Cameron", imdbRating: 3.9, genre: "Action", isFavorite: false, image: "/film_images/Geostorm.jpg" },
    { id: 16, title: "Greenland", year: 2020, director: "Quentin Tarantino", imdbRating: 1.1, genre: "Action", isFavorite: false, image: "/film_images/Greenland.jpg" },
    { id: 17, title: "Napoleon", year: 2021, director: "Christopher Nolan", imdbRating: 8.0, genre: "Historical", isFavorite: false, image: "/film_images/Napoleon.jpg" },
    { id: 18, title: "Pirates 4", year: 2003, director: "James Cameron", imdbRating: 2.0, genre: "Action", isFavorite: false, image: "/film_images/POTC4.jpg" },
    { id: 19, title: "Spectr", year: 2014, director: "Martin Campbell", imdbRating: 3.4, genre: "Drama", isFavorite: false, image: "/film_images/Spectr.jpg" },
    { id: 20, title: "Spider Man 3", year: 2014, director: "James Cameron", imdbRating: 4.8, genre: "Action", isFavorite: false, image: "/film_images/SpiderMan3.jpg" },
    { id: 21, title: "The Last Jedi", year: 2025, director: "Quentin Tarantino", imdbRating: 6.7, genre: "Adventure", isFavorite: false, image: "/film_images/SWTheLastJedi.jpg" },
    { id: 22, title: "The Justice League", year: 2024, director: "Martin Campbell", imdbRating: 1.9, genre: "Action", isFavorite: false, image: "/film_images/TheJusticeLeague.jpg" },
    { id: 23, title: "the Last Samurai", year: 2019, director: "Christopher Nolan", imdbRating: 7.4, genre: "Drama", isFavorite: false, image: "/film_images/TheLasySamurai.jpg" },
    { id: 24, title: "Titanic", year: 2019, director: "James Cameron", imdbRating: 3.5, genre: "Drama", isFavorite: false, image: "/film_images/Titanic.jpg" },
    { id: 25, title: "Top Gun 2025", year: 2018, director: "Lana Wachowski", imdbRating: 5.3, genre: "Adventure", isFavorite: false, image: "/film_images/TopGun2025.jpg" },
    { id: 26, title: "Ford vs Ferrari", year: 2018, director: "James Cameron", imdbRating: 5.3, genre: "Drama", isFavorite: false, image: "/film_images/FordFerrari.jpg" },
    { id: 27, title: "Independece Day", year: 2018, director: "Quentin Tarantino", imdbRating: 6.3, genre: "Sci-Fi", isFavorite: false, image: "/film_images/independence.jpg" },
    { id: 28, title: "Men in Black", year: 2018, director: "Quentin Tarantino", imdbRating: 4.3, genre: "Sci-Fi", isFavorite: false, image: "/film_images/ManInBlack.jpg" },

  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Всі жанри");
  const [selectedRating, setSelectedRating] = useState("Всі оцінки");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Перемикач лайка
  const toggleFavorite = (id) => {
    setMovies(movies.map(movie => 
      movie.id === id ? { ...movie, isFavorite: !movie.isFavorite } : movie
    ));
  };

  const allGenres = ["Всі жанри", ...new Set(movies.map(m => m.genre))];
  const ratingCategories = ["Всі оцінки", "Good (7-10)", "Medium (4-7)", "Bad (0-4)"];

  // Логіка  фільтрації 
  const filteredMovies = movies.filter(movie => {
    const matchesName = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "Всі жанри" || movie.genre === selectedGenre;
    const matchesFav = showFavoritesOnly ? movie.isFavorite : true;
    
    let matchesRating = true;
    if (selectedRating === "Good (7-10)") matchesRating = movie.imdbRating >= 7;
    else if (selectedRating === "Medium (4-7)") matchesRating = movie.imdbRating >= 4 && movie.imdbRating < 7;
    else if (selectedRating === "Bad (0-4)") matchesRating = movie.imdbRating < 4;

    return matchesName && matchesGenre && matchesRating && matchesFav;
  });

  return (
    <div className="app-container">
      <header className="header">
        <h1>🎬 Movie Gallery</h1>
        <div className="controls">
          <input 
            type="text" 
            placeholder="Пошук..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            {allGenres.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
          <select value={selectedRating} onChange={(e) => setSelectedRating(e.target.value)}>
            {ratingCategories.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
          <button 
            className={`fav-toggle ${showFavoritesOnly ? 'active' : ''}`}
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
          >
            {showFavoritesOnly ? "❤️ Тільки улюблені" : "🤍 Всі фільми"}
          </button>
        </div>
      </header>

      <div className="gallery">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <GoodsCard 
              key={movie.id} 
              {...movie} 
              onToggleFavorite={() => toggleFavorite(movie.id)} 
            />
          ))
        ) : (
          <p className="no-results">Нічого не знайдено 🔍</p>
        )}
      </div>
    </div>
  );
}

export default App;