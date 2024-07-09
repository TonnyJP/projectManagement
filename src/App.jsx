import { NewProject } from './componentents/NewProject';
import { NoProjectSelected } from './componentents/NoProjectSelected';
import { SelectedProject } from './componentents/SelectedProject';
import { SideBar } from './componentents/SideBar';
import { useState } from 'react';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectsState((prev) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prev.selectedProjectId,
        id: taskId,
      };
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectsState((prev) => {
      const newProjectList = projectsState.tasks.filter(
        (proj) => proj.id !== id
      );
      return {
        ...prev,
        tasks: [...newProjectList],
      };
    });
  };
  const handleStartAddProj = () => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  };

  const handleAddProject = (project) => {
    setProjectsState((prev) => {
      const projectId = Math.random();
      const newProject = {
        ...project,
        id: projectId,
      };
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  };
  const handleOnDeleteProject = () => {
    setProjectsState((prev) => {
      const newProjectList = projectsState.projects.filter(
        (proj) => proj.id !== prev.selectedProjectId
      );
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...newProjectList],
      };
    });
  };

  const selectedProj = projectsState.projects.find(
    (proj) => proj.id === projectsState.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={selectedProj}
      onDelete={handleOnDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProj} />;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <SideBar
        onStartAddProject={handleStartAddProj}
        projects={projectsState.projects}
        onSelectProj={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
