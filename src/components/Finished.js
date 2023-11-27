import { useQuiz } from '../context/QuizContext';

function Finished() {
    const { point, pointSummation, highscore, dispatch } = useQuiz();
    return (
        <>
            <p className='result'>
                You scored <strong>{point}</strong> out of {pointSummation}
                ({Math.ceil((point / pointSummation) * 100)}%)
            </p>
            <p className='highscore'>
                highest score is {highscore} point
            </p>
            <button onClick={() => dispatch({ type: 'restart' })} className='btn btn-ui'>Restart</button>
        </>
    );
}

export default Finished;
