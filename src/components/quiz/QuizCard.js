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
      e.target.parentElement.classList.add("disabledbutton")
      let answer = e.target.textContent
      if (this.props.opt1 === answer) {
         this.setState({ correct: "YOU GOT IT!" });
         this.props.handlePoints()
         e.target.style.background = 'green'
      } else {
         this.setState({ correct: "INCORRECT" });
         e.target.style.background = 'red'
         let options = Array.from(e.target.parentElement.children)
   
         options.forEach(option => {
            if (option.id === this.props.opt1) {
               option.style.background = 'green'
            }
         })
      }
   }
 
   handleTimer = () => {
      this.props.handleQuestion()
      this.setState({ correct: "TIMES'S UP!" });
   }

   render() {
      return (
         <Fragment>
            <ReactCountdownClock className='react-countdown-clock'
               seconds={20}
               color="#FFA500"
               alpha={0.9}
               size={70}
               showMilliseconds={true}
               paused={false}
               onComplete={this.handleTimer} />
            
            <div className='ques-no'>
               Question: {this.props.question}
            </div>
            
            <div className='quiz-card'>
               <Card>
                  <Card.Content >
                     <Card.Header>{this.props.quiz.question.replace(/&(quot|amp|shy|lt|#039|Uuml);/g, "")}</Card.Header>
                  </Card.Content>
                  <Card.Content onClick={this.props.handleQuestion}>
                     {this.state.questions.map(op =>
                        <Card onClick={this.getInput} color='yellow' key={op} id={op} >
                           {op.replace(/&(quot|amp|shy|lt|#039|rsquo|auml|ouml|Eacute|iacute|oacute);/g, "")}
                        </Card>)}
                  </Card.Content>
               </Card>
            </div>

            <div className='alert'>
               {this.state.correct ? this.state.correct === "YOU GOT IT!" ? (
                  <h3 className='correct'>{this.state.correct}</h3>
               ) : <h3 className='incorrect'>{this.state.correct}</h3>
                  : null
               }
            </div>
         </Fragment>
      )
   }
}
 
export default QuizCard;
