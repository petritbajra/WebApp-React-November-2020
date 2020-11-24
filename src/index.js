import React from 'react';
import ReactDom from 'react-dom';

//Functional component
function MyList() {
    return (
        <div>
            <h2>Top Front-End frameworks</h2>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
            </ul>
        </div>

    )
}

function MyExercise() {
    return (
        <div>
            <h1>Petrit Bajra</h1>
            <h3>Istog</h3>
            <ul>
                <li>JavaScript</li>
                <li>Vue</li>
                <li>React</li>
            </ul>
        </div>
    )
}


ReactDom.render(< MyExercise/>,document.getElementById("root"));
