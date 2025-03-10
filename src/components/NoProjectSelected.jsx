import noProjectImage from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelected({ onStartAddingProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty image project"
        className="w-52 h-52 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-customBlue my-4">
        No Project Selected
      </h2>
      {/*<p className="text-stone-400 mb-4">
        Select a project or get started with a new one
  </p> */}
      <p className="mt-8">
        <Button onClick={onStartAddingProject}>Create new project</Button>
      </p>
    </div>
  );
}
