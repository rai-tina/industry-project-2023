import "./CongratsModal.scss";
import trophyImage from "../../assets/images/trophy.svg";
import { useNavigate } from "react-router-dom";

const CongratsModal = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/leaderboard");
  }

  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <div className="modal__upper">
          <div className="modal__text">
            <img className="trophy" src={trophyImage}></img>
            <div className="congrats-bottom">
              <div className="congrats-bottom__title">Congrats Emily!</div>
              <div className="congrats-bottom__text">
                Thank you for logging your trip. Check out your score on the
                community page!
              </div>
              <div className="button-wrapper">
                <button className="continue-button" onClick={handleClick}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratsModal;
