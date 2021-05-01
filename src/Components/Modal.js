import React from 'react';

function Modal(props) {
  return (
    <div className='Modal-component'>
      <h1>Invalid Input</h1>
      <p>{props.errorMessage}</p>
      <button
        onClick={() => {
          props.setIsValid(true);
        }}
      >
        Okey
      </button>
    </div>
  );
}
export default Modal;
