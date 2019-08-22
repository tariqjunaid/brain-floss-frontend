import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import { Button, Form, Segment, Message } from "semantic-ui-react";

class Signup extends React.Component {
   state = {
      username: "",
      password: "",
      email: ""
   };

   handleChange = (e, { name, value }) => {
      this.setState({ [name]: value });
   };

   handleSigninSubmit = () => {
      fetch('http://localhost:3000/players', {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
         })
      }).then(res => res.json())
         .then(data => {
            if (data.authenticated) {
               this.props.updateCurrentUser(data.player)
               localStorage.setItem("jwt", data.token)
            } else {
               alert("Please enter a unique username!")
            }
         })
   };

   render() {
      return (
         <div>
            <h1>Signup!</h1>
            <div className='signup-form'>
            <Segment>
               <Form
                  onSubmit={this.handleSigninSubmit}
                  size="mini"
                  key="mini"
                  loading={this.props.authenticatingUser}
                  error={this.props.failedLogin}
               >
                  <Message
                     error
                     header={this.props.failedLogin ? this.props.error : null}
                  />
                  <Form.Group widths="equal">
                     <Form.Input
                        label="Username"
                        placeholder="username"
                        name="username"
                        onChange={this.handleChange}
                        value={this.state.username}
                     />
                     <Form.Input
                        type="email"
                        label="Email"
                        placeholder="email (optional)"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                     />
                     <Form.Input
                        type="password"
                        label="Password"
                        placeholder="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                     />
                  </Form.Group>
                  <Button.Group>
                     <Button color='green' type="submit">Signup</Button>
                     <Button.Or />
                     <Button color='red' as={NavLink} to='/login'>Login</Button>
                  </Button.Group>
               </Form>
            </Segment>
            </div>
         </div>
      );
   }
}

export default withRouter(Signup);