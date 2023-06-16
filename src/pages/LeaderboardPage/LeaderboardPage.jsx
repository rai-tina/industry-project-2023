import "./LeaderboardPage.scss";

import logo from "../../assets/icons/logo.svg";
import emily from "../../assets/images/emily-greenway.svg";
import jen from "../../assets/images/jen-rose.svg";
import jenBar from "../../assets/images/jen-rose-bar.svg";
import jessie from "../../assets/images/jese-framer.svg";
import jessieBar from "../../assets/images/jese-framer-bar.svg";
import joan from "../../assets/images/joan-lanster.svg"
import joanBar from "../../assets/images/joan-lanster-bar.svg"
import jon from "../../assets/images/jon-marshall.svg";
import jonBar from "../../assets/images/jon-marshall-bar.svg";


import Footer from "../../components/Footer/Footer";


const LeaderboardPage = () => {
    return (
        <>
            <section className="leaderboard">

                <h1 className="leaderboard__title">Community</h1>

                <div className="leaderboard__heading-container">
                    <img className="leaderboard__logo" src={logo} />
                    <p className="leaderboard__month">June</p>
                    <p className="leaderboard__carbon-emmission">CO2e(Kg)</p>
                </div>

                <p className="leaderboard__caption">Have some fun competing with your friends!</p>

                <div className="leaderboard__user-container">
                    <img className="leaderboard__avatar" src={emily} />
                    <div className="leaderboard__details-container">
                        <div className="leaderboard__user-details">
                            <h2 className="leaderboard__name">Emily Greenway</h2>
                            <p className="leaderboard__user-emmission">24kg</p>
                        </div>
                        <div className="leaderboard__bar">
                            <div className="leaderboard__progress"></div>
                        </div>
                    </div>
                </div>

                <div className="leaderboard__user-container">
                    <img className="leaderboard__avatar" src={jen} />
                    <div className="leaderboard__details-container">
                        <div className="leaderboard__user-details">
                            <h2 className="leaderboard__name">Jen Rosenbaum</h2>
                            <p className="leaderboard__user-emmission">65kg</p>
                        </div>
                        <img className="leaderboard__progress-bar" src={jenBar} />
                    </div>
                </div>

                <div className="leaderboard__user-container">
                    <img className="leaderboard__avatar" src={jon} />
                    <div className="leaderboard__details-container">
                        <div className="leaderboard__user-details">
                            <h2 className="leaderboard__name">Jon Marshall</h2>
                            <p className="leaderboard__user-emmission">80kg</p>
                        </div>
                        <img className="leaderboard__progress-bar" src={jonBar} />
                    </div>
                </div>

                <div className="leaderboard__user-container">
                    <img className="leaderboard__avatar" src={joan} />
                    <div className="leaderboard__details-container">
                        <div className="leaderboard__user-details">
                            <h2 className="leaderboard__name">Joan Lanster</h2>
                            <p className="leaderboard__user-emmission">85kg</p>
                        </div>
                        <img className="leaderboard__progress-bar" src={joanBar} />
                    </div>
                </div>

                <div className="leaderboard__user-container">
                    <img className="leaderboard__avatar" src={jessie} />
                    <div className="leaderboard__details-container">
                        <div className="leaderboard__user-details">
                            <h2 className="leaderboard__name">Jessie Framer</h2>
                            <p className="leaderboard__user-emmission">90kg</p>
                        </div>
                        <img className="leaderboard__progress-bar" src={jessieBar} />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default LeaderboardPage;