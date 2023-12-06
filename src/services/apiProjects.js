import supabase, { supabaseUrl } from './supabase';

// read all projects
export async function getProjects() {
  const { data, error } = await supabase.from('projects').select('*');

  if (error) {
    console.error(error);
    throw new Error('Projects could not be loaded');
  }
  return data;
}

//create / update projects
export async function createUpdateProject(newProject, id) {
  //verify if it has the path with supabase url
  const hasImagePath = newProject.image?.startsWith?.(supabaseUrl);

  //add unic name to new image
  const imageName = `${Math.random()}-${newProject.image.name}`.replaceAll(
    '/',
    ''
  );

  const imagePath = hasImagePath
    ? newProject.image
    : `${supabaseUrl}/storage/v1/object/public/project-images/${imageName}`;

  //https://zhuqdlmnwwdzzrnldymm.supabase.co/storage/v1/object/public/project-images/image-001.jpg

  // Create the project if there is no id
  let query = supabase.from('projects');

  //create
  if (!id) query = query.insert([{ ...newProject, image: imagePath }]);

  //edit
  if (id)
    query = query
      .update({ ...newProject, image: imagePath })
      .eq('id', id)
      .select();

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Project could not be created');
  }
  //upload the image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('project-images')
    .upload(imageName, newProject.image);

  //delete the project if there was an error uploading the image
  if (storageError) {
    await supabase.from('projects').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'Image could not be uploaded and the project was not created'
    );
  }
  return data;
}

//delete projects
export async function deleteProject(id) {
  const { data, error } = await supabase.from('projects').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Project could not be deleted');
  }
  return data;
}
