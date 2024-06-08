import {useState,useEffect} from 'react';
import UserService from './service/user-service';
import ListEmployee from './components/ListEmployee';
import EmployeeForm from './components/EmployeeForm';

const App = () => {
  let {testFun,usersList,findUser}=UserService();

  const[users,setUsers]=useState([]);
  const[user,setUser]=useState({});
  

  useEffect(()=>{
    usersList().then(users=>setUsers(users.data))
  },[])
  function findAllUsers(){
   return users.map(user=>{
    return <div>
      <li>{user.name}</li>
    </div>
   })
  }


  function getUser(id){
    findUser(id).then(user=>setUser(user.data))
  }
  return (
    <div className='container'>

      <div className='alert alert-info text-center'>
        <h1>Welcome to my App</h1>
  
      </div>
      <hr/>

    <EmployeeForm/>
    <hr/>
     <ListEmployee/>
    
      
    </div>
  );
};

export default App;