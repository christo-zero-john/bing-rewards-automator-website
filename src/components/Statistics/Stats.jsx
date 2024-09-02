import React, { useState } from "react";
import getStats from "../../localstore/getStats";
import putStats from "../../localstore/putStats";

function Stats() {
  if (!getStats()) {
    console.log("Stats not find: Ssaving stats to local storage");
    putStats({
      visitorCount: 0,
      totalTimesAutomated: 0,
      totalSearches: 0,
      totalPointsMined: 0,
      totalDevices: 0,
    });
  }
  let statistics = getStats();

  const [stats, setStats] = useState(statistics);

  return (
    <div className="stats">
      <h2>Statistics</h2>
      <p>Total Visitors: {stats.visitorCount} </p>
      <p>Total Automations Performed: {stats.totalTimesAutomated} </p>
      <p>Total Searches performed: {stats.totalSearches} </p>
      <p>Total Points Mined: {stats.totalPointsMined}</p>
      <p>Total devices: {stats.totalDevices}</p>
    </div>
  );
}

export default Stats;
