import getStats from "../../localstore/get-stats";
import putStats from "../../localstore/put-stats";

// This function is used to update the statistical data and store it to the localstorage.

function updateStats(ctx) {
  switch (ctx) {
    case 1: {
      console.log("Incrementing totalTimesAutomated.");
      let stats = getStats();
      stats.totalTimesAutomated++;
      putStats(stats);
      //   console.log(getStats());
      console.log("Updated Successfully");
      break;
    }
    case 2: {
      console.log("Incrementing totalSearches.");
      let stats = getStats();
      stats.totalSearches++;
      putStats(stats);
      //   console.log(getStats());
      console.log("Updated Successfully");
      break;
    }
    case 3: {
      console.log("Incrementing totalPointsMined.");
      let stats = getStats();
      stats.totalPointsMined += 3;
      putStats(stats);
      //   console.log(getStats());
      console.log("Updated Successfully");
      break;
    }
    case 4: {
      console.log("Incrementing visitorCount.");
      let stats = getStats();
      stats.visitorCount++;
      putStats(stats);
      //   console.log(getStats());
      console.log("Updated Successfully");
      break;
    }
    case 5: {
      console.log("Incrementing totalDevices.");
      let stats = getStats();
      stats.totalDevices++;
      putStats(stats);
      //   console.log(getStats());
      console.log("Updated Successfully");
      break;
    }
  }
}

export default updateStats;
