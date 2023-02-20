import me from "../assets/mecropped.jpg";
import { SocialBar } from "../Common/SocialBar";
import { About as about } from "../Copy/About";

import "./About.css";
export const About = () => {
  return (
    <div>
      <div className="BasicBio">
        <div className="BioPhoto">
          <img src={me} alt="Zack at La Jolla" />
        </div>
        <div className="BioSummary">
          <h1>{about.name}</h1>
          <div
            className="BioBlurb"
            dangerouslySetInnerHTML={{ __html: about.blurb }}
          ></div>
          <SocialBar />
        </div>
      </div>
    </div>
  );
};
