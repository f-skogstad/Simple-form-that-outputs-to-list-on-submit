import React, { useState } from 'react';
import Form from './Components/Form';
import List from './Components/List';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className='App'>
      <Form setUsers={setUsers} />
      <List users={users} />
    </div>
  );
}

export default App;
