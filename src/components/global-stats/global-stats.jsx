import GlobalStatsCard from "./stats-card";
import deviceImage from "../../images/devices-count.png";
import automationsImage from "../../images/automations-count.png";
import searchesImage from "../../images/searches-count.png";
import pointsMinedImage from "../../images/start-automation.png";
import { useEffect, useState } from "react";
import {
  updateGlobalStats,
  fetchGlobalStats,
  syncGlobalStats,
  getLastSynced,
  putLastSynced,
  GlobalStatsObj,
} from "../../modules/manage/global-stats";

function GlobalStats() {
  const [globalStats, setGlobalStats] = useState({
    deviceCount: 210,
    automationsCount: 2100,
    searchesCount: 2100,
    pointsMined: 2100,
  });

  useEffect(() => {
    let temp = getLastSynced();
    console.log(temp);
    setGlobalStats(temp);
  }, []);

  return (
    <div className="d-flex flex-row overflow-auto no-scrollbar">
      <GlobalStatsCard
        title="devices"
        image={deviceImage}
        globalStats={globalStats.deviceCount}
      />

      <GlobalStatsCard
        title="automations"
        image={automationsImage}
        globalStats={globalStats.automationsCount}
      />

      <GlobalStatsCard
        title="searches"
        image={searchesImage}
        globalStats={globalStats.searchesCount}
      />

      <GlobalStatsCard
        title="pointsMined"
        image={pointsMinedImage}
        globalStats={globalStats.pointsMined}
      />
    </div>
  );
}

export default GlobalStats;
