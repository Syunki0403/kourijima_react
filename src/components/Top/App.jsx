import React from 'react';
import Navigation from './Navigation';
import Sns from './Sns';

const App = () => {
    return (
        <div>
            <ul className={"topImageBox"}>
                <li className={"topImage src1"}></li>
                <li className={"topImage src2"}></li>
                <li className={"topImage src3"}></li>
            </ul>
            <Navigation />
            <Sns />
        </div>
    )
}

export default App;