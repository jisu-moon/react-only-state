import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Card from './UI/Card';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;
const Title = styled.h2`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  background: ${({ theme }) => theme.red};
  color: #fff;
  font-weight: 900;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 24px;
  button {
    font-weight: 400;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0, -50%);
    border: 0;
    color: #fff;
    font-size: 18px;
    background: transparent;
    cursor: pointer;
  }
`;
const Content = styled.div`
  color: #000;
  padding-top: 20px;
`;

interface IProps {
  msg: string;
  setModalShow: Dispatch<SetStateAction<boolean>>;
}

function Modal({ msg, setModalShow }: IProps) {
  return (
    <Wrapper>
      <Overlay onClick={() => setModalShow(false)} />
      <Card className='modal'>
        <Title>
          <p>Invalid Input</p>
          <button onClick={() => setModalShow(false)}>X</button>
        </Title>
        <Content>{msg}</Content>
      </Card>
    </Wrapper>
  );
}

export default Modal;
