import GlobalStatsCard from "./stats-card";
import deviceImage from "../../images/devices-count.png";
import automationsImage from "../../images/automations-count.png";
import searchesImage from "../../images/searches-count.png";
import pointsMinedImage from "../../images/start-automation.png";
import { useEffect } from "react";

function GlobalStats() {
  let count = {
    deviceCount: 210,
    automationsCount: 2100,
    searchesCount: 2100,
    pointsMined: 2100,
  };

  return (
    <div className="d-flex flex-row overflow-auto no-scrollbar">
      <GlobalStatsCard
        title="devices"
        image={deviceImage}
        count={count.deviceCount}
      />

      <GlobalStatsCard
        title="automations"
        image={automationsImage}
        count={count.automationsCount}
      />

      <GlobalStatsCard
        title="searches"
        image={searchesImage}
        count={count.searchesCount}
      />

      <GlobalStatsCard
        title="pointsMined"
        image={pointsMinedImage}
        count={count.pointsMined}
      />
    </div>
  );
}

export default GlobalStats;
