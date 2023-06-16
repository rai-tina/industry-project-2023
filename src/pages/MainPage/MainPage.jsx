// Import Styling
import "./MainPage.scss";

// Import Images
import userMohan from "../../assets/images/Mohan-muruge.jpg";

// Import Icons
import cloud from "../../assets/icons/cloud-svg.svg";

export default function MainPage() {
  return (
    <>
      <main className="main">
        <div className="main__welcome-content">
          <div className="main__menu">
            <hr />
            <hr />
            <hr />
          </div>
          <img src={userMohan} alt="mohan" className="main__user" />
          <img src={userMohan} alt="logo" className="main__logo" />
        </div>

        <h1 className="main__welcome-text">Welcome back Emily!</h1>

        <div className="main__savings">
          <h2 className="main__savings-title">C02 Saved</h2>
          <div className="main__savings-stats">
            <div className="main__savings-pie">84% Compared to last month</div>
            <div className="main__savings-emission">
              <img src={cloud} alt="cloud" className="main__savings-icon" />
              Current emission{" "}
              <span className="main__savings-amount">24kg</span>
            </div>

            <div className="main__savings-emission">
              <img src={cloud} alt="cloud" className="main__savings-icon" />
              Last months emission{" "}
              <span className="main__savings-amount">24kg</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
