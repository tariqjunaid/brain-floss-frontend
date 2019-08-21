import React from 'react';
import { Card, Image, Header } from "semantic-ui-react";


const ProfileCard = (props) => {
   return props.user ? (
      
      <div>
         <Image src={props.user.cover} size='large' centered />
         <Header as='h1'>
            <Image circular src={props.user.avatar} /> {props.user.first_name} {props.user.last_name}
         </Header>
         <Card>
            <Card.Content>
               <Card.Header>{props.user.username}</Card.Header>
               <Card.Description>{props.user.bio}</Card.Description>
            </Card.Content>
         </Card>
      </div>
   ) : null
}

export default ProfileCard;