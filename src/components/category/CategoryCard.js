import React, { Component, Fragment } from 'react';
import { Card, Button } from 'semantic-ui-react';
import ReactCardFlip from 'react-card-flip';
import { withRouter } from 'react-router-dom';

class CategoryCard extends Component {
   constructor() {
      super();
      this.state = {
         startGame: false,
         isFlipped: false,
         flipSpeedBackToFront: 0.8,
         flipSpeedFrontToBack: 0.8,
      };
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
   }

   onStartQuiz = () => {
      this.setState({ startGame: !this.state.startGame });
   }

   handleLink = () => {
      this.props.history.push('/quiz');
   }
   
   render() { 
      return (
         <Fragment>
            <ReactCardFlip style={this.state.containerStyle} isFlipped={this.state.isFlipped} flipDirection='vertical' infinite={this.state.infinite} flipSpeedBackToFront={this.state.flipSpeedBackToFront} flipSpeedFrontToBack={this.state.flipSpeedFrontToBack}>
               <Card key='front' onMouseOver={this.handleClick} onClick={()=>{this.props.getId(this.props.id)}}>
                  <Card.Content>
                     <Card.Header>{this.props.category.replace(/Entertainment: |Science: /g, "")}</Card.Header>
                  </Card.Content>
               </Card>
               <Card key='back' onMouseLeave={this.handleClick} onClick={()=>{this.props.getId(this.props.id)}}>
                  <Card.Content>
                     <Card.Meta>Choose Difficulty</Card.Meta>
                     <Card.Description >
                        <select onChange={this.props.getDiff}>
                           <option value="0">Random</option>
                           <option value="easy">Easy</option>
                           <option value="medium">Medium</option>
                           <option value="hard">Hard</option>
                        </select>
                     </Card.Description>
                  </Card.Content>
                  <Button onClick={this.handleLink}>START</Button>
               </Card>
            </ReactCardFlip>
         </Fragment>
      )
   }
}
 
export default withRouter(CategoryCard);
