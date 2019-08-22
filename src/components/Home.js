import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';

class Home extends Component {
   handleButton = () => {
      this.props.history.push('/categories');
   }

   render() {
      return (
         <div>
            <div className='title'>Brain Floss</div>
            <Segment inverted>
               <Button onClick={this.handleButton} inverted color='teal'>
                  Browse Categories
            </Button>
            </Segment>
         </div>
      )
   }   
}

export default withRouter(Home);