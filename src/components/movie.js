import React, { useEffect, useState } from "react";

function Movie() {

    const [movieList,setMovieList] = useState([])

    const getMovie = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=8e5f832c5928049892d049f54677fe4c")
        .then(res => res.json())
        .then (json => setMovieList(json.results ))
    }

    useEffect(()=>{
        getMovie()
    },[])

    console.log(movieList)

  return (
    <div>
      {movieList.map((movie)=>(
        <img style={{width:"300px",height:"250px",marginleft:"10px",marginTop:"30px"}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
      ))}
    </div>
  );
}

export default Movie;
