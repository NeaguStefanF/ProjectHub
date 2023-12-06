import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateProjectForm from './CreateProjectForm';

function AddProject() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="project-form">
          <Button>Add project</Button>
        </Modal.Open>
        <Modal.Window name="project-form">
          <CreateProjectForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddProject;
