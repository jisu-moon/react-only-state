import { useState } from 'react';
import UserForm from './components/UserForm';

function App() {
  const [user, setUser] = useState([]);
  const fetchUserHandler = (user: any) => {
    console.log(user);
  };
  return (
    <>
      <UserForm fetchUserHandler={(user: any) => fetchUserHandler(user)} />
    </>
  );
}

export default App;
