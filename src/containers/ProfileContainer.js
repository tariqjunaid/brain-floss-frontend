import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../components/profile/Card';
import Form from '../components/profile/Form';

class ProfileContainer extends Component {
   getInput = (e) => {
      console.log(e.target.value);
   }

   // componentDidMount() {
   //    fetch(`http://localhost:3000/players/${this.props.user.id}`, {
   //       method: 'PATCH',
   //       headers: {
   //          'Content-Type': 'application/json',
   //          'Accept': 'application/json'
   //       },
   //       body: JSON.stringify({
   //          quiz: {
   //             points: this.state.points,
   //             difficulty: this.props.difficulty,
   //             player_id: this.props.user.id
   //          }
   //       })
   //    })
   //       .then(response => response.json())
   //       .then(data => console.log(data))   
   // }

   render() {
      return (
         <div>
            <Card user={this.props.user} />
            <Form user={this.props.user} getInput={this.getInput}/>
         </div>
      )
   }
}

export default withRouter(ProfileContainer);