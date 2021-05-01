import React from 'react';
import Card from './UI/Card';
import Button from './UI/Button';

function Modal(props) {
  return (
    <Card>
      <header>
        <h1>Invalid Input</h1>
      </header>
      <div>
        <p>{props.errorMessage}</p>
        <Button
          onClick={() => {
            props.setErrorMessage(null);
          }}
        >
          Okey
        </Button>
      </div>
    </Card>
  );
}
export default Modal;
