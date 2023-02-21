import "./ChipBar.css";
interface ChipProps {
  skill: string;
}
export const Chip = (props: ChipProps) => {
  return <div className="Chip">{props.skill}</div>;
};
