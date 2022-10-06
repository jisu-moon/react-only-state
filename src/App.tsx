import { useContext } from 'react';
import styled from 'styled-components';
import UserForm from './components/User/UserForm';
import UserList from './components/User/UserList';
import { UserListsContext } from './store/user-lists-context';

const Wrapper = styled.div`
  padding: 50px;
`;

function App() {
  const { userLists } = useContext(UserListsContext);
  return (
    <Wrapper>
      <UserForm />
      {userLists.length === 0 ? null : <UserList />}
    </Wrapper>
  );
}

export default App;
