import React from "react";
import EmployeeList from "./components/EmployeeList";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false
        };
        this.handelClick = this.handelClick.bind(this);
    }

    handelClick() {
        this.setState(prevState => {
            return {
                loggedIn: !prevState.loggedIn
            }
        });
    }

    render() {
        console.log(this.state.loggedIn);
        // console.log(this.state.firstName);
        // console.log(this.returnRandomStuff());
      return (
            <div>
                <h1>
                    {this.state.loggedIn ? 'User is logged in.' : 'User is logged out'}
                </h1>
               <button
                    onClick={this.handelClick}
                    // onMouseOver={() => {
                    //     console.log('Mouse over');
                    // }}
               >
                   Press Me
               </button>
            </div>
        )
    }
}

export default App;