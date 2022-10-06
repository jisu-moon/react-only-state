import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
  type: string;
  cssClass?: string;
  onClick?: () => void;
}

const Btn = styled.button.attrs(({ type }: { type: string }) => ({
  type: type,
}))`
  font-size: 18px;
  cursor: pointer;
  color: ${({ theme }) => theme.black.textColor};
  border: 0;
  &.long {
    padding: 10px;
    background: ${({ theme }) => theme.red};
  }
  &.right-close {
    font-weight: 400;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0, -50%);
    background: transparent;
  }
`;

function Button({ type, children, cssClass, onClick }: IProps) {
  return (
    <Btn className={cssClass} type={type} onClick={onClick}>
      {children}
    </Btn>
  );
}

export default Button;
