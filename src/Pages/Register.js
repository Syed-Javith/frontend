import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/register.css"

function Register(){
    const navigate = useNavigate();
    const [formTaskId , setFormTaskId] = useState('');
    const [formTaskName , setFormTaskName] = useState('')
    const [formUsername , setFormUsername] = useState('')
    const [ userAlreadyFound , setUserAlreadyFound] = useState(false)

    const handleFormSubmit = async (e) =>{
        e.preventDefault();
        const userMail = formUsername;
        const requestBody = {
            taskname : formTaskName , 
            taskid : formTaskId
        }
        const URL = 'http://localhost:5000/user/'+userMail
        console.log(URL);
        try{
            const response = await axios.post(URL,requestBody);
            if(response.data.userAlreadyFound){
                setUserAlreadyFound(true);
            }else{
                alert('Registred')
                navigate('/');
            }
        }catch(err){
            navigate('*');
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <div className="reg-div">
            <h1>Register page</h1>
            <form onSubmit={(e) => handleFormSubmit(e)}>
            <div className="form-group">
                <label for="username" >Username : </label>
            <input className="form-control" name="username" type="text" placeholder="username" value={formUsername} onChange={(e)=>setFormUsername(e.target.value)}  required />
            </div>
            <div className="form-group">
            <label for="id" >id : </label>
            <input className="form-control" name="id" type="text" placeholder="Task Number" value={formTaskId} onChange={(e)=> setFormTaskId(e.target.value)} required />
            </div>
            <div className="form-group">
            <label for="name" >name : </label>
            <input className="form-control" name="name" type="text" placeholder="Task Name" value={formTaskName} onChange={(e)=> setFormTaskName(e.target.value)} required />
            </div>
        <button className="btn btn-primary" type="submit">Add Task</button>
            
      </form>
      { userAlreadyFound && <div> <Link to='/'>Go Home for signIn</Link> <p style={{color : "red"}}>User Already Found</p></div>}
        </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Register ;