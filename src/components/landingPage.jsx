
import AnswerOptions from './answerOptions';
import QuestionDetails from './questionDetails';


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