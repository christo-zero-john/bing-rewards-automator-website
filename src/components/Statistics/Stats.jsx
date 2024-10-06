import { useEffect, useState } from "react";
import getStats from "../../localstore/getStats.js";
import putStats from "../../localstore/putStats.js";
import {
  updateGlobalStats,
  fetchGlobalStats,
} from "../../service-vendors/firebase.js";

function Stats({ automationStatus }) {
  let dummyStats = {
    visitorCount: 1,
    totalTimesAutomated: 0,
    totalSearches: 0,
    totalPointsMined: 0,
    totalDevices: 1,
  };

  useEffect(() => {
    console.log("Re Rendering Stats component");
  }, [automationStatus]);

  const [stats, setStatus] = useState(dummyStats);

  async function setupStats() {
    let data = await fetchGlobalStats();
    // console.log("Data catched: ", data);
    if (!getStats()) {
      console.log("New device detected!!");
      data.visitorCount++;
      data.totalDevices++;
    } else {
      console.log("New visitor detected!!");
      data.visitorCount++;
      let statistics = getStats();
      statistics.visitorCount = data.visitorCount;
      statistics.totalDevices = data.totalDevices;
      data = statistics;
    }
    putStats(data);
    // console.log("New Data: ", data);
    updateGlobalStats(data);
    setStatus(getStats());
  }

  function reRenderStats() {
    console.log("Re Rendering stats component");
    setStatus(getStats());
  }

  useEffect(() => {
    setupStats();
  }, []);

  return (
    <div className="stats">
      <h2>Statistics</h2>
      <p>Total Visitors: {stats.visitorCount || 0} </p>
      <p>Total Automations Performed: {stats.totalTimesAutomated || 0} </p>
      <p>Total Searches performed: {stats.totalSearches || 0} </p>
      <p>Total Points Mined: {stats.totalPointsMined || 0}</p>
      <p>Total devices: {stats.totalDevices || 0}</p>
    </div>
  );
}

export default Stats;
