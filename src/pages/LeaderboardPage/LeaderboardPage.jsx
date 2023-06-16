import "./LeaderboardPage.scss"
import logo from "../../assets/icons/logo.svg"

const LeaderboardPage = () => {
    return (
        <section className="leaderboard">
            <h1 className="leaderboard__title">Community</h1>
            <div className="leaderboard__heading-container">
                <img className="leaderboard__logo" src={logo}>

                </img>
                <p className="leaderboard__month">June</p>
                <p className="leaderboard__carbon-emmission">CO2e (Kg)</p>
            </div>
        </section>

    )
}

export default LeaderboardPage