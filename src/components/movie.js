import React from "react";

function Movie() {

    const getMovie = ()=>{
        fetch("https://otakudesu-anime-api.vercell.app /api/v1/ongoing/1")
    }

  return (
    <div>
      movie
    </div>
  );
}

export default Movie;
