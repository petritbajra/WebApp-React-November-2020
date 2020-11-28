import React from 'react'

class ChildComponent extends React.Component {
    componentDidMount() {
        console.log('Child component mounted');
    }

    componentWillUnmount() {
        console.log('Child componemt unmounted');
    }

    render() {
        return <h1>I'm a child component</h1>
    }
}


export default ChildComponent;