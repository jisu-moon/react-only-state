import React, { useState } from 'react';
import styled from 'styled-components';
import { IUser } from '../../types/user';
import Modal from '../ErrorModal';
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
const Button = styled.button`
  padding: 10px;
  background: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.black.textColor};
  border: 0;
  font-size: 18px;
`;

interface IProps {
  fetchUsersList: (user: IUser) => void;
}

function UserForm({ fetchUsersList }: IProps) {
  const [userList, setUserList] = useState({
    name: '',
    age: null,
  });
  const [modalShow, setModalShow] = useState(false);
  const [Error, setError] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, age } = userList;
    if (name.trim().length === 0 || age === null) {
      setModalShow(true);
      setError('입력창을 모두 채워주세요.');
      return;
    } else if (age < 0) {
      setModalShow(true);
      setError('0이하의 나이값은 입력 할 수 없습니다.');
      return;
    }
    setUserList({ name: '', age: null });
    fetchUsersList(userList);
  };
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = event;
    setUserList(prev => {
      return {
        ...prev,
        [name]: name === 'age' ? +value : value,
      };
    });
  };

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
          <Button type='submit'>Add User</Button>
        </Form>
      </Card>
      {modalShow ? <Modal msg={Error} setModalShow={setModalShow} /> : null}
    </>
  );
}

export default UserForm;
