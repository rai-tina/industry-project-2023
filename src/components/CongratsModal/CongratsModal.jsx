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
            <img className="car" src={trophyImage}></img>
            <div className="congrats-bottom">
              <button className="save-button" onClick={handleClick}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratsModal;
