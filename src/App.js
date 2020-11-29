import React from "react";
import axios from "axios";
class App extends React.Component {
  constructor() {
     super(); 
     this.state = {
       users: [],
       isLoading: true,
       form: {
         name: '',
         email: '',
         phone: '',
         website: ''
       }
     }
     this.handleChange = this.handleChange.bind(this);
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


    handleChange(event) {
      const name = event.target.name;
          this.setState({
              form: {
                ...this.state.form,
                [name]: event.target.value
              }
          });
    }



    render() { 
      if (this.state.isLoading) {
        return <h1>Loading...</h1>
      }

      const users = this.state.users.map((e, i) => {
        return (<tr key={i}>
                <td>{e.name}</td>
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
                        value={this.state.form.name}
                        onChange={this.handleChange}
                        />
                  </div>

                  <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={this.state.form.email}
                        onChange={this.handleChange}
                        />
                  </div>

                  <div>
                    <label htmlFor="phone">Phone: </label>
                    <input
                        type="text"
                        id="phone"  
                        name="phone"
                        value={this.state.form.phone}
                        onChange={this.handleChange}
                        />
                  </div>

                  <div>
                    <label htmlFor="website">Website: </label>
                    <input
                        type="text"
                        id="website"
                        name="website"
                        value={this.state.form.website}
                        onChange={this.handleChange}
                        />
                  </div>
                  <button type="submit">Submit</button>
              </form>
            <h2>List of Users</h2>
            <table>
              <thead>
                  <tr>
                    <th>Name</th>
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