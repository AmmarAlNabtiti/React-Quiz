import { useQuiz } from '../context/QuizContext';
import Question from './Question';
function Questions() {
    const { questions, index } = useQuiz();


    let question = questions.questions[index];
    return (
        <div>
            <h4>{question.question}</h4>
            <div className='options'>
                <Question />
            </div>
        </div>
    );
}

export default Questions;
