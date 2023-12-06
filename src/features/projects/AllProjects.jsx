import { useProjects } from './useProjects';
import Project from './Project';
import Spinner from '../../ui/Spinner';
import Menus from '../../ui/Menus';
import styled from 'styled-components';

const StyledProjects = styled.div`
  background-color: var(--color-grey-0);

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  @media (max-width: 893px) {
    grid-template-columns: 1fr;
    align-items: center;
  }
`;

function AllProjects() {
  const { isLoading, projects } = useProjects();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <StyledProjects>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </StyledProjects>
    </Menus>
  );
}

export default AllProjects;
