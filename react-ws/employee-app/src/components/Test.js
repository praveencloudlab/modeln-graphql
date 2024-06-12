import React from 'react';
import CustomInput from './CustomInput';

const Test = () => {
    return (
        <div>
            <CustomInput type="text" name="employeeName"/> <br/>
            <CustomInput type="text" name="salary"/> <br/>

            <CustomInput type="checkbox" name="test1"/>
        </div>
    );
};

export default Test;