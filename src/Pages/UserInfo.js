import { React, useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Task from "../components/Task";

function UserInfo(props) {
    const userData = props.userData;
    const navigate = useNavigate();
    const [userTask , setUserTask] = useState([]);
    const [formTaskName , setFormTaskName] = useState('');
    const [formTaskId , setFormTaskId] = useState('');
    const [formVisible , setFormVisible] = useState(false);

    useEffect(()=>{
        getTasks();
    },[userData])


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.id.value);
        console.log(e.target.name.value);
        const userMail = userData;
        const URL = 'http://localhost:5000/user/'+userMail; 
        const requestBody ={
            taskid : e.target.id.value ,
            taskname : e.target.name.value
        };
        try{
            const response = await axios.patch(URL,requestBody)
            if(response.status === 200 ){
                setFormTaskId('');
                setFormTaskName('');
                setFormVisible(false);
                alert('added succesfully !!');
                
            } else{
                navigate('*');
            }
        }catch(err){
            navigate('*');
        }
    }

    const getTasks = async () =>{
        const userMail = userData;
        const URL = 'http://localhost:5000/user/'+userMail;
        try{
            const response = await axios.get(URL)
        if(response.status === 200){
            setUserTask(response.data.task)
        }else{
            console.log("error");
        }
        }catch(err){
           navigate("*") 
        }
    }


    const unregister = async() =>{
        const userMail = userData ;
        const URL = 'http://localhost:5000/user/'+userMail

        try{
            const response = await axios.delete(URL)
            console.log(response);
            if(response.status === 200 ){
                alert('Unregistered succesfully')
                navigate('/register')
                console.log("after register");
                console.log(navigate);
            }else{
                alert('unable to unregister')
                navigate('*')
            }
        }catch(err){
            navigate('*')
        }
    }
    
    return (
        <>
        <h1>Your Activities are : </h1>
        {/* {userData && <button onClick={getTasks} >Tasks</button>} */}
        <div>
        {userTask.length ? userTask.map((task ,index)=>{
               return <Task key={index} componentID={index} taskid={task.taskid} taskname={task.taskname} userData={userData}/>
            
        }) : <p>no data</p>}
        </div>
        <div className="text-center group-btn">
        <button className={`btn btn-primary mx-auto task-add-button ${formVisible && 'btn-danger'}`} onClick={()=> setFormVisible(!formVisible)} >
        { formVisible ? "Cancel" : "Add" }
    </button>
    <button className="btn btn-danger" onClick={unregister}>Unregister</button>
        </div>
        { formVisible && <div className="add-task">
      <h2>Add Book</h2>
      <form onSubmit={(e) => handleFormSubmit(e)}>
      <div className='container'>
      <div className='row'>
        <div className='col'>
        <div className='form-group'>
        <input name="id" type="text" placeholder="Task Number" value={formTaskId} onChange={(e)=> setFormTaskId(e.target.value)} />
        </div>
       <div className="form-group">
       <input name="name" type="text" placeholder="Task Name" value={formTaskName} onChange={(e)=> setFormTaskName(e.target.value)} />

       </div>

        
        <button className="btn btn-primary mx-auto" type="submit">Add Task</button>
        </div>
        </div>
        </div>
        <h3>{formTaskId}</h3>
        <h2>{formTaskName}</h2>
        
      </form>
    </div> }
        </>
    );
}

export default UserInfo;