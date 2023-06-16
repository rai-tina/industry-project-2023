// Import Styling
import "./MainPage.scss";

// Import Images

// Import Icons
import cloud from "../../assets/icons/cloud-svg.svg";
import emily from "../../assets/images/emily-greenway.svg";
import logo from "../../assets/icons/logo.svg";
import lightbulb from "../../assets/icons/lightbulb.svg";
import bike from "../../assets/icons/bike.svg";
import AddTripModal from "../../components/AddTripModal/AddTripModal";
import CongratsModal from "../../components/CongratsModal/CongratsModal";
import { useState } from "react";

// Import components
import Footer from "../../components/Footer/Footer";

export default function MainPage() {
  const [showAddTripModal, setShowAddTripModal] = useState(false);
  const [showCongratsModal, setShowCongratsModal] = useState(false);

  const openAddTripModal = () => {
    setShowAddTripModal(true);
  };

  const openCongratsModal = () => {
    setShowAddTripModal(false);
    setShowCongratsModal(true);
  };

  return (
    <>
      <main className="main">
        <div className="main__welcome-content">
          <div className="main__menu">
            <hr className="main__menu-hr" />
            <hr className="main__menu-hr" />
            <hr className="main__menu-hr" />
          </div>
          <img src={emily} alt="mohan" className="main__user" />
          <img src={logo} alt="logo" className="main__logo" />
        </div>

        <h1 className="main__welcome-text">Welcome back Emily!</h1>

        <div className="main__savings" onClick={() => openAddTripModal()}>
          <h2 className="main__savings-title">CO2 Saved</h2>
          <div className="main__savings-stats">
            <div className="main__savings-pie">
              <span className="main__savings-percent">84%</span>

              <span className="main__savings-compared">
                Compared to last month
              </span>
            </div>

            <div className="main__savings-emissions">
              <div className="main__savings-emission">
                <img src={cloud} alt="cloud" className="main__savings-icon" />

                <div className="main__savings-message">
                  <span className="main__savings-text">Current emission</span>
                  <span className="main__savings-amount">24kg</span>
                </div>
              </div>

              <div className="main__savings-emission">
                <img src={cloud} alt="cloud" className="main__savings-icon" />

                <div className="main__savings-message">
                  <span className="main__savings-text">
                    Last month's emission
                  </span>
                  <span className="main__savings-amount">24kg</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main__dyk">
          <div className="main__dyk-header">
            <img
              src={lightbulb}
              alt="lightbulb"
              className="main__dyk-lightbulb"
            />
            <h2 className="main__dyk-title">Did you know?</h2>
          </div>

          <div className="main__dyk-container">
            <div className="main__dyk-content">
              <span className="main__dyk-fact">
                Your latest trip, if on a bicycle would have shortened your time
                by 15 min. and reduced your CO2 emissions by 10kg.
              </span>
              <img src={bike} alt="bike" className="main__dyk-icon" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {showAddTripModal && (
        <AddTripModal
          onClose={openCongratsModal}
          // title={selectedWarehouse.warehouse_name}
          // onClose={closeModal}
          // source={"warehouse"}
        >
          <div className="modal__buttons">
            <button
              className="modal__btn modal__btn--cancel"
              // onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className="modal__btn modal__btn--delete"
              // onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </AddTripModal>
      )}
      {showCongratsModal && (
        <CongratsModal
          // title={selectedWarehouse.warehouse_name}
          // onClose={closeModal}
          source={"warehouse"}
        >
          <div className="modal__buttons">
            <button
              className="modal__btn modal__btn--cancel"
              // onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className="modal__btn modal__btn--delete"
              // onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </CongratsModal>
      )}
    </>
  );
}
