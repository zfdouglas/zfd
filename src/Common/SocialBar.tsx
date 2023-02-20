import "./SocialBar.css";
import li from "../assets/li.png";
import gh from "../assets/gh.png";
import email from "../assets/email.png";
export const SocialBar = () => {
  return (
    <div className="SocialMediaBar">
      <a href="https://www.linkedin.com/in/zachary-douglas/">
        <img src={li} alt="linkedin logo"></img>
      </a>
      <a href="https://github.com/zfdouglas">
        <img src={gh} alt="github logo"></img>
      </a>
      <a href="mailto: zacharyfinndouglas@gmail.com">
        <img src={email} alt="email icon"></img>
      </a>
    </div>
  );
};
