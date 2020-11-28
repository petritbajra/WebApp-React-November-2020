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
                <h1>HR App</h1>
                <hr />
                <EmployeeList />
            </div>
        )
    }
}

export default App;