import styled from 'styled-components';
import MainNav from './MainNav';

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-right: 1px solid var(--color-grey-100);

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 460px) {
    padding: 1.2rem 1.2rem;
  }
`;

function Header() {
  return (
    <StyledHeader type="horizontal">
      <h3>ProjectHub</h3>
      <MainNav />
    </StyledHeader>
  );
}

export default Header;
