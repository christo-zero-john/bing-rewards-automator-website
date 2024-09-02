import React,{useState} from "react";

function Stats() {
  const [stats, setStats] = useState({
    visitorCount: 0,
    totalTimesAutomated: 0,
    totalSearches: 0,
    totalPointsMined: 0,
    totalDevices: 0,
  });
  
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
