export default function QuestionOptions(props) {
    const { question } = props

    return (
        <div>
            <div className="header3">
                    {
                    question.optionList.map((option, index) => {
                    return <label key={index}>{option.label + ") " + option.discription}</label>
                })
                }
            </div>
        </div>
    );

}