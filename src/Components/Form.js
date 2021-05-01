import React from 'react';
import Card from './UI/Card';
import Button from './UI/Button';

function Form(props) {
  const usernameChangeHandler = (e) => {
    props.setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    props.setEnteredAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (props.enteredUsername === '' && !props.enteredAge > 0) {
      props.setIsValid(false);
      props.setErrorMessage('Please enter a valid age & username');
    } else if (props.enteredUsername === '') {
      props.setIsValid(false);
      props.setErrorMessage('Please enter a username');
    } else if (!props.enteredAge > 0) {
      props.setIsValid(false);
      props.setErrorMessage('Please enter a valid age (> 0)');
    } else {
      props.setIsValid(true);
      const user = {
        username: props.enteredUsername,
        age: props.enteredAge,
      };

      props.setUsers((prevUsers) => {
        return [user, ...prevUsers];
      });

      props.setEnteredUsername('');
      props.setEnteredAge('');
    }
  };

  return (
    <Card>
      <form className='Form-component' onSubmit={submitHandler}>
        <label>Username</label>
        <input
          type='text'
          value={props.enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label>Age (years)</label>
        <input
          type='number'
          value={props.enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
}

export default Form;
