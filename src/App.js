import React from "react";
import EmployeeList from "./components/EmployeeList";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "Something else"
        };
    }

    returnRandomStuff() {
        return 2 * 25;
        }

    render() {
        console.log(this.state.firstName);
        console.log(this.returnRandomStuff());
      return (
            <div>
               <button
                    onClick={() =>{
                        console.log('Hello');
                    }}
                    onMouseOver={() => {
                        console.log('Mouse over');
                    }}
               >
                   Press Me
               </button>
            </div>
        )
    }
}

export default App;