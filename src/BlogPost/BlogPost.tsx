import { ContentContainer } from "../Common/ContentContainer/ContentContainer";
import { BlogPostsType } from "../Copy/Blog";

interface BlogPostProps {
  post: BlogPostsType;
}
export const BlogPost = (props: BlogPostProps) => {
  const { header, content, timePosted, tags } = props.post;
  return (
    <ContentContainer header={`> ${header}`} containerWidth={60}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {content}
        <footer
          style={{
            color: "#63B8FF",
            display: "flex",
            flexDirection: "row",
            borderTop: "3px solid #2d333e",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "2%",
              flexGrow: 1,
            }}
          >
            <strong>Tags: &nbsp;</strong>
            <div style={{ color: "#98CBFE" }}> {tags.join(", ")}</div>
          </div>
          <div style={{ padding: "2%", flexGrow: 1, textAlign: "right" }}>
            <strong>Date:</strong> {timePosted}
          </div>
        </footer>
      </div>
    </ContentContainer>
  );
};
