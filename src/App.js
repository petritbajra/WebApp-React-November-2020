import React from "react";
import axios from "axios";
class App extends React.Component {
  constructor() {
     super(); 
     this.state = {
       users: [],
       isLoading: true,
       form: {
         name: 'Default'
       }
     }
  }


    componentDidMount() {
      /// API CALL
      axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
          this.setState({
            users: res.data,
            isLoading: false
          });
      })

      .catch(e => {
        this.setState({
            isLoading: false
        });
        alert('Could not fetch users.');
      });
    }
    render() { 
      if (this.state.isLoading) {
        return <h1>Loading...</h1>
      }

      const users = this.state.users.map((e, i) => {
        return (<tr key={i}>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.website}</td>
              </tr>)
      })



        return (
          <div>
              <form>
                <h2>Create new user</h2>
                  <div>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        // value={this.state.form.name}
                        onChange={event => {
                          this.setState({
                            form:{
                              name: event.target.value
                            }
                          });
                        }}
                        
                        />
                  </div>
              </form>
            <h2>List of Users</h2>
            <table>
              <thead>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                  </tr>
              </thead>
              <tbody>
                {users}
              </tbody>
            </table>
          </div>


      );
    }
  }

export default App;