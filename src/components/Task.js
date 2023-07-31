import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




function Task(props){
    const navigate = useNavigate();
    const [check , setCheck] = useState(false)
    const userMail = props.userData ;
    const deleteTask = async (e , userMail)=>{

        try{
            const URL = 'http://localhost:5000/user/'+userMail+'/'+e.target.value ;
            console.log(URL);
        const response = await axios.patch(URL)
        if(response.status === 200){
            console.log(response.data);
        }else{
            console.log(response.data);
        }
        }catch(err){
            navigate("*");
        }
    }

    
    return <div className="container task-list">
        <div className="row">
            <div className="col task-col">
            < input className="check" type="checkbox" onClick={()=>setCheck(!check)} />
                <h3 className="task" style={{textDecoration : check && "line-through" }} key={props.componentID}>{props.taskid + ") " + props.taskname}</h3>
        
        <button className="btn btn-danger delete-btn" value={props.taskid} onClick={(e) => deleteTask(e , userMail)} >Delete</button></div>
        
        </div>
        
    </div>
}

export default Task ;
