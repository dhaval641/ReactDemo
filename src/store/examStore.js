import create from "zustand";
import { answerStatus } from "../constants/answerStatus";


function generateQuestionList(numberOfQuestions) {
    return Array(numberOfQuestions).fill(0).map((_, index) => {
        return {
            "number": index + 1,
            "discription": "this is dummy question " + (index + 1) + " for practice exam, this does not have any correct answer.",
            "optionList": generateOptionList(3 + index % 3),
        }
    })
}
function generateOptionList(numberOfOptions) {
    var optionList = []
    var labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
    for (let index = 0; index < numberOfOptions; index++) {
        optionList.push({
            "discription": "Option " + (index + 1),
            "label": labels[index],
        })
    }
    return optionList;
}
function generateOptionArray(questionslist) {
    return questionslist.map((question) => {
        return {
            response: question.optionList.map(() => false),
            status: answerStatus.notAttempted,
            id: question.number,

        }
    })
}
const questionslist = generateQuestionList(200);
export default create((set) => ({
    selectedQuestion: 0,
    questionslist,
    answerResponseArray: generateOptionArray(questionslist),

    setOptions: (options, questionId) =>
        set((state) => {
            const currentStatus = state.answerResponseArray;
            currentStatus[questionId] = options;
            return { answerResponseArray: currentStatus }
        }),

    setSelectedQuestion: (questionId) =>
        set(() => {
            return { selectedQuestion: questionId }
        }),

    setResponseStatus: () =>
        set((state) => {
            const currentResponses = state.answerResponseArray;
            const questionId = state.selectedQuestion;
            const attempted = currentResponses[questionId].response.reduce((acc, isSelected)=>{
                return acc || isSelected
            }, false)
            currentResponses[questionId].status = attempted ? answerStatus.attempted : answerStatus.notAttempted
            return { answerResponseArray: currentResponses }
        }),

    setResponseStatusForReview: () =>
    set((state) => {
        const currentResponses = state.answerResponseArray;
        const questionId = state.selectedQuestion;
        const attempted = currentResponses[questionId].response.reduce((acc, isSelected)=>{
            return acc || isSelected
        }, false)
        currentResponses[questionId].status = attempted ? answerStatus.markedForReview_Attempted : answerStatus.markedForReview_UnAttempted
        return { answerResponseArray: currentResponses }
    }),


}));