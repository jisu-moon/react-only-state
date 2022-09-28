import styled from 'styled-components';
import { IUser } from '../../types/user';
import Card from '../UI/Card';

interface IProps {
  usersData: IUser[];
}

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const List = styled.li`
  padding: 15px;
  border: 1px solid #000;
  cursor: pointer;
  color: ${({ theme }) => theme.white.textColor};
  font-size: 18px;
  font-weight: bold;
`;

function UserList({ usersData }: IProps) {
  return (
    <Card>
      <ListWrapper>
        {usersData.map(({ name, age }, index) => (
          <List key={index}>
            {name} ({age} years old)
          </List>
        ))}
      </ListWrapper>
    </Card>
  );
}

export default UserList;
