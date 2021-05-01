import React, { useState } from 'react';
import Form from './Components/Form';
import List from './Components/List';
import Modal from './Components/Modal';

function App() {
  const [users, setUsers] = useState([]);
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('Error');

  return (
    <div className='App'>
      <Form
        setUsers={setUsers}
        enteredUsername={enteredUsername}
        setEnteredUsername={setEnteredUsername}
        enteredAge={enteredAge}
        setEnteredAge={setEnteredAge}
        isValid={isValid}
        setIsValid={setIsValid}
        setErrorMessage={setErrorMessage}
      />
      {!isValid ? (
        <Modal errorMessage={errorMessage} setIsValid={setIsValid} />
      ) : (
        <List users={users} />
      )}
    </div>
  );
}

export default App;
