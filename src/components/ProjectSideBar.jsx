import Button from './Button';

export default function ProjectSideBar({
  onStartAddingProject,
  projects,
  onSelectedProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-customBlue text-customeBeige md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-customBeige">
        Your Projects
      </h2>
      <div>
        {/* <Button onClick={onStartAddingProject}> + Add Project</Button> */}
        <ul className="mt-8">
          {projects.map((project) => {
            let cssClasses =
              'w-full text-left px-2 py-1 rounded-sm my-1 bg-customeBeige hover:text-stone-200 hover:bg-stone-800';
            if (project.id === selectedProjectId) {
              cssClasses += ' bg-customBeige text-stone-200';
            } else {
              cssClasses += ' text-customBeige';
            }

            return (
              <li key={project.id}>
                <button
                  onClick={() => onSelectedProject(project.id)}
                  className={cssClasses}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
