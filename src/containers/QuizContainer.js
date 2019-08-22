import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Result from '../components/quiz/Result';
import QuizCard from '../components/quiz/QuizCard';

const quizAPI = 'http://localhost:3000/quizzes';

class QuizContainer extends Component {
   constructor() {
      super()
      this.state = ({
         quizArray: [],
         question: 1,
         index: 0,
         points: 0
      });
   }

   componentDidMount() {
      fetch(`https://opentdb.com/api.php?amount=5&category=${this.props.id}&difficulty=${this.props.difficulty}&type=multiple`)
         .then(response => response.json())
         .then(data => this.setState({quizArray: data.results}))
   }

   handleQuestion = () => {
      setTimeout(
         () => {
            this.setState({
               index: this.state.index + 1,
               question: this.state.question + 1
            })
      },1500)
   }

   handlePoints = () => {
      this.setState({ points: this.state.points + 10 });
   }

   handleResults = () => {
      this.props.history.push('/categories');

      fetch(quizAPI, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         },
         body: JSON.stringify({
            quiz: {
               points: this.state.points,
               difficulty: this.props.difficulty,
               player_id: this.props.user.id
            }
         })
      })
         .then(response => response.json())
         .then(data => console.log(data))
   }

   render() {
      var shuffle = require('shuffle-array')

      var quiz = this.state.quizArray
      var elements = []
      for (var i = 0; i < quiz.length; i++) {
         let opt2 = shuffle(quiz[i].incorrect_answers.concat(quiz[i].correct_answer))
         elements.push(<QuizCard
            key={quiz[i].correct_answer}
            quiz={quiz[i]}
            opt1={quiz[i].correct_answer}
            opt2= {opt2}
            handleQuestion={this.handleQuestion}
            handlePoints={this.handlePoints}
            question={this.state.question}
         />)
      }
      
      return (
         <Fragment>
            {elements[this.state.index] ? elements[this.state.index] : <Result points={this.state.points} handleResults={this.handleResults}/>}   
         </Fragment>
      )
   }
} 

export default withRouter(QuizContainer);