import React from "react";
import { withRouter, NavLink } from 'react-router-dom';
import { Button, Form, Segment, Message } from "semantic-ui-react";

class Login extends React.Component {
   state = {
      username: "",
      password: ""
   };

   handleChange = (e, { name, value }) => {
      this.setState({ [name]: value });
   };

   handleLoginSubmit = () => {
      fetch('http://localhost:3000/login', {
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
               alert("incorrect username or password")
            }
         })
   };

   render() {
      return (
         <div>
            <h1>Login!</h1>
         <Segment>
               <Form
                  onSubmit={this.handleLoginSubmit}
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
                        type="password"
                        label="Password"
                        placeholder="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                     />
                  </Form.Group>
                  <Button.Group>
                     <Button color='green' type="submit">Login</Button>
                     <Button.Or />
                     <Button color='red' as={NavLink} to='/signup'>Signup</Button>
                  </Button.Group>
               </Form>
            </Segment>
         </div>
      );
   }
}

export default withRouter(Login);