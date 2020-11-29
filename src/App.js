import React from "react";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            isLoading: true
        }
    }

    componentDidMount () {
        setTimeout(() => {
            this.setState({
                users: [
                    'John',
                    'Matthew',
                    'Angela',
                    'Lisa',
                    'Bob'
                ],
                isLoading: false
            });
            
        }, 2000);
    }

    render() {
        return (
            <div>
                {!this.state.isLoading ? (
                    <div>
                        List of users
                        <ul>
                        {this.state.users.map((e, i) => <li key={i}>{e}</li>)}
                        </ul>
                    </div>
                ) : <h3>Loading...</h3> }
            </div>
        )
    }
}

export default App;