import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';

let quizData = require('./quiz_data.json');

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1
        };
    }

    showNextQuestion() {
        this.setState({
            quiz_position: this.state.quiz_position + 1
        })
    }

    render() {
        const isQuizEnd = (this.state.quiz_position - 1) === quizData.quiz_questions.length;
        let quizQuestion = quizData.quiz_questions[this.state.quiz_position - 1];

        return (
            <div>
                <div className="QuizQuestion">
                    {
                        isQuizEnd ? <QuizEnd /> :
                            <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={quizQuestion} />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz