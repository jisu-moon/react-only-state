import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { IUser } from './types/user';

function App() {
  const [usersData, setUsersData] = useState<IUser[]>([]);

  const fetchUserHandler = (user: IUser) =>
    setUsersData(prev => [user, ...prev]);

  return (
    <>
      <UserForm fetchUserHandler={user => fetchUserHandler(user)} />
      <UserList usersData={usersData} />
    </>
  );
}

export default App;
