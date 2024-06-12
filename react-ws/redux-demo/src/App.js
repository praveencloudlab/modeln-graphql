import React from 'react';
import Counter from './components/Counter';
import Display from './components/Display';

const App = () => {
  return (
    <div className='container'>
            <h1>Redux App </h1>
            <hr/>
            <Counter/>
            <Display/>
      
    </div>
  );
};

export default App;