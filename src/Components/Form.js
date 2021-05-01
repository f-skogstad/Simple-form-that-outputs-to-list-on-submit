import React, { useState } from 'react';
import Card from './UI/Card';
import Button from './UI/Button';

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

    if (enteredUsername.trim() === '' && +enteredAge <= 0) {
      props.setErrorMessage('Please enter a valid age & username');
    } else if (enteredUsername.trim() === '') {
      props.setErrorMessage('Please enter a username');
    } else if (+enteredAge <= 0) {
      props.setErrorMessage('Please enter a valid age (> 0)');
    } else {
      props.setErrorMessage('');
      const user = {
        username: enteredUsername,
        age: enteredAge,
      };

      props.setUsers((prevUsers) => {
        return [user, ...prevUsers];
      });

      setEnteredUsername('');
      setEnteredAge('');
    }
  };

  return (
    <Card>
      <form className='Form-component' onSubmit={submitHandler}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor='age'>Age (years)</label>
        <input
          id='age'
          type='number'
          min='1'
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
}

export default Form;
