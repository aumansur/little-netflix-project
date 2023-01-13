import { data } from "autoprefixer"
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard"
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1920, min: 900},
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

function MovieList({title, filter, carousel = false}) {
    const [ movies, setMovies] =  useState([]);
   
    const getMovies = async ()=> {
        const response = await fetch ( `https://yts.mx/api/v2/list_movies.json?${filter}`).then(res=> res.json())
        setMovies(response.data.movies);
        console.log(response.data.movies);
    }
    useEffect(() => {
       
        getMovies();
     }, []);

  return (
    <div className=" my-12">
        <h1 className=" text-gray-100 text-3xl font-medium">{title}</h1>
      
   
     <>
             
     {carousel ?(
                      <Carousel responsive={responsive}>
                      <MovieCard/> 
                      {movies?.map( movie => (
                           <MovieCard movie= {movie} {...movie} key={movie?.id}/> 
                      ))}
                      </Carousel>
            ):(
                <div className="flex items-start flex-wrap space-x-4">
                    {movies?.map( movie => (
                 <MovieCard movie= {movie} {...movie} key={movie?.id}/> 
                  ))}
                </div>
            )}
   
     </>
     
          
           
        </div>

  )
}

export default MovieList