import { useState } from 'react';
import styled from 'styled-components';
import {
  HiOutlineMinus,
  HiOutlinePlus,
  HiPencil,
  HiTrash,
} from 'react-icons/hi2';

import { useDeleteProject } from './useDeleteProject';
import Menus from '../../ui/Menus';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import CreateProjectForm from './CreateProjectForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 4rem;

  @media (max-width: 893px) {
    margin: 4rem 0;
  }
`;

const StyledCard = styled.div`
  width: 32.5rem;
  overflow: hidden;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  display: flex;
  flex-direction: column;
  margin-bottom: 0.8rem;

  @media (max-width: 330px) {
    width: 28rem;
  }

  @media (max-width: 300px) {
    width: 25rem;
  }
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.8rem;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 3/2;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Link = styled.div`
  font-family: 'Sono';
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-blue-700);
`;

const Description = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  margin: 0 1.6rem;
`;

const DescriptionContainer = styled.div`
  width: 32.5rem;

  @media (max-width: 330px) {
    width: 27rem;
  }

  @media (max-width: 300px) {
    width: 25rem;
  }
`;

const StyledButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-200);
  }
`;

const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.8rem 1.6rem;
`;

function Project({ project }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const { isDeleting, deleteProject } = useDeleteProject();
  const { id: projectId, title, link, description, image } = project;

  return (
    <Container>
      <StyledCard>
        <Banner>
          <Title>{title}</Title>
          <Link>
            <a href={link.startsWith('http') ? link : `https://${link}`}>
              Go to page &rarr;
            </a>
          </Link>
        </Banner>

        <Img src={image} />
        <StyledButtons>
          <StyledButton onClick={toggleDescription}>
            {isDescriptionVisible ? <HiOutlineMinus /> : <HiOutlinePlus />}
          </StyledButton>
          <div>
            <Modal>
              <Menus.Menu>
                <Menus.Toggle id={projectId} />
                <Menus.List id={projectId}>
                  <Modal.Open opens="edit">
                    <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                  </Modal.Open>

                  <Modal.Open opens="delete">
                    <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                  </Modal.Open>
                </Menus.List>

                <Modal.Window name="edit">
                  <CreateProjectForm projectToUpload={project} />
                </Modal.Window>

                <Modal.Window name="delete">
                  <ConfirmDelete
                    resourceName="projects"
                    disabled={isDeleting}
                    onConfirm={() => deleteProject(projectId)}
                  />
                </Modal.Window>
              </Menus.Menu>
            </Modal>
          </div>
        </StyledButtons>
      </StyledCard>

      {isDescriptionVisible && (
        <DescriptionContainer>
          <Description>{description}</Description>
        </DescriptionContainer>
      )}
    </Container>
  );
}

export default Project;
