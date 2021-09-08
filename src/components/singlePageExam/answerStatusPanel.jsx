import { answerStatus } from '../../constants/answerStatus';
import useUpdateStore from '../../store/examStore';

export default function AnswerStatusPanel(){
    const [answerResponseArray, selectedQuestion, setSelectedQuestion] = useUpdateStore((state) => [
        state.answerResponseArray,
        state.selectedQuestion,
        state.setSelectedQuestion,
    ])

    function getStatusColor(status){
        switch(status){
            case answerStatus.attempted : 
                return "Green"
            case answerStatus.notAttempted :
                return "White"
            case answerStatus.markedForReview_Attempted :
                return "Orange"
            case answerStatus.markedForReview_UnAttempted :
                return "Yellow"
            
        }

    }
    function onSelectedQuestion(id){
        setSelectedQuestion(id)
    }
    return(
        <div>
            {
                answerResponseArray.map((answerResponse, index)=>{
                    return <button style={{backgroundColor : getStatusColor(answerResponse.status)}} key={index} onClick={()=>{onSelectedQuestion(index)}}>{"Q" + answerResponse.id}</button>
                })
            }
        </div>
    )
}