import useUpdateStore from '../../store/examStore';
import QuestionOptions from './questionOptions';

export default function QuestionPanel() {
    const [question, selectedQuestion] = useUpdateStore((state) => [state.questionslist[state.selectedQuestion], state.selectedQuestion])

    return (
        <div>
            <div>
                <div className="header2">
                    <label>{"Question" + (question.number)} </label>
                </div>
                <label> {question.discription}</label>
                <QuestionOptions question={question}/>
            </div>
        </div>
    );
}