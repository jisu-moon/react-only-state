import styled from 'styled-components';
import { IUser } from '../types/user';
import Card from './UI/Card';

interface IProps {
  usersData: IUser[];
  date: number;
}

const Item = styled.div`
  padding: 15px;
  border: 1px solid #000;
  cursor: pointer;
  color: ${({ theme }) => theme.white.textColor};
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`;

function UserList({ usersData }: IProps) {
  return (
    <Card>
      {usersData.map(({ name, age }, index) => (
        <Item key={index}>
          {name} ({age} years old)
        </Item>
      ))}
    </Card>
  );
}

export default UserList;
