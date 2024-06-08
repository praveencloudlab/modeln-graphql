import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import EmployeeService from '../service/employee-service';



const EmployeeForm = () => {
    const { register, handleSubmit } = useForm();
    let{saveEmployee}=EmployeeService();

      const onSubmit=(employee)=>{
        saveEmployee(employee);
      }

    return (
        <div>
             <h3>Employee Form</h3>
             <hr/>
             <form onSubmit={handleSubmit(onSubmit)}>
             <input  {...register("id",{required: true})}/> <br/>
             <input defaultValue="Praveen"  {...register("first_name")} /> <br/>
             <input  {...register("last_name")} /> <br/>
             <input  {...register("email")} /> <br/>
             <input  {...register("gender")} /> <br/>
             <input type="submit" />
            </form>
            
        </div>
    );
};

export default EmployeeForm;