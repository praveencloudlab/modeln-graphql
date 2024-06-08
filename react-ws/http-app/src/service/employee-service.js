import axios from 'axios';
function EmployeeService(){

    const BASE_URL='http://localhost:8080/employees';

    let findEmployees=()=>axios.get(`${BASE_URL}`) 
    let findEmployeeById=(id)=>axios.get(`${BASE_URL}/${id}`) 
    let saveEmployee=(emp)=>axios.post(BASE_URL,emp);



return {findEmployeeById,findEmployees,saveEmployee};
}

export default EmployeeService;