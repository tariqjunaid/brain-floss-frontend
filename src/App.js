import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Nav from './components/Nav';
import { About } from './components/About';
import { Contact } from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import CategoryContainer from './containers/CategoryContainer';
import { NotFound } from './components/NotFound';
import { Home } from './components/Home';
import Profile from './containers/Profile'
import QuizContainer from './containers/QuizContainer';

const URI = 'http://localhost:3000/profile';


class App extends Component {
   state = {
      user: null,
      selectedCategory: null,
      difficulty: 0
   }

   updateCurrentUser = (user) => {
      this.setState({ user: user })
   }

   componentDidMount() {
      let token = localStorage.getItem("jwt")
      if (token) {
         fetch(URI, {
            headers: { "Authentication": `Bearer ${token}` }
         })
         .then(res => res.json())
         .then(user => this.updateCurrentUser(user))
      }  
   }

   getDiff = (e) => {
      let difficulty = e.target.value
      this.setState({ difficulty });
   }

   getId = (id) => {
      this.setState({ selectedCategory: id })
   }

   render() { 
      return (
         <div className="App">
         <Fragment>
            <Nav logged_in={this.state.user} updateCurrentUser={this.updateCurrentUser} />
            <Switch>
               <Route exact path='/' component={Home}/>
               <Route exact path='/profile' render={ () => {
                  return (this.state.user ? <Profile user={this.state.user}/> : <Redirect to='/login'/>)}
               } />
               <Route exact path='/login' render={() => {
                  return (this.state.user ? <Redirect to='/' /> : <Login updateCurrentUser={this.updateCurrentUser}/>)}
               } />
               <Route exact path='/signup' render={() => {
                  return (this.state.user ? <Redirect to='/profile' /> : <Signup updateCurrentUser={this.updateCurrentUser} />)}
               } />
               <Route path='/categories' render={() => {
                     return <CategoryContainer user={this.state.user} getId={this.getId} getDiff={this.getDiff} />
               }
                  } />
               <Route exact path='/quiz' render={() => {
                     return (this.state.user ? <QuizContainer user={this.state.user} id={this.state.selectedCategory} difficulty={this.state.difficulty} /> : <Redirect to='/login' />)
               }} />
               <Route path='/about' component={About}/>
               <Route path='/contact' component={Contact}/>
               <Route component={NotFound}/>
            </Switch>
            </Fragment>
         </div>
      )
   }
}
 
export default withRouter(App);