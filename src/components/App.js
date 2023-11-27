import '../index.css';
import StartScreen from './StartScreen';
import Header from './Header';
import Main from './Main';
import Error from './Error';
import Loader from './Loader';
import Questions from './Questions';
import NextButton from './NextButton';
import Progress from './Progress';
import Finished from './Finished';
import Timer from './Timer';
import Footer from './Footer';
import { useQuiz } from '../context/QuizContext';







function App() {
  const { status, numQuestions, dispatch } = useQuiz();
  return (
    <div className="app">
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen dispatch={dispatch} numQuestions={numQuestions} />}
        {status === 'active' &&
          <>
            <Progress />
            <Questions />

            <Footer>
              <Timer />
              <NextButton />
            </Footer>

          </>
        }
        {
          status === 'finished' && <Finished />
        }
      </Main>

    </div>
  );
};

export default App;
