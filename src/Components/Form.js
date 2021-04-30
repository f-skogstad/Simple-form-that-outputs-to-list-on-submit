import React, { useState } from 'react';

function Form(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const user = {
      username: enteredUsername,
      age: enteredAge,
    };

    props.setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });

    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <form className='Form-component' onSubmit={submitHandler}>
      <label>Username</label>
      <input
        type='text'
        value={enteredUsername}
        onChange={usernameChangeHandler}
      />
      <label>Age (years)</label>
      <input
        type='number'
        min='1'
        max='100'
        value={enteredAge}
        onChange={ageChangeHandler}
      />
      <button type='submit'>Add User</button>
    </form>
  );
}

export default Form;
