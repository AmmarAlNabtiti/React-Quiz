import React from 'react';
import { useQuiz } from '../context/QuizContext';
import Questions from './Questions';

function Question() {
    const { dispatch, answer, index, questions } = useQuiz();
    const isAnswered = answer !== null;
    let question = questions.questions[index];

    return (
        <>
            {
                question?.options.map((option, i) => {
                    return (
                        <button
                            onClick={() => dispatch({ type: 'newAnswer', payload: i })} key={option} className={` 
                    btn btn-option 
                    ${(question.correctOption === i && isAnswered) && 'correct'}
                    ${(question.correctOption !== i && isAnswered) && 'wrong'}
                    ${i === answer ? 'answer' : ''}`}
                            disabled={isAnswered ? true : false}
                        >
                            {option}
                        </button >);
                })
            }
        </>
    );
}

export default Question;
