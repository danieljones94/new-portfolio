import TimeLineImage from "./TimeLineImage";
import { Timeline, Events } from "@merc/react-timeline";

const ProjectsTimeLine = () => {
  return (
    <Timeline>
      <Events>
        <TimeLineImage />
        <TimeLineImage />
        <TimeLineImage />
        <TimeLineImage />
      </Events>
    </Timeline>
  );
};

export default ProjectsTimeLine;
