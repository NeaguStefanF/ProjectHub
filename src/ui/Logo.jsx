import styled from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
  padding: 1.2rem 4.8rem;
`;

const Img = styled.img`
  height: 3.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo192.png" />
    </StyledLogo>
  );
}

export default Logo;
