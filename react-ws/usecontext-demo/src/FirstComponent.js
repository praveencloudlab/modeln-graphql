import {useContext} from 'react';
import { MyContext } from './MyProvider';

const FirstComponent = () => {

    const value=useContext(MyContext);// consumming from Provider
    
    return (
        <div>
            <h2>First Component</h2>
            <p>{value}</p>
            <button>Chnage Value</button>
        </div>
    );
};

export default FirstComponent;