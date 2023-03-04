import React from 'react';
import {signOut} from "../firebase/index.js";

function Home(props) {
    return (
        <div>
            <button onClick={signOut}>Sign out</button>
        </div>
    );
}

export default Home;