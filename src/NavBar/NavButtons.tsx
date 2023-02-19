interface NavButtonProps {
  backgroundColor?: string;
  textColor?: string;
  title: string;
  onClick: () => void;
}
export const NavButton = (props: NavButtonProps) => {
  const { backgroundColor, textColor, title, onClick } = props;
  return (
    <button
      style={{
        color: textColor && textColor,
        backgroundColor: backgroundColor && backgroundColor,
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
