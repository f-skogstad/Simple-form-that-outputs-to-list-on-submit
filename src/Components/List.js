import React from 'react';
import ListItem from './ListItem';

function List(props) {
  return (
    <ul className='List-component'>
      {props.users.map((user, index) => (
        <ListItem username={user.username} age={user.age} key={index} />
      ))}
    </ul>
  );
}

export default List;
