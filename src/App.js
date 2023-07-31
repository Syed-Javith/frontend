import './App.css';
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import {Home} from "./Pages/Home";
import UserInfo from "./Pages/UserInfo";
import ErrorPage from './Pages/ErrorPage';
import Register from './Pages/Register';
import { useState } from 'react';


function App() {

  const [userData , setUserData] = useState(null)
  const handleUserData = (data) => {
    setUserData(data);
  };
  return (
    <Router >
      <Routes>
        <Route path='/' element={< Home handleUserData={handleUserData}  />} />
        <Route path='/user' element= {<UserInfo userData={userData}/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
