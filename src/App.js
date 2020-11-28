import React from "react";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
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
                ]
            });
            
        }, 2000);
    }

    render() {
    const lis = this.state.users.map((e, i) => <li key={i}>{e}</li>);

        if (!this.state.users.length) {
            return <h3>Loading...</h3>
        }

        return (
            <div>

                List of users
                <ul>
                    {lis}
                </ul>
            </div>
        )
    }
}

export default App;