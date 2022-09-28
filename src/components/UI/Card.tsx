import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = styled.div`
  border-radius: 10px;
  background: ${props => props.theme.white.background};
  padding: 25px 15px;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 50px;
  overflow: hidden;
  &.modal {
    position: relative;
    z-index: 2;
    padding-top: 50px;
  }
`;

function Card({ children, className }: IProps) {
  return <Wrapper className={className}>{children}</Wrapper>;
}

export default Card;
