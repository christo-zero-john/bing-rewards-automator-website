import { useState } from "react";
import NextSearchIn from "./next-search-in";

function MiningStats({ settings, handleSearchComplete }) {
  const [timeLeft, setTimeLeft] = useState(0);
  function calculateEstimatedTime() {
    return "0 mins 0 secs";
  }

  return (
      <div className="col-11 col-md-5 mt-4">
          <h2 className="text-center fw-100">Mining</h2>
      <NextSearchIn
        settings={settings}
        onSearchComplete={handleSearchComplete}
      />
      <p className="">Search Left: {settings.searchLeft}</p>
      <p className="">Estimated Time: {calculateEstimatedTime()}</p>
    </div>
  );
}

export default MiningStats;
