const saySomething = name => `Welcome to my page, ${name}`
function App() {
        const firstName = 'John'
        const lastName = 'Smith'
        const date = new Date()

    return (
        <div>
           <h1>Hi {`${firstName} ${lastName}`} {2 + 2} {date.getHours()}</h1>
           <h2>{saySomething(firstName)}</h2>
           <h2>{3 + 3}</h2>
        </div>
    )
}

export default App;