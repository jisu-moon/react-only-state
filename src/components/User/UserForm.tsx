import React, { useContext, useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import { UserListsContext } from '../../store/user-lists-context';
import { IUser, IUserReducer } from '../../types/user';
import ErrorModal from '../ErrorModal';
import Button from '../UI/Button';
import Card from '../UI/Card';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Input = styled.input`
  width: 100%;
  padding: 5px;
`;
const Label = styled.label`
  font-size: 24px;
  color: ${({ theme }) => theme.white.textColor};
  font-weight: 900;
`;

const userListReducer = (state: IUser, action: IUserReducer) => {
  const { type, value } = action;
  if (type === 'INIT') return { name: '', age: null };
  return {
    ...state,
    [type]: type === 'age' ? +value! : value,
  };
};

function UserForm() {
  const [userList, setUserList] = useReducer(userListReducer, {
    name: '',
    age: null,
  });
  const [errorModalShow, setErrorModalShow] = useState(false);
  const [error, setError] = useState('');
  const { fetchUsersList } = useContext(UserListsContext);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, age } = userList;
    if (name.trim().length === 0 || age === null) {
      setErrorModalShow(true);
      setError('입력창을 모두 채워주세요.');
      return;
    } else if (age < 0) {
      setErrorModalShow(true);
      setError('0이하의 나이값은 입력 할 수 없습니다.');
      return;
    }
    fetchUsersList(userList);
    setUserList({ type: 'INIT' });
  };
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = event;
    setUserList({ type: name, value: value });
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      userList.name.length < 5 && console.log('안됨');
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [userList]);

  return (
    <>
      <Card>
        <Form onSubmit={onSubmit}>
          <Item>
            <Label>Username</Label>
            <Input
              type='text'
              name='name'
              value={userList.name}
              onChange={onChange}
            />
          </Item>
          <Item>
            <Label>Age (Years)</Label>
            <Input
              type='number'
              name='age'
              value={userList.age ?? ''}
              onChange={onChange}
            />
          </Item>
          <Button cssClass='long' type='submit'>
            Add User
          </Button>
        </Form>
      </Card>
      {errorModalShow ? (
        <ErrorModal msg={error} setErrorModalShow={setErrorModalShow} />
      ) : null}
    </>
  );
}

export default UserForm;
