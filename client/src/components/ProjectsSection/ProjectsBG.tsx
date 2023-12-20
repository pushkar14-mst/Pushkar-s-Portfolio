import "./ProjectsBG.css";

interface ParentProps extends React.PropsWithChildren<{}> {}
const ProjectsBg: React.FC<ParentProps> = ({ children }) => {
  return (
    <>
      <div className="projects-gallary">{children}</div>
    </>
  );
};

export default ProjectsBg;
