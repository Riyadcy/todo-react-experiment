function Plan(props){
    return<>
    <li className="shadow p-2 my-2 col-sm-9">{props.value}</li> 
    <button className="btn btn-danger my-2 col-sm-1 offset-1"
    onClick={()=>{props.sendData(props.id)}}>x</button>
    </> 
}

export default Plan;