import { PropsWithChildren } from "react";
import "./ContentContainer.css";
interface ContentContainerProps {
  header: string;
  headerStyle?: any;
  containerStyle?: any;
  containerWidth?: number;
}
export const ContentContainer = ({
  header,
  headerStyle,
  containerStyle,
  children,
  containerWidth,
}: PropsWithChildren<ContentContainerProps>) => {
  return (
    <div
      className="Container"
      style={{ width: containerWidth && `${containerWidth}%` }}
    >
      <div className="ContainerHeader">
        <h1 style={headerStyle ?? headerStyle}>{header}</h1>
      </div>
      {children}
    </div>
  );
};
