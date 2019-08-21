import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from 'semantic-ui-react';

class Nav extends Component {
   state = { activeItem: 'home' }

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
   
   render() {
      const { activeItem } = this.state

      let { location: { pathname } } = this.props
      let logged_in = this.props.logged_in;
      let logout = () => {
         localStorage.removeItem("jwt")
         this.props.updateCurrentUser(null)
      }

      return (
         <Menu inverted>
            <Menu.Item
               as={NavLink}
               to='/'
               name='home'
               active={activeItem === 'home'}
               onClick={this.handleItemClick}
            />
            <Menu.Item
               as={NavLink}
               to='/categories'
               name='categories'
               active={activeItem === 'categories'}
               onClick={this.handleItemClick}
            />
            <Menu.Item
               as={NavLink}
               to='/about'
               name='about'
               active={activeItem === 'about'}
               onClick={this.handleItemClick}
            />
            <Menu.Item
               as={NavLink}
               to='/contact'
               name='contact'
               active={activeItem === 'contact'}
               onClick={this.handleItemClick}
            />
            {logged_in ? (
            <Fragment>
               <Menu.Item
                  as={NavLink}
                  to="/profile"
                  name="Profile"
                  active={pathname === "/profile"}
               />
                  <Menu.Menu position="right">
                  <Menu.Item to="/logout" name="Logout" onClick={logout} />
                  <Menu.Item name={this.props.logged_in.username} />
               </Menu.Menu>
            </Fragment>
         ) : (
               <Menu.Item
                  as={NavLink}
                  to="/login"
                  name="Login"
                  active={pathname === "/login"}
               />
         )}
         </Menu>
      )
   }
}

export default withRouter(Nav);
