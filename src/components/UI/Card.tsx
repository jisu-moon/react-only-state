import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  border-radius: 10px;
  background: ${props => props.theme.white.background};
  padding: 25px 15px;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 50px;
`;

function Card({ children }: IProps) {
  return <Wrapper>{children}</Wrapper>;
}

export default Card;
