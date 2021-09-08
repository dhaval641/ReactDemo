import useUpdateStore from '../../store/examStore';

export default function ActionPanel(){
    const [totalQuestions, selectedQuestion, setSelectedQuestion, setResponseStatusForReview, setResponseStatus] = useUpdateStore((state) => [state.questionslist.length, 
        state.selectedQuestion, 
        state.setSelectedQuestion,
        state.setResponseStatusForReview,
        state.setResponseStatus,
    ])
    function NextQuestion(){
        if(selectedQuestion < totalQuestions-1 ){
            setSelectedQuestion(selectedQuestion+1);
        }
    }
    function PreviousQuestion(){
        if(selectedQuestion > 0 ){
            setSelectedQuestion(selectedQuestion-1);
        }
    }

    return(
        <div>
            <button onClick={PreviousQuestion}>Previous</button>
            <button onClick={setResponseStatus}>Save</button>
            <button onClick={setResponseStatusForReview}>Mark For Reference</button>
            <button onClick={NextQuestion}>Next</button>
        </div>
    );
}