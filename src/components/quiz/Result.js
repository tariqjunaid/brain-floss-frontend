import React, { Component, Fragment } from 'react';
import { Button } from 'semantic-ui-react'

class Result extends Component {

   render() {
      return (
         <Fragment>
            <div className='result-container'>
               You have got: <strong>{this.props.points}</strong> points
            </div>
            <Button onClick={this.props.handleResults} basic color='green'>Click to Save!</Button>
         </Fragment>
      )
   }
}

export default Result;