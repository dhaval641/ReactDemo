import create from "zustand";

const questionslist = [
    "this is question 1", 
    "this is question 2",
    "this is question 3",
    "this is question 4"
]
export default create((set)=>({
    optionsArray : [[false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]],
    selectedQuestion : 0,
    questionslist,

    
    setOptions : (options,questionId)=>
     set((state) => {
        const currentStatus = state.optionsArray;
        currentStatus[questionId] = options;
        return{optionsArray:currentStatus}
     }),

     setSelectedQuestion : (questionId)=>
      set(() => {
        return{selectedQuestion: questionId}
      })

}));