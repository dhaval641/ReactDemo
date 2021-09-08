import useUpdateStore from '../../store/examStore';

export default function OptionPanel() {
    const [question, selectedQuestion, answerResponse, setOptions] = useUpdateStore((state) => [state.questionslist[state.selectedQuestion],
    state.selectedQuestion,
    state.answerResponseArray[state.selectedQuestion],
    state.setOptions
    ])
    function onSelectOption(index) {
        answerResponse.response[index] = !answerResponse.response[index];
        setOptions(answerResponse, selectedQuestion)
    }
    return (
        <div>
            {
                answerResponse.response.map((option, index) => {
                    return <button style={{ backgroundColor: option ? "Green" : "White" }} onClick={() => { onSelectOption(index) }} key={index}>{question.optionList[index].label}</button>
                })
            }

        </div>
    );
}