import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {getMovieDetail} from "../utils/MovieDb.js";
import Button from "../components/button/Button.jsx";
import {
    IoPlayOutline,
    MdBookmarkAdd,
    MdBookmarkBorder,
    MdFavorite,
    MdFavoriteBorder,
    MdPlayArrow, MdStarOutline, TbPlayerPlay
} from "react-icons/all.js";
import PerViewGlass from "../components/swiper/PerViewGlass.jsx";
import PerView from "../components/swiper/PerView.jsx";

function MovieDetail(props) {
    const [movie, setMovie] = useState(null);
    const director = movie?.crew.filter((crew) => crew.job === 'Director').map((crew) => crew.name).join(', ');
    const story = movie?.crew.filter((crew) => crew.job === 'Screenplay').map((crew) => crew.name).join(', ');
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
                    <p className='text-text-sm font-semibold text-gray-700'>{movie?.release_date.toString().slice(0, 4)}</p>
                    <div className='flex'>
                        <div
                            className='flex items-center justify-center px-2 py-0.5  rounded-full bg-primary-300 text-white text-text-xs font-medium'>User
                            Rating: {movie?.vote_average.toString().slice(0, 3)}</div>
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
            {/*INTERRACTION AREA*/}
            <div className='flex justify-between mt-6'>
                <button
                    className='border-2  border-gray-300 hover:bg-gray-50  rounded-lg text-gray-700 hover:text-gray-800 text-[20px] p-2'>
                    <MdFavoriteBorder/>
                </button>
                <button
                    className='border-2  border-gray-300 hover:bg-gray-50  rounded-lg text-gray-700 hover:text-gray-800 text-[20px] p-2'>
                    <TbPlayerPlay/>
                </button>
                <button
                    className='border-2  border-gray-300 hover:bg-gray-50  rounded-lg text-gray-700 hover:text-gray-800 text-[20px] p-2'>
                    <MdBookmarkBorder/>
                </button>
                <button
                    className='border-2  border-gray-300 hover:bg-gray-50  rounded-lg text-gray-700 hover:text-gray-800 text-[20px] p-2'>
                    <MdStarOutline/>
                </button>
            </div>
            {/*SHORT INFO*/}
            <div className='mt-6 flex flex-col gap-3'>
                <div className='flex flex-col gap-0.5 '>
                    <p className='text-text-lg font-semibold text-gray-700'>
                        Director
                    </p>
                    <p className='tex-text-md text-gray-600 font-normal'>{director}</p>
                </div>
                <div className='flex flex-col gap-0.5'>
                    <p className='text-text-lg font-semibold text-gray-700'>
                        Story
                    </p>
                    <p className='tex-text-md text-gray-600 font-normal'>{story}</p>
                </div>
                <div className='flex flex-col gap-0.5'>
                    <p className='text-text-lg font-semibold text-gray-700'>
                        Budget
                    </p>
                    <p className='tex-text-md text-gray-600 font-normal'>${movie?.budget.toLocaleString()}</p>
                </div>
                <div className='flex flex-col gap-0.5'>
                    <p className='text-text-lg font-semibold text-gray-700'>
                        Revenue
                    </p>
                    <p className='tex-text-md text-gray-600 font-normal'>${movie?.revenue.toLocaleString()}</p>
                </div>
            </div>
            {/*CAST SWIPER*/}
            <div className='flex flex-col mt-6 h-[50vh] min-h-[450px] max-h-[600px]'>
                <p className='text-display-md font-semibold text-gray-700'>Cast</p>
                <PerViewGlass slidesPerView={'auto'} spaceBetween={12} arrows={true} items={movie}/>
            </div>
            {/*SIMILAR SWIPER*/}
            <div className='mt-6 h-[50vh]'>
                <p className='text-display-md font-semibold text-gray-700'>Similar</p>
                {/*<PerView slidesPerView={'auto'} spaceBetween={12} arrows={true} items={movie}/>*/}
            </div>
        </div>
    );
}

export default MovieDetail;