import useUpdateStore from '../store/questionStore';
import NextQuestion from './nextQuestion';

export default function QuestionDetails(){
    const [questionList, selectedQuestion, setSelectedQuestion] = useUpdateStore((state)=> [state.questionslist, state.selectedQuestion, state.setSelectedQuestion])
    const currentQuestion = questionList[selectedQuestion]

    const nextQuestion = id =>{
        if(id == 0 && selectedQuestion > 0){
            setSelectedQuestion(selectedQuestion-1)
        }
        if(id == 1 && selectedQuestion < questionList.length - 1){
            setSelectedQuestion(selectedQuestion+1)
        }
    }

    return (
        <div>
            <div className="header2">
                <label>{"Question"+(selectedQuestion+1)} </label>
                <label > {""+currentQuestion}</label>
            </div>
            <NextQuestion onChange={nextQuestion}/>
        </div>
    );
}