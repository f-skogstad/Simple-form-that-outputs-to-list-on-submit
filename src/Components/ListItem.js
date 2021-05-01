import React from 'react';

function ListItem(props) {
  return (
    <li className='List-item-component'>
      {props.username} (Age: {props.age})
    </li>
  );
}

export default ListItem;
