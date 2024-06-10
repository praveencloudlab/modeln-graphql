import {useReducer} from 'react';

const UseReducerDemo = () => {

    const initialState = { count: 0 }; // store

    function reducer(state, action) {
        let {type}=action;
        switch (type) {
          case 'INCREMENT':
            return { count: state.count + 1 };
          case 'DECREMENT':
            return { count: state.count - 1 };
          default:
            throw new Error();
        }
      }
      const [state, dispatch] = useReducer(reducer, initialState);
      
    return (
        <div>
            
      <div>
      <h3>Count: {state.count}</h3>  
     <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <hr/>
    </div>



        </div>
    );
};

export default UseReducerDemo;