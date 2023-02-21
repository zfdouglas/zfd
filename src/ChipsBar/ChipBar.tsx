import { About } from "../Copy/About";
import { Chip } from "./Chip";
import "./ChipBar.css";
export const ChipBar = () => {
  return (
    <div className="ChipBar">
      <div className="ChipBarHeader">
        <h1>{">"} SKILLS</h1>
      </div>
      <div className="ChipHolder">
        {About.skills.map((skill) => (
          <Chip skill={skill} />
        ))}
      </div>
    </div>
  );
};
