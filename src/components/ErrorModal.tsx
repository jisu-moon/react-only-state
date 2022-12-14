import ReactDOM from 'react-dom';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Card from './UI/Card';
import Button from './UI/Button';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
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
`;
const Content = styled.div`
  color: #000;
  padding-top: 20px;
`;

interface IProps {
  msg: string;
  setErrorModalShow: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ msg, setErrorModalShow }: IProps) => {
  return (
    <Wrapper>
      <Overlay onClick={() => setErrorModalShow(false)} />
      <Card cssClass='modal'>
        <Title>
          <p>Invalid Input</p>
          <Button
            type='button'
            cssClass='right-close'
            onClick={() => setErrorModalShow(false)}
          >
            X
          </Button>
        </Title>
        <Content>{msg}</Content>
      </Card>
    </Wrapper>
  );
};

function ErrorModal({ msg, setErrorModalShow }: IProps) {
  return (
    <>
      {ReactDOM.createPortal(
        <Modal msg={msg} setErrorModalShow={setErrorModalShow} />,
        document.querySelector('#modal-root')!,
      )}
    </>
  );
}

export default ErrorModal;
