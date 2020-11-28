import Employee from "./components/Employee";
import Employee2 from "./components/Employee2";
import Employee3 from "./components/Employee3";

function App() {
        return (
            <div>
                <h1>HR App</h1>
                <hr />
                <Employee 
                    profileUrl="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
                    firstName="Maria"
                    lastName="Smith"
                    title="Manager"
                    phoneNumber="+1 123 123 1234"
                    address="New York, NY"
                 /> 
            </div>
        )
}

export default App;