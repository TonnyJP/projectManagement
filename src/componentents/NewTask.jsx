import { useState } from 'react';
export const NewTask = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleCange = (event) => {
    setTask(event.target.value);
  };
  const handleClick = () => {
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };
  return (
    <div className='flex items-center gap-4'>
      <input
        type='text'
        className='w-64 px-2 py-1 rounded-sm bg-stone-200'
        value={task}
        onChange={handleCange}
      />
      <button
        className='text-stone-700 hover:text-stone-950'
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};
