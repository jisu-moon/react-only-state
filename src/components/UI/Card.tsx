import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
  cssClass?: string;
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
    max-width: 800px;
  }
`;

function Card({ children, cssClass }: IProps) {
  return <Wrapper className={cssClass}>{children}</Wrapper>;
}

export default Card;
