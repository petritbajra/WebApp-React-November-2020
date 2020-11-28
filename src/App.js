import React from "react";
import EmployeeList from "./components/EmployeeList";

// function App() {
    // return (
    //     <div>
    //         <h1>HR App</h1>
    //         <hr />
    //         <EmployeeList />
    //     </div>
    // )
// }

class App extends React.Component {
    render() {
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