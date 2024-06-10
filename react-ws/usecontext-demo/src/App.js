import React from 'react';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';

const App = () => {

  let name='Praveen';
  return (
    <div className='container'>

      <h1>App Component</h1>
      <hr/>
      <FirstComponent/>
      <SecondComponent />
      
      
    </div>
  );
};

export default App;