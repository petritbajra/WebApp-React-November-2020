
function App() {
    const myStyle = {
        color:"orange",
        backgroundColor: "red",
        fontSize: "25px" // nese e vendosim veq 25 apet e mer px
    }
    return (
        <div>
        <div style={myStyle}>
            <h1>Hello</h1>
        </div>
        <div style={myStyle}>
                <h1>Hello</h1>
        </div>
        </div>
        
    )
}

export default App;