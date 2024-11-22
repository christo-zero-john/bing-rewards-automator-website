import { useEffect, useRef } from "react";
import NextSearchIn from "./next-search-in";

function MiningStats({ settings, bool }) {
  const estimatedTimeRef = useRef(null);
  let estimatedTime = calculateEstimatedTime();

  function calculateEstimatedTime() {
    return [
      Math.floor((settings.count * settings.delay) / 60),
      (settings.count * settings.delay) % 60,
    ];
  }

  useEffect(() => {
    estimatedTime = calculateEstimatedTime();
  }, [settings.searchLeft]);

  useEffect(() => {
    if (bool.is_automating) {
      let intervalId = setInterval(() => {
        estimatedTime[1]--;
        if (estimatedTime[1] < 0) {
          estimatedTime[0]--;
          estimatedTime[1] = 60;
        }
        estimatedTimeRef.current.textContent =
          "Estimated Time: " +
          estimatedTime[0] +
          "mins : " +
          estimatedTime[1] +
          "secs";
        if (estimatedTime[0] == 0) {
          clearInterval(intervalId);
        }
      }, 1000);
    }
  }, [bool.is_automating]);

  return (
    <div className="col-11 col-md-5 m-4 mining-stats">
      <h2 className="text-center fw-100 bg-dark mining-title">Mining</h2>
      <NextSearchIn settings={settings} bool={bool} />
      <p className="">Search Left: {settings.searchLeft}</p>
      <p className="" ref={estimatedTimeRef}>
        Estimated Time: {estimatedTime[0]} mins : {estimatedTime[1]} secs
      </p>
    </div>
  );
}

export default MiningStats;
