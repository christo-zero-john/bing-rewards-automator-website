class GlobalStatsObj {
  constructor() {
    this.deviceCount = 0;
    this.automationsCount = 0;
    this.searchesCount = 0;
    this.pointsMined = 0;
  }
}

function updateGlobalStats() {
  console.log("updateGlobalStats");
}
function fetchGlobalStats() {
  console.log("fetchGlobalStats");
}
function syncGlobalStats() {
  console.log("syncGlobalStats");
}

function getLastSynced() {
  let globalStats = JSON.parse(localStorage.getItem("last-synced"));
  if (globalStats) {
    return globalStats;
  } else {
    let saveLastSynced = new GlobalStatsObj();
    putLastSynced(saveLastSynced);
    return saveLastSynced;
  }
}

function putLastSynced(data) {
  localStorage.setItem("last-synced", JSON.stringify(data));
}

export {
  updateGlobalStats,
  fetchGlobalStats,
  syncGlobalStats,
  getLastSynced,
  putLastSynced,
  GlobalStatsObj,
};
