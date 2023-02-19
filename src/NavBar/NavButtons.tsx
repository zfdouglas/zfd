import { Link } from "react-router-dom";

interface NavButtonProps {
  backgroundColor?: string;
  textColor?: string;
  title: string;
  url: string;
}
export const NavButton = (props: NavButtonProps) => {
  const { backgroundColor, textColor, title, url } = props;
  return (
    <Link to={url}>
      <button
        style={{
          color: textColor && textColor,
          backgroundColor: backgroundColor && backgroundColor,
        }}
      >
        {title}
      </button>
    </Link>
  );
};
