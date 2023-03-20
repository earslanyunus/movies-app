import React from 'react';
import {NavLink} from "react-router-dom";

function MovieCard({movies}) {
    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-4 '>
            {movies?.map((movie)=>{
                return(
                        <NavLink to={`/movie/${movie.id}`} key={movie.id} className=''>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className='h-full w-full' alt={movie.title}/>
                        </NavLink>

                )
            })}
            </div>
        </>
    )
}

export default MovieCard;