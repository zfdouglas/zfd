import { ContentContainer } from "../Common/ContentContainer/ContentContainer";
import { SocialBar } from "../Common/SocialBar";

export const Contact = () => {
  return (
    <div style={{ marginTop: "5%" }}>
      <ContentContainer header="> Contact">
        <div style={{ color: "#e0e2e6", fontWeight: "600", padding: "2%" }}>
          <p>
            I am always happy to chat. Please feel free to contact me on my
            linkedin, email, or github.
          </p>
        </div>
        <SocialBar />
      </ContentContainer>
    </div>
  );
};
