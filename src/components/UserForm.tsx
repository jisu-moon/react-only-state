import React, { useState } from 'react';
import styled from 'styled-components';
import { IUser } from '../types/user';
import Card from './UI/Card';

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
  fetchUserHandler: (user: IUser) => void;
}

function UserForm({ fetchUserHandler }: IProps) {
  const [userData, setUserData] = useState({
    name: '',
    age: 0,
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchUserHandler(userData);
  };
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = event;
    setUserData(prev => {
      return {
        ...prev,
        [name]: name === 'age' ? Number(value) : value,
      };
    });
  };

  return (
    <Card>
      <Form onSubmit={onSubmit}>
        <Item>
          <Label>Username</Label>
          <Input type='text' name='name' onChange={onChange} />
        </Item>
        <Item>
          <Label>Age (Years)</Label>
          <Input type='number' name='age' onChange={onChange} />
        </Item>
        <Button type='submit'>Add User</Button>
      </Form>
    </Card>
  );
}

export default UserForm;
