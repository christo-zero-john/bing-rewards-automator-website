import { useEffect, useRef, useState } from "react";

function NextSearchIn({ settings, bool }) {
  const timerText = useRef(null);

  // When delay changes update timer as well
  useEffect(() => {}, [settings.delay]);

  // When search left updates
  useEffect(() => {
    if (bool.is_automating) {
      console.log("Automation true");
      let delay = settings.delay;
      let CintervalId = setInterval(() => {
        // console.log(0, timerText.current.textContent);
        timerText.current.innerHTML = delay--;
        if (settings.searchLeft == 0) {
          clearInterval(CintervalId);
        } else if (delay < 0) {
          delay = settings.delay;
        }
      }, 1000);
    } else {
      console.log("Automation false");
    }
  }, [bool.is_automating]);

  return (
    <div className="d-inline-block">
      <p className="timeleft-contdown d-inline-block fs-5 mx-3 text-violet" ref={timerText}>
        0
      </p>
    </div>
  );
}

export default NextSearchIn;
