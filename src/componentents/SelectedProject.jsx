import { Task } from './Task';

export const SelectedProject = ({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) => {
  const formatedDate = new Date(project.dueDate).toLocaleDateString('de-DE', {
    yead: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return (
    <div className='w-[35rem] mt-16'>
      <header className='pb-4 mb-4 border-b2 border-stone-300'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold text-stone-600 mb-2'>
            {project.title}
          </h1>
          <button
            className='text-stone-600 hover:text-stone-950'
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className='mb-4 test-stone-400'>{formatedDate}</p>
        <p className='text-stone*600 whitespace-pre-wrap'>
          {project.description}
        </p>
      </header>
      <Task onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks} />
    </div>
  );
};
