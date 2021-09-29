
import ActionPanel from '../components/singlePageExam/actionPanel';
import OptionPanel from '../components/singlePageExam/optionPanel';
import QuestionStatusPanel from '../components/singlePageExam/answerStatusPanel';


export default function SingleExamPage() {

    // const nextQuestion = id => {
    //     if (id == 0 && selectedQuestion > 0) {
    //         setSelectedQuestion(selectedQuestion - 1)
    //     }
    //     if (id == 1 && selectedQuestion < questionList.length - 1) {
    //         setSelectedQuestion(selectedQuestion + 1)
    //     }
    // }
    return (
        <div>
            <div className="header1">
                <h1>Practice Exam Test</h1>
            </div>
            <QuestionPanel />
            <OptionPanel />
            <ActionPanel />
            <QuestionStatusPanel/>
        </div>
    );
}