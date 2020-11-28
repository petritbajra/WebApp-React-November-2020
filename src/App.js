import React from "react";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 10
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick({target: {name}}) {
        this.setState(prevState => {
            return {
                count: prevState.count + (name === 'decrement' ? -1 : 1)
            }
        });
    }

    render() {
        return (
            <div className="center">
                <h1>{this.state.count}</h1>
                <button name="decrement" onClick={this.handleClick }>Decrement</button>
                <button mame="increment" onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}

export default App;