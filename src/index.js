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


ReactDom.render(< MyList/>,document.getElementById("root"));