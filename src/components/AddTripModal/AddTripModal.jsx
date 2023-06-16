import "./AddTripModal.scss";
import carImage from "../../assets/images/car.svg";
import { useState } from "react";
// import closeIcon from "../../assets/Icons/close-24px.svg";

const AddTripModal = ({ onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };
  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <div className="modal__upper">
          <div className="modal__text">
            <img className="car" src={carImage}></img>
            <div className="travel-method-text">Select travel method</div>
            <div className="buttons">
              <div className="buttons__row">
                <button
                  className={isActive ? "active button" : "button"}
                  onClick={handleClick}
                >
                  Driving
                </button>
                <button className="button">Bus</button>
                <button className="button">Bike</button>
              </div>
              <div className="buttons__row">
                <button className="button">Rideshare</button>
                <button className="button">CarPool</button>
                <button className="button">Subway</button>
              </div>
            </div>
            <div className="travel-method-stats">
              <div className="column">
                <div className="travel-method-stats__title">Car type</div>
                <div className="travel-method-stats__stat">
                  Honda Civic 2016
                </div>
              </div>
              <div className="column">
                <div className="travel-method-stats__title">Distance (KM)</div>
                <div className="travel-method-stats__stat">30.00 km</div>
              </div>
            </div>
            <button
              className="save-button"
              onClick={() => {
                onClose();
              }}
            >
              Save Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTripModal;
