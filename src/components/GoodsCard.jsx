const GoodsCard = ({ image, title, year, director, imdbRating, genre, isFavorite, onToggleFavorite }) => {
    return (
      <div className="movie-card">
        <button className="heart-btn" onClick={onToggleFavorite}>
          {isFavorite ? '❤️' : '🤍'}
        </button>
        <img src={image} alt={title} className="movie-img" />
        <div className="movie-info">
          <h3>{title}</h3>
          <p>🎭 <b>Жанр:</b> {genre}</p>
          <p>📅 <b>Рік:</b> {year}</p>
          <p>🎬 <b>Режисер:</b> {director}</p>
          <p>⭐ <b>IMDB:</b> {imdbRating}</p>
        </div>
      </div>
    );
  };
  
  
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '15px',
    width: '220px',
    textAlign: 'left',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    color: '#333'
  };
  
  export default GoodsCard;