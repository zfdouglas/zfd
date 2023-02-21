import { PropsWithChildren } from "react";
import "./ContentContainer.css";
interface ContentContainerProps {
  header: string;
  headerStyle?: any;
  containerStyle?: any;
}
export const ContentContainer = ({
  header,
  headerStyle,
  containerStyle,
  children,
}: PropsWithChildren<ContentContainerProps>) => {
  return (
    <div className="Container" style={containerStyle ?? containerStyle}>
      <div className="ContainerHeader">
        <h1 style={headerStyle ?? headerStyle}>{header}</h1>
      </div>
      {children}
    </div>
  );
};
