import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUpdateProject } from '../../services/apiProjects';
import toast from 'react-hot-toast';

export function useUpdateProject() {
  const queryClient = useQueryClient();

  const { mutate: UpdateProject, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newProjectData, id }) =>
      createUpdateProject(newProjectData, id),
    onSuccess: () => {
      toast.success('Project successfully edited');
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, UpdateProject };
}
