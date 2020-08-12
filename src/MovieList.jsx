import React from 'react';
const MovieList = ({
  movieDetails,
}) => {
  return (
    <>
      {movieDetails && movieDetails.map((obj, key)=>{
        const {movie_image, description, movie_name} = obj;
        return (
          <>
          <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-card-hover" uk-grid="true">
          <div className="uk-card-media-left uk-cover-container" key={key}>
            <img src={`../${movie_image}`} alt="" uk-cover="true" />
            <canvas width="600" height="400"></canvas>
        </div>
        <div>
         <div className="uk-card-body">
        <h3 className="uk-card-title">{movie_name}</h3>
        <p>{description}</p>
        </div>
        </div>
        </div>
        </>
        )
      })
     }
  </>
  )
};
export default MovieList;