import React from 'react';

class UserForm extends React.Component {

    render() {
        return(
            <form onSubmit={this.props.handleSubmit}>
                <h2>Create new user</h2>
                  <div>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={this.props.form.name}
                        onChange={this.props.handleChange}
                        placeholder="John Smith"
                        required
                        />
                  </div>

                  <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={this.props.form.email}
                        onChange={this.props.handleChange}
                        placeholder="john.smith@gmail.com"
                        required
                        />
                  </div>

                  <div>
                    <label htmlFor="phone">Phone: </label>
                    <input
                        type="text"
                        id="phone"  
                        name="phone"
                        value={this.props.form.phone}
                        onChange={this.props.handleChange}
                        placeholder="1-463-123"
                        required
                        />
                  </div>

                  <div>
                    <label htmlFor="website">Website: </label>
                    <input
                        type="text"
                        id="website"
                        name="website"
                        value={this.props.form.website}
                        onChange={this.props.handleChange}
                        placeholder="www.google.com"
                        required
                        />
                  </div>
                  <button type="submit">Submit</button>
              </form>
        );

    }
}

export default UserForm;