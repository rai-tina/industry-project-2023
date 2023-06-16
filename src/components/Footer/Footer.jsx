import "./Footer.scss";
import homeIcon from "../../assets/icons/home.svg";
import community from "../../assets/icons/community.svg";
import chats from "../../assets/icons/chats.svg";
import profile from "../../assets/icons/profile.svg";

function Footer() {
  return (
    <div className="footer">
      <a className="footer__home">
        <img
          className="footer__home-icon"
          src={homeIcon}
          alt="icon of a home"
        />
      </a>
      <a className="footer__community">
        <img
          className="footer__community-icon"
          src={community}
          alt="icon of a community"
        />
      </a>
      <a className="footer__chats">
        <img
          className="footer__chats-icon"
          src={chats}
          alt="icon of a chat bubble"
        />
      </a>
      <a className="footer__profile">
        <img
          className="footer__profile-icon"
          src={profile}
          alt="icon of a profile "
        />
      </a>
    </div>
  );
}

export default Footer;
