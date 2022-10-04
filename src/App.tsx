import { useState } from 'react';
import styled from 'styled-components';
import UserForm from './components/User/UserForm';
import UserList from './components/User/UserList';
import { UserListsContext } from './store/user-lists-context';
import { IUser } from './types/user';

const Wrapper = styled.div`
  padding: 50px;
`;

function App() {
  const [usersList, setUsersList] = useState<IUser[]>([]);

  const fetchUsersList = (userList: IUser) =>
    setUsersList(prev => [userList, ...prev]);

  return (
    <UserListsContext.Provider
      value={{
        userLists: [],
      }}
    >
      <Wrapper>
        <UserForm fetchUsersList={userList => fetchUsersList(userList)} />
        {usersList.length === 0 ? null : <UserList usersList={usersList} />}
      </Wrapper>
    </UserListsContext.Provider>
  );
}

export default App;
