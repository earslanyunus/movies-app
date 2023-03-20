import React, {useEffect, useState} from 'react';
import {getPopularMovies, getTopRatedMovies, getUpcomingMovies} from "../utils/MovieDb.js";
import PerView from "../components/swiper/PerView.jsx";
// todo add comment system
// todo add my profile section
// todo add interactivity to the movie detail page

function Home(props) {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    useEffect(() => {
        getPopularMovies().then((data) => {
                setPopularMovies(data.results);
            }
        )

        getTopRatedMovies().then((data) => {
            setTopRatedMovies(data.results);
        })

        getUpcomingMovies().then((data) => {
            setUpcomingMovies(data.results);
        }
        )


    }, []);

    return (
        <div>


            <div className='h-[40vh] flex flex-col min-h-[25rem]'>
                <p className='container mx-auto text-display-md  font-semibold text-gray-900 mb-3'>Popular Movies</p>
                <PerView slidesPerView={'auto'} spaceBetween={12} items={popularMovies} arrows={true}/>
            </div>
            <div className='h-[40vh] mt-6 flex flex-col min-h-[25rem]'>
                <p className='container mx-auto text-display-md  font-semibold text-gray-900 mb-3'>Top Rated Movies</p>
                <PerView slidesPerView={'auto'} spaceBetween={12} items={topRatedMovies} arrows={true}/>

            </div>
            <div className='h-[40vh] mt-6 flex flex-col min-h-[25rem]'>
                <p className='container mx-auto text-display-md  font-semibold text-gray-900 mb-3'>Upcoming Movies</p>
                <PerView slidesPerView={'auto'} spaceBetween={12} items={upcomingMovies} arrows={true}/>

            </div>

        </div>
    );
}

export default Home;