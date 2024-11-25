import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getUserStats } from "./user-stats";

class GlobalStatsObj {
  constructor() {
    this.totalDevices = 0;
    this.totalTimesAutomated = 0;
    this.totalSearches = 0;
    this.totalPointsMined = 0;
    this.visitorsCount = 0;
  }
}

const firebaseConfig = {
  apiKey: "AIzaSyAdvHfhQKpUqKPvkrTV35ISHpHkPbHLBRc",
  authDomain: "bing-search-automator.firebaseapp.com",
  projectId: "bing-search-automator",
  storageBucket: "bing-search-automator.firebasestorage.app",
  messagingSenderId: "1034029659904",
  appId: "1:1034029659904:web:b0b11964dd795db7f8e5e5",
  measurementId: "G-FWD9WLFRJZ",
};

function connectFirestore() {
  let app = initializeApp(firebaseConfig);
  let database = getFirestore(app);
  return database;
}

async function fetchGlobalStats() {
  let database = connectFirestore();
  let globalStatsRef = doc(database, "appData/globalStats");

  let snapshot = await getDoc(globalStatsRef);
  return snapshot.data();
}

async function syncGlobalStats() {
  let database = connectFirestore(0);
  let syncDataRef = doc(database, "appData/tempData");

  let lastSynced = getLastSynced();
  let userStats = getUserStats();
  let globalStats = await fetchGlobalStats();

  // console.log(lastSynced, userStats);
  if (toBeSynced(lastSynced, userStats)) {
    console.log("Initializing data sync");

    let difference = {
      totalTimesAutomated:
        userStats.totalTimesAutomated - lastSynced.totalTimesAutomated,
      totalSearches: userStats.totalSearches - lastSynced.totalSearches,
      totalPointsMined:
        userStats.totalPointsMined - lastSynced.totalPointsMined,
    };

    let syncObject = {
      ...globalStats,
      totalTimesAutomated:
        globalStats.totalTimesAutomated + difference.totalTimesAutomated,
      totalSearches: globalStats.totalSearches + difference.totalSearches,
      totalPointsMined:
        globalStats.totalPointsMined + difference.totalPointsMined,
    };

    console.log(difference, syncObject);

    setDoc(syncDataRef, syncObject).then((res) => {
      console.log("Data synced successfully", res);
    });
  }
}

function toBeSynced(lastSynced, userStats) {
  let temp = {
    totalTimesAutomated: lastSynced.totalTimesAutomated,
    totalSearches: lastSynced.totalSearches,
    totalPointsMined: lastSynced.totalPointsMined,
  };

  if (temp == userStats) {
    console.log("Sync upto date");
    return 0;
  } else {
    console.log("To be synced");
    return 1;
  }
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
  connectFirestore,
  fetchGlobalStats,
  syncGlobalStats,
  getLastSynced,
  putLastSynced,
  GlobalStatsObj,
};
