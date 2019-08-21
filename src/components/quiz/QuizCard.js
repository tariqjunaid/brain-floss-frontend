import React, { Component, Fragment } from 'react';
import { Card } from 'semantic-ui-react';
import ReactCountdownClock from 'react-countdown-clock';

class QuizCard extends Component {
   constructor(props) {
      super(props);
      this.state = {
         correct: '',
         questions: props.opt2
      }
   }

   getInput = (e) => {
     let answer = e.target.textContent
      if (this.props.opt1 === answer) {
         this.setState({ correct: "YOU GOT IT!" });
         this.props.handlePoints()
         e.target.style.background = 'green'
      } else {
         this.setState({ correct: "INCORRECT" });
         e.target.style.background = 'red'
      }
   }
 
   handleTimer = () => {
      this.props.handleQuestion()
      this.setState({ correct: "TIMES'S UP!" });
   }

   render() {
      return (
         <Fragment>
            <ReactCountdownClock seconds={15}
               color="#000"
               alpha={0.9}
               size={50}
               showMilliseconds={true}
               paused={false}
               onComplete={this.handleTimer} />
            <div className='ques-no'>
               <h3>Question: {this.props.question}</h3>
            </div>
            <div className='alert'>
               {this.state.correct}
            </div>

            <div className='quiz-card'>
               <Card>
                  <Card.Content >
                     <Card.Header>{this.props.quiz.question.replace(/&(quot|amp|shy|lt|#039);/g, "'")}</Card.Header>
                  </Card.Content>
                  <Card.Content onClick={this.props.handleQuestion}>
                     {this.state.questions.map(op =>
                        <Card onClick={this.getInput} color='yellow' key={op}>
                           {op.replace(/&(quot|amp|shy|lt|#039|rsquo|auml|ouml|Eacute|iacute);/g, "")}
                        </Card>)}
                  </Card.Content >
                     {/* <Card onClick={this.getInput} color='red'>{this.props.opt2[0].replace(/&(quot|amp|shy|lt|#039|rsquo|auml|ouml|Eacute|acute);/g, "")}</Card>
                     <Card onClick={this.getInput} color='yellow'>{this.props.opt2[1].replace(/&(quot|amp|shy|lt|#039|rsquo|auml|ouml|Eacute|acute);/g, "")}</Card>
                     <Card onClick={this.getInput} color='orange'>{this.props.opt2[2].replace(/&(quot|amp|shy|lt|#039|rsquo|auml|ouml|Eacute|acute);/g, "")}</Card>
                     <Card onClick={this.getInput} color='blue'>{this.props.opt2[3].replace(/&(quot|amp|shy|lt|#039|rsquo|auml|ouml|Eacute|acute);/g, "")}</Card> */}
               </Card>
            </div>
         </Fragment>
      )
   }
}
 
export default QuizCard;
