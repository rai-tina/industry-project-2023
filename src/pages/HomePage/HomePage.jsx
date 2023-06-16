import "./HomePage.scss";
import iphoneBackground from "../../assets/images/iphoneBackground.svg";
import notification from "../../assets/images/notification.svg";

export default function HomePage() {
  return (
    <div className="home-page">
      <img
        className="home-page__background"
        src={iphoneBackground}
        alt="image of the background of an iphone"
      ></img>
      <img
        className="home-page__notification"
        src={notification}
        alt="image of notification message"
      ></img>
    </div>
  );
}
