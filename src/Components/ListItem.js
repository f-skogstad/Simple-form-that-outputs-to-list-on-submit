import React from 'react';

function ListItem(props) {
  return (
    <p className='List-item-component'>
      {props.username} (Age: {props.age})
    </p>
  );
}

export default ListItem;
