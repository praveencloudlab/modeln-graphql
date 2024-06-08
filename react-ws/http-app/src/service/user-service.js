import axios from 'axios';
function UserService(){

    const BASE_URL='https://jsonplaceholder.typicode.com/users';

    let testFun=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
}
    let usersList=()=>axios.get(`${BASE_URL}`) 
    let findUser=(id)=>axios.get(`${BASE_URL}/${id}`) 


return {testFun,usersList,findUser};
}

export default UserService;