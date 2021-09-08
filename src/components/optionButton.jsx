import React from "react";

export default function OptionButton(props){
    return(
        <div>
            <button style={{backgroundColor: props.status ? "Green":"White"}} onClick={()=>{props.onChange(props.id)}}>{props.name}</button>
        </div>
    );
}