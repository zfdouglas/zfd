import { ContentContainer } from "../Common/ContentContainer/ContentContainer";
import { PieceBox } from "../Home/PieceBox/PieceBox";

export const Work = () => {
  return (
    <div style={{ marginTop: "5vh" }}>
      <ContentContainer header="> Projects" containerWidth={80}>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <PieceBox
            title={"vDollHouse"}
            description={"A React frontend for a Home Decoration startup"}
            tools={["Typescript", "HTML", "CSS", "Material UI", "React Router"]}
          />
          <PieceBox
            title={"Well Fed API"}
            description={
              "A spring boot api that will serve a future Recipe app, utilizes a MongoDB database"
            }
            tools={["Java", "Spring Boot", "MongoDB"]}
          />
          <PieceBox
            title={"OC Me API"}
            description={
              "A spring boot api that serves a Character Aggregator and Creation app"
            }
            tools={["Java", "Spring Boot", "MongoDB"]}
          />
          <PieceBox
            title={"Be Our Guest"}
            description={"A React frontend Personality Quiz Application"}
            tools={["Javascript", "HTML", "CSS"]}
          />
        </div>
      </ContentContainer>
    </div>
  );
};
