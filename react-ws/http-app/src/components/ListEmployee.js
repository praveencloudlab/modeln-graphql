import {useEffect,useState} from 'react';
import EmployeeService from '../service/employee-service';

const ListEmployee = () => {
    const[employees,setEmployees]=useState([]);
    let{findEmployees}=EmployeeService();

    useEffect(()=>{
     findEmployees().then(employees=>setEmployees(employees.data));
    },[])

    let renderEmployees=()=>{
        return employees.map(emp=>{
            return <li>{emp.first_name}</li>
        })
    }
    return (
        <div>
           
            <div>
            {renderEmployees()}
            </div>
            
        </div>

    );
};

export default ListEmployee;