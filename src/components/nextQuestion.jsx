export default function NextQuestion(props){
    return(
        <div>
            <button onClick={()=>{props.onChange(0)}}>Previous</button>
            <button onClick={()=>{props.onChange(1)}}>Next</button>
        </div>
    );
}