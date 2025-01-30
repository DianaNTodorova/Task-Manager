import { useState } from 'react';
import NewProject from './components/Newproject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectSideBar from './components/ProjectSideBar.jsx';
import SelectedProject from './components/SelectedProject.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [selectProjects, setSelectProjects] = useState({
    selectProjectsId: undefined,
    projects: [],
    tasks: [],
  });

  // Handle adding a task
  function handleAddTask(text) {
    setSelectProjects((prevProject) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevProject.selectProjectsId, // Keep the current selected project
        id: taskId,
      };
      return {
        ...prevProject,
        tasks: [...prevProject.tasks, newTask], // Don't reset selectProjectsId here
      };
    });
  }

  // Handle deleting a task
  function handleDeleteTask(id) {
    setSelectProjects((prevProject) => {
      return {
        ...prevProject,
        tasks: prevProject.tasks.filter((task) => task.id !== id), // Don't reset selectProjectsId here
      };
    });
  }

  // Handle adding a new project
  function addHandleProject(projectData) {
    setSelectProjects((prevProject) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevProject,
        selectProjectsId: undefined, // Reset after adding project
        projects: [...prevProject.projects, newProject],
      };
    });
  }

  // Handle canceling project addition
  function handleCancelAddProject() {
    setSelectProjects((prevProject) => {
      return {
        ...prevProject,
        selectProjectsId: undefined, // Reset after canceling
      };
    });
  }

  // Handle deleting a project
  function handleDeleteProject() {
    setSelectProjects((prevProject) => {
      return {
        ...prevProject,
        selectProjectsId: undefined, // Reset after deleting project
        projects: prevProject.projects.filter(
          (project) => project.id !== prevProject.selectProjectsId
        ),
      };
    });
  }

  // Handle starting to add a new project
  function handleAddSelectedProjects() {
    setSelectProjects((prevProject) => {
      return {
        ...prevProject,
        selectProjectsId: null, // Switch to adding a new project
      };
    });
  }

  // Handle selecting a project
  function handleSelectedProjects(id) {
    setSelectProjects((prevProject) => {
      return {
        ...prevProject,
        selectProjectsId: id, // Set the selected project
      };
    });
  }

  console.log(selectProjects);

  const selectedProject = selectProjects.projects.find(
    (project) => project.id === selectProjects.selectProjectsId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={selectProjects.tasks.filter(
        (task) => task.projectId === selectProjects.selectProjectsId
      )} // Show tasks only for the selected project
    />
  );

  if (selectProjects.selectProjectsId === undefined) {
    content = (
      <NoProjectSelected onStartAddingProject={handleAddSelectedProjects} />
    );
  } else if (selectProjects.selectProjectsId === null) {
    content = (
      <NewProject addNew={addHandleProject} onCancel={handleCancelAddProject} />
    );
  }

  return (
    <main className="h-screen flex gap-8">
      <ProjectSideBar
        onStartAddingProject={handleAddSelectedProjects}
        projects={selectProjects.projects}
        onSelectedProject={handleSelectedProjects}
      />
      {content}
    </main>
  );
}

export default App;
