import { createContext, useState } from 'react';
import { IUser } from '../types/user';

interface UserListsState {
  userLists: IUser[];
  fetchUsersList: (userList: IUser) => void;
}

export const UserListsContext = createContext<UserListsState>({
  userLists: [],
  fetchUsersList: userList => {},
});

export const UserListsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userLists, setUserLists] = useState<IUser[]>([]);

  const fetchUsersList = (userList: IUser) =>
    setUserLists(prev => [userList, ...prev]);

  return (
    <UserListsContext.Provider
      value={{
        userLists: userLists,
        fetchUsersList: fetchUsersList,
      }}
    >
      {children}
    </UserListsContext.Provider>
  );
};
