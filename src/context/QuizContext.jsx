import { createContext, useContext, useReducer } from 'react';
import questions from '../data/questions.json';

const quizContext = createContext();
const initialState = { secondsRemaining: null, highscore: 0, point: 0, answer: null, index: 0, questions, status: 'ready' };
function reducer(state, action) {
    switch (action.type) {
        case 'startQuiz':
            return {
                ...state, status: 'active',
                secondsRemaining: state.questions.questions.length * 30

            };

        case 'newAnswer':
            const question = state.questions.questions.at(state.index);
            return {
                ...state,
                point: action.payload === question.correctOption ? state.point + question.points : state.point,
                answer: action.payload,
            };

        case 'nextQuestion':
            return { ...state, index: state.index + 1, answer: null };
        case 'finish':
            const higher = state.point > state.highscore ? state.point : state.highscore;
            return {
                ...state, status: 'finished', highscore: higher
            };
        case 'restart':
            return { ...state, status: 'active', index: 0, answer: null, point: 0 };
        case 'tick':
            return {
                ...state,
                status: state.secondsRemaining === 0 ? 'finish' : state.status,
                secondsRemaining: state.secondsRemaining - 1
            };
        default:
            throw new Error('unknown action');
    }
}



function QuizProvider({ children }) {
    const [{ secondsRemaining, highscore, point, answer, questions, index, status }, dispatch] = useReducer(reducer, initialState);
    const numQuestions = questions.questions.length;
    const pointSummation = questions.questions.map((question) => question.points).reduce((acc, curr) => acc + curr);
    return (
        <quizContext.Provider value={{
            secondsRemaining,
            highscore,
            point,
            answer,
            questions,
            index,
            status,
            numQuestions,
            pointSummation,
            dispatch
        }}>
            {children}
        </quizContext.Provider>
    );
};


function useQuiz() {
    const context = useContext(quizContext);
    return context;
}

export { useQuiz, QuizProvider };