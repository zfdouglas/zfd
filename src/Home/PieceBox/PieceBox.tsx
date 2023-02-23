import react, { ReactNode } from "react";
import "./PieceBox.css";
import Code from "../../assets/code.png";
import { Chip } from "../../ChipsBar/Chip";
export interface PieceBoxProps {
  title: string;
  description: string;
  link?: string;
  image?: ReactNode;
  tools: string[];
}
export const PieceBox = (props: PieceBoxProps) => {
  const { title, description, link, image, tools } = props;
  return (
    <div className="PieceBox">
      <div className="Header">
        <a href={link}>
          <img src={Code} alt="code icon" />
        </a>
        <h3>{title}</h3>
      </div>
      <div className="Description">{description}</div>
      {link ? link : null}
      <footer>
        <strong>Technologies: </strong>
        {tools.map((item) => (
          <Chip skill={item} />
        ))}
      </footer>
    </div>
  );
};
