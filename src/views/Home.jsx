import React, {useEffect, useState} from 'react';
import {getMovie, getPopularMovies} from "../utils/MovieDb.js";
import PerView from "../components/swiper/PerView.jsx";

function Home(props) {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        getPopularMovies().then((data) => {
            setPopularMovies(data.results);
        }
        )
        getMovie(505642).then((data) => {
            console.log(data);
        }
        )

    }, []);

    return (
        <div>


            <div className='h-[30vh]'>
            <PerView items={popularMovies}/>
            </div>

        </div>
    );
}

export default Home;