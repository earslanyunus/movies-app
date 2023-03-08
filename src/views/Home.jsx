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
                <p className='container mx-auto text-display-md  font-semibold text-gray-900 mb-3'>Popular Movies</p>
            <PerView slidesPerView={'auto'} spaceBetween={12}  items={popularMovies} arrows={true}/>
            </div>
        </div>
    );
}

export default Home;