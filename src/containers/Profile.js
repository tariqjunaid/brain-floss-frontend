import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../components/profile/Card';
import Form from '../components/profile/Form';

const Profile = (props) => {
   return (
      <div>
         <Card user={props.user} />
         <Form user={props.user}/>
      </div>
   )
}

export default withRouter(Profile);