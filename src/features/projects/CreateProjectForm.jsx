import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import FormRow from '../../ui/FormRow';

import { useForm } from 'react-hook-form';
import { useCreateProject } from './useCreateProject';
import { useUpdateProject } from './useUpdateProject';

function CreateProjectForm({ projectToUpload = {}, onCloseModal }) {
  const { isCreating, createProject } = useCreateProject();
  const { isUpdating, UpdateProject } = useUpdateProject();
  const isWorking = isCreating || isUpdating;

  const { id: updateId, ...updateValues } = projectToUpload;
  const isUpdateSession = Boolean(updateId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isUpdateSession ? updateValues : {},
  });

  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    if (isUpdateSession)
      UpdateProject(
        {
          newProjectData: { ...data, image },
          id: updateId,
        },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createProject(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? 'modal' : 'regular'}
    >
      <FormRow label="Project name" error={errors?.title?.message}>
        <Input
          type="text"
          id="title"
          disabled={isWorking}
          {...register('title', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label="Link to website" error={errors?.link?.message}>
        <Input
          type="text"
          id="link"
          disabled={isWorking}
          {...register('link', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label="Description project" error={errors?.description?.message}>
        <Textarea
          type="text"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register('description', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label="Project photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register('image', {
            required: isUpdateSession ? false : 'This field is required',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isUpdateSession ? 'Edit project' : 'Create project'}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateProjectForm;
