import React, { useEffect, useState } from "react";
import twoCoins from "../../../images/two-coins.png";
import "../../styles.css";
import { fetchProfileByProfileId } from "../../../store/profileSlice";
import { Button } from "react-bootstrap";
import present from "../../../images/present.png";
import { EventParticipationInfo } from "../../pages/home/EventParticipationInfo";
import { useSelector } from "react-redux";

// shows profile information on state change
export const ProfileInfo = ({ profile, videoPlay }) => {

    const participation = useSelector((state) => state.participation ? state.participation : null)

  const [progressBarExp, setProgressBarExp] = useState("0%");

  //this updates the exp bar 
  useEffect(() => {
    if (profile === null) {
    } else if (profile != null) {
      //this has two parts. First it checks whether user is less than 100 exp and updates bar based on that, then if user is over 100 exp it updates based on the tenth digit of exp
      if (profile.profileExp <= 100) {
        console.log('if ran');
        if ((profile.profileExp + "").indexOf("00") === 0) {
          setProgressBarExp("100%");
        } else if ((profile.profileExp + "").indexOf("90") === 0) {
          setProgressBarExp("90%");
        } else if ((profile.profileExp + "").indexOf("80") === 0) {
          setProgressBarExp("80%");
        } else if ((profile.profileExp + "").indexOf("70") === 0) {
          setProgressBarExp("70%");
        } else if ((profile.profileExp + "").indexOf("60") === 0) {
          setProgressBarExp("60%");
        } else if ((profile.profileExp + "").indexOf("50") === 0) {
          setProgressBarExp("50%");
        } else if ((profile.profileExp + "").indexOf("40") === 0) {
          setProgressBarExp("40%");
        } else if ((profile.profileExp + "").indexOf("30") === 0) {
          setProgressBarExp("30%");
        } else if ((profile.profileExp + "").indexOf("20") === 0) {
          setProgressBarExp("20%");
        } else if ((profile.profileExp + "").indexOf("10") === 0) {
          setProgressBarExp("10%");
        }
      } else {  
        console.log('else ran');
        if ((profile.profileExp + "").indexOf("00", 1) >= 0) {
          setProgressBarExp("100%");
        } else if ((profile.profileExp + "").indexOf("90", 1) >= 0) {
          setProgressBarExp("90%");
        } else if ((profile.profileExp + "").indexOf("80", 1) >= 0) {
          setProgressBarExp("80%");
        } else if ((profile.profileExp + "").indexOf("70", 1) >= 0) {
          setProgressBarExp("70%");
        } else if ((profile.profileExp + "").indexOf("60", 1) >= 0) {
          setProgressBarExp("60%");
        } else if ((profile.profileExp + "").indexOf("50", 1) >= 0) {
          setProgressBarExp("50%");
        } else if ((profile.profileExp + "").indexOf("40", 1) >= 0) {
          setProgressBarExp("40%");
        } else if ((profile.profileExp + "").indexOf("30", 1) >= 0) {
          setProgressBarExp("30%");
        } else if ((profile.profileExp + "").indexOf("20", 1) >= 0) {
          setProgressBarExp("20%");
        } else if ((profile.profileExp + "").indexOf("10", 1) >= 0) {
          setProgressBarExp("10%");
        }
      }
    }
  }, [videoPlay, profile, progressBarExp]);

  if (profile === null) {
    return <></>;
  } else if (profile != null) {
    return (
      <>
        <button
          type="button"
          className="btn btn-dark position-relative profileUserNameText"
        >
          <span>
            <img src={profile.profileAvatarUrl} alt={"Profile Avatar"} />
          </span>
          {profile.profileUserName}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
            {participation === null ? (
              <></>
            ) : participation.participationCompleted === 1 &&
              participation.participationCoinReward === 0 ? (
              <img
                className="eventImage"
                src={present}
                alt={"Present"}
                width={75}
                height={75}
              />
            ) : (
              profile.profileLevel
            )}
          </span>
        </button>
        <div className="progress progressLevel ms-1">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated  progressText"
            style={{ width: progressBarExp }}
          >
            {profile.profileExp} Exp Points
          </div>
        </div>
        <p className="coinText">
          <img src={twoCoins} width={50} height={50} alt="Coins" />
          {profile.profileCoins}
        </p>
      </>
    );
  }
};
