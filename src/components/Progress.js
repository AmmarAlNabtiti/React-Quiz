import { useQuiz } from '../context/QuizContext';

function Progress() {
    const { index, numQuestions, point, pointSummation } = useQuiz();
    return (
        <header className='progress'>
            <progress max={numQuestions} value={index} />
            <p>Question <strong>{index + 1}</strong> /{numQuestions} </p>
            <p><strong>{point}</strong> / {pointSummation}</p>
        </header>
    );
}

export default Progress;
