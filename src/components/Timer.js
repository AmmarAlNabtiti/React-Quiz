import { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';

function Timer() {
    const { secondsRemaining, dispatch } = useQuiz();
    const mins = Math.floor(secondsRemaining / 60);
    const sec = secondsRemaining % 60;
    useEffect(() => {
        const clearId = setInterval(() => {
            dispatch({ type: 'tick' });
            console.log(secondsRemaining);

        }, 1000);

        return () => {
            clearInterval(clearId);
        };

    }, [dispatch, secondsRemaining]);

    return (
        <div className='timer'>
            {mins < 10 && '0'}{mins}:{sec < 10 && '0'}{sec}
        </div>
    );
}

export default Timer;
