import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            incorrectAnswer: false
        }
    }

    handleClick(buttonText) {
        if (buttonText !== this.props.quiz_question.answer)
            return this.changeAnswerToIncorrect(true);

        this.changeAnswerToIncorrect(false);
        return this.props.showNextQuestionHandler();
    }

    changeAnswerToIncorrect(isIncorrectAnswer) {
        this.setState({
            incorrectAnswer: isIncorrectAnswer
        });
    }

    showErrorIfIncorrect() {
        return this.state.incorrectAnswer ? <p className="error">Sorry, that's not right</p> : null;
    }

    getQuizQuestionAnswers() {
        return this.props.quiz_question.answer_options.map(
            (answer_option, index) =>
                (
                    <QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={`${index}`} button_text={answer_option} />
                )
        )
    }

    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.getQuizQuestionAnswers()}
                    </ul>
                </section>
                {this.showErrorIfIncorrect()}
            </main>
        )
    }

}

export default QuizQuestion