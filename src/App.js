
function App() {
        let greeting = "Miremberma";
        const myStyle = {
            color:'red'
        }
        const date = new Date();
        const hour = date.getHours();
        // const hour = 5; // nese dojm me ndrru oren manual
        if(hour >= 5 && hour < 10) {
            greeting = 'Mirmengjes';
            myStyle.color = 'green'
        } else if (hour >= 10 && hour < 17) {
            greeting = 'Miredita';
            myStyle.color = 'orange'
        }
    return (
        <div>
            <h1 style={myStyle}>{greeting}</h1>
            
        </div>
        
    )
}

export default App;