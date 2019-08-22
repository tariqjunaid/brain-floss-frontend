import React, { Component, Fragment } from 'react';
import { Button, Segment } from 'semantic-ui-react'

class Result extends Component {

   render() {
      return (
         <Fragment>
            <div className='result-container'>
               You have got: <strong>{this.props.points}</strong> points
            </div>
            <Segment inverted>
               <Button onClick={this.props.handleResults} inverted color='teal'>Click to Save!</Button>
            </Segment>
            {/* <Button onClick={this.props.handleResults} basic color='green'>Click to Save!</Button> */}
         </Fragment>
      )
   }
}

export default Result;