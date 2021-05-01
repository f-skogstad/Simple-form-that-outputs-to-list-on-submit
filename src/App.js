import React, { useState } from 'react';
import Form from './Components/Form';
import List from './Components/List';
import Modal from './Components/Modal';

function App() {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className='App'>
      <Form setUsers={setUsers} setErrorMessage={setErrorMessage} />
      {errorMessage ? (
        <Modal errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
      ) : (
        <List users={users} />
      )}
    </div>
  );
}

export default App;
