import { useParams } from "react-router-dom";
import { ProjectDetailedInfoData } from "../Data/Projects";

const ProjectInfo = () => {
  const currentProject = useParams().id;
  const currentProjectInfo = ProjectDetailedInfoData[currentProject];
  return <div className="mt-24">ProjectInfo</div>;
};

export default ProjectInfo;
