import { useState } from 'react';
import styled from 'styled-components';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { IUser } from './types/user';

const Wrapper = styled.div`
  padding: 50px;
`;

function App() {
  const [usersData, setUsersData] = useState<IUser[]>([]);

  const fetchUserHandler = (user: IUser) => {
    setUsersData(prev => [user, ...prev]);
  };

  return (
    <Wrapper>
      <UserForm fetchUserHandler={user => fetchUserHandler(user)} />
      {usersData.length === 0 ? null : (
        <UserList usersData={usersData} date={Date.now()} />
      )}
    </Wrapper>
  );
}

export default App;
