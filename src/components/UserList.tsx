import { IUser } from '../types/user';
import Card from './UI/Card';

interface IProps {
  usersData: IUser[];
}

function UserList({ usersData }: IProps) {
  return (
    <Card>
      {usersData.map(({ name, age }) => {
        return (
          <div>
            {name} ({age} years old)
          </div>
        );
      })}
    </Card>
  );
}

export default UserList;
