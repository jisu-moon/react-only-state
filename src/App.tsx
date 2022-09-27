import { useState } from 'react';
import UserForm from './components/UserForm';
import { IUser } from './types/user';

function App() {
  const [usersData, setUsersData] = useState<IUser[]>([]);

  const fetchUserHandler = (user: IUser) => {
    setUsersData(prev => [user, ...prev]);
  };
  console.log(usersData);
  return (
    <>
      <UserForm fetchUserHandler={user => fetchUserHandler(user)} />
    </>
  );
}

export default App;
