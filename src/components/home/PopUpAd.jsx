import { useEffect, useState } from "react";

const PopUpAd = () => {
  // how many time will pop up ad show | default is 1
  const [totalTime, setTotalTime] = useState(1);
  // pop up ad will become true after page loaded
  const [popup, setPopUp] = useState(false);

  const handlePopUp = () => {
    // if condition execute if pop up has shown atleast one time
    if (localStorage.getItem("showedTime")) {
      // popup will be show if it is showed less than 3 times
      if (localStorage.getItem("showedTime") < 3) {
        return (document.querySelector(".popup").style.display = "block");
      } else {
        // pop up will be false if it is show more than 2 timers
        setPopUp(false);
        return;
      }
    }
    // usually the pop up will be shown when a page is loaded
    document.querySelector(".popup").style.display = "block";
  };

  useEffect(() => {
    // popup become true when page is loaded | default is false
    setPopUp(true);
    // after page loaded handle pop up called for handling the pop up
    // handle pop up make sure that the pop up should be shown only 2 times
    handlePopUp();

    // if pop up ad is showed atleast one time
    if (localStorage.getItem("showedTime")) {
      // how many times pop up is shown
      let timeShow = localStorage.getItem("showedTime");
      // set total time pop up is hown
      setTotalTime(timeShow);
    } else {
      // register local storage showed time varible with value 1
      localStorage.setItem("showedTime", 1);
    }
  }, []);

  // to remove the popup
  const removePopUp = () => {
    // pop up will be removed form dom by setting display nonw
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".pop-up-transparent-bg").style.display = "none";

    // when user click cancel set pop up false
    setPopUp(false);
    // increase the time of pop up shown
    let totalTime = parseInt(localStorage.getItem("showedTime"));
    localStorage.setItem("showedTime", (totalTime += 1));
  };

  return (
    <>
      {/* pop up will be shown if it is shown less than 3 times */}
      {totalTime < 3 && (
        <>
          {/* pop up transparent bg */}
          <div className={popup && "pop-up-transparent-bg"}></div>
          <div className="popup">
            {/* cancel button */}
            <button onClick={removePopUp} className="popup-btn" id="close">
              &times;
            </button>
            {/* pop up ad */}
            <img src="/img/promotion.png" alt="promotion" />
          </div>
        </>
      )}
    </>
  );
};

export default PopUpAd;
