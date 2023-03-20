import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {getSearchMovies} from "../utils/MovieDb.js";
import MovieCard from "../components/MovieCard.jsx";

function SearchResults({movies}) {
    const {query} = useParams()
    const [searchMovies, setSearchMovies] = React.useState([])
    useEffect(()=>{
        getSearchMovies(query).then((data)=>{
                setSearchMovies(data.results)
        }
        )
    },[query])

    return (
            <>
                <div className='container mx-auto'>
                    <MovieCard movies={searchMovies}/>
                </div>
            </>
    );
}

export default SearchResults;