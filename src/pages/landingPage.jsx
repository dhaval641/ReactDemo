
import AnswerOptions from '../components/answerOptions';
import QuestionDetails from '../components/questionDetails';


export default function LandingPage(){
    
    return (
        <div>
            <div className="header1">
                <h1>Hello world</h1>
                <QuestionDetails/>
                
            </div>
            <AnswerOptions/>
        </div>
    );
}