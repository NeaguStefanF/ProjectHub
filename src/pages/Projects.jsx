import Heading from '../ui/Heading';
import Row from '../ui/Row';
import AllProjects from '../features/projects/AllProjects';
import AddProject from '../features/projects/AddProject';
import styled from 'styled-components';

const StyledDiv = styled.div`
  @media (max-width: 460px) {
    padding: 0 4rem;
  }
`;

function Projects() {
  return (
    <>
      <StyledDiv>
        <Row type="horizontal">
          <Heading as="h1">Projects</Heading>
          <AddProject />
        </Row>
      </StyledDiv>

      <AllProjects />
    </>
  );
}

export default Projects;
