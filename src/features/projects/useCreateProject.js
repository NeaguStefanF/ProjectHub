import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUpdateProject } from '../../services/apiProjects';
import toast from 'react-hot-toast';

export function useCreateProject() {
  const queryClient = useQueryClient();

  const { mutate: createProject, isLoading: isCreating } = useMutation({
    mutationFn: createUpdateProject,
    onSuccess: () => {
      toast.success('New project succesfully created');
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createProject };
}
