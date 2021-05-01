import React from 'react';
import Card from './UI/Card';
import Button from './UI/Button';

function Modal(props) {
  return (
    <Card>
      <h1>Invalid Input</h1>
      <div>
        <p>{props.errorMessage}</p>
        <Button
          onClick={() => {
            props.setIsValid(true);
          }}
        >
          Okey
        </Button>
      </div>
    </Card>
  );
}
export default Modal;
