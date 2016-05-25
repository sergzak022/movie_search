import config from '../config';
import path from 'path';
import '../less/movie-list';

export default ({ movies }) => {

    movies = movies.filter(movie => movie.poster_path != null && movie.title != null);

    return (
      <div className="row movie-list">
        {movies.map( ( movie, midx )=>{
          return (
            <div key={midx} className="thumbnail">
              <div className="img-crop">
                <img
                  src={path.join(config.imgBasePath, movie.poster_path)}
                  alt={movie.title}
                />
                <div className="overlay">
                  <p>
                    {movie.release_date}
                  </p>
                  <p>
                    {movie.vote_average}
                  </p>
                </div>
              </div>
              <div className="caption">
                <h4>{movie.title}</h4>
              </div>
            </div>
          )
        })}
      </div>
    )
};
