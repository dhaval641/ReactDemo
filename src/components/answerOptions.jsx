import React from 'react';
import OptionButton from './optionButton';
import useUpdateStore from '../store/questionStore';


export default function AnswerOptions() {
    const [options, selectedQuestion, setOptions] = useUpdateStore((state)=> [state.optionsArray, state.selectedQuestion, state.setOptions])
    const currentStatus = options[selectedQuestion];
    const ChangeColor = (id) => {   
        currentStatus[id] = !currentStatus[id];
        setOptions(currentStatus, selectedQuestion)
    }
    return (
        <div>
            <div className="header3">
                <OptionButton status={currentStatus[0]} onChange={ChangeColor} id={0} name={"Blue"} />
                <OptionButton status={currentStatus[1]} onChange={ChangeColor} id={1} name={"Red"} />
                <OptionButton status={currentStatus[2]} onChange={ChangeColor} id={2} name={"Orange"} />
            </div>
        </div>
    );

}
