import React from 'react';
import {getDiscoverMovies} from "../utils/MovieDb.js";

function ExploreMovie(props) {
    const [year, setYear] = React.useState(2021);
    const [point, setPoint] = React.useState(0);
    const pointHandler = (e) => {
        console.log(e.target.value)
        setPoint(e.target.value);

    }
    const yearHandler = (e) => {
        setYear(e.target.value);
    }
    const sendHandler = () => {
        getDiscoverMovies(1,point,year).then((data) => {
            console.log(data);

        }
        )
    }
    return (

        <div className='container'>
            {/*    input areas*/}
            <div className='flex flex-col items-center justify-center'>
                <input type="number" name="" id="" className='border' value={year} onChange={yearHandler}/>
                <select value={point} onChange={pointHandler}>
                    <option value="default" >please select point</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>


                </select>
            </div>
            <button onClick={sendHandler}>Send</button>

        {/*    todo add styles for ui*/}
        {/*    todo add card element*/}
        </div>
    );
}

export default ExploreMovie;