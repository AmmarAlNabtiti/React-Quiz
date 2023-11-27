import { useQuiz } from '../context/QuizContext';

function StartScreen() {
    const { numQuestions, dispatch } = useQuiz();
    return (
        <div className='start'>
            <h2>Welcome to react quiz</h2>
            <h3>{numQuestions} questions to test your react master</h3>
            <button onClick={() => dispatch({ type: 'startQuiz' })} className='btn btn-ui'>Let's start</button>
        </div>
    );
}

export default StartScreen;
