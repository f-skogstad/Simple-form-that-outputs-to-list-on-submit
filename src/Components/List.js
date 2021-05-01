import React from 'react';
import ListItem from './ListItem';
import Card from './UI/Card';

function List(props) {
  return (
    <Card>
      <li>
        {props.users.map((user, index) => (
          <ListItem username={user.username} age={user.age} key={index} />
        ))}
      </li>
    </Card>
  );
}

export default List;
