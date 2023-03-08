import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {getMovieDetail} from "../utils/MovieDb.js";

function MovieDetail(props) {
    const [movie, setMovie] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        getMovieDetail(id).then((data) => {
                setMovie(data)


            }
        )


    }, [])
    return (
        <div className='container flex flex-col'>
            {/*IMAGE AREA*/}
            <div className='flex-flex-col'>
                <img className='w-full' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt=""/>
                {/*IMAGE TEXT*/}
                <div className='flex justify-between mt-2'>
                    <p className='text-text-sm font-semibold text-gray-700'>{movie?.release_date.toString().slice(0,4)}</p>
                    <div className='flex'>
                        <div className='flex items-center justify-center px-2 py-0.5  rounded-full bg-primary-300 text-white text-text-xs font-medium'>User Rating: {movie?.vote_average.toString().slice(0,3)}</div>
                    </div>
                </div>
            </div>
            {/*TITLE AREA*/}
            <div className='mt-3'>
                <p className='text-display-sm font-semibold text-gray-700'>{movie?.title}</p>
            </div>
            {/*OVERVIEW AREA*/}
            <div className='mt-4'>
                <p className='text-text-lg font-normal text-gray-600'>{movie?.overview}</p>
            </div>

        </div>
    );
}

export default MovieDetail;