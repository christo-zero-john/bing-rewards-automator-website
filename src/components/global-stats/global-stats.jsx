import GlobalStatsCard from "./stats-card";
import deviceImage from "../../images/devices-count.png";
import automationsImage from "../../images/automations-count.png";
import searchesImage from "../../images/searches-count.png";
import totalPointsMinedImage from "../../images/start-automation.png";
import { useEffect, useState } from "react";
import {
  fetchGlobalStats,
  syncGlobalStats,
  getLastSynced,
  putLastSynced,
  GlobalStatsObj,
} from "../../modules/manage/global-stats";

function GlobalStats() {
  const [globalStats, setGlobalStats] = useState({
    totalDevices: 0,
    totalTimesAutomated: 0,
    totalSearches: 0,
    totalPointsMined: 0,
  });

  useEffect(() => {
    let lastSynced = getLastSynced();
    // console.log(lastSynced);
    fetchGlobalStats().then((data) => {
      // console.log(data);
      setGlobalStats(data);
    });
  }, []);

  return (
    <div className="d-flex flex-row overflow-auto no-scrollbar">
      <GlobalStatsCard
        title="totalPointsMined"
        image={totalPointsMinedImage}
        count={globalStats.totalPointsMined}
      />

      <GlobalStatsCard
        title="devices"
        image={deviceImage}
        count={globalStats.totalDevices}
      />

      <GlobalStatsCard
        title="automations"
        image={automationsImage}
        count={globalStats.totalTimesAutomated}
      />

      <GlobalStatsCard
        title="searches"
        image={searchesImage}
        count={globalStats.totalSearches}
      />
    </div>
  );
}

export default GlobalStats;
