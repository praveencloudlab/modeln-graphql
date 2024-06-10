import {useContext} from 'react';
import { MyContext,MyContext1 } from './MyProvider';

const SecondComponent = () => {
    const value=useContext(MyContext1);//?
    const value1=useContext(MyContext);//?
    return (
        <div><h2>Second Component</h2>
        <hr/>
        <p>
            {value}

        </p>

        <p>{value1}</p>
            
        </div>
    );
};

export default SecondComponent;