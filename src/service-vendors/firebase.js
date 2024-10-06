import firebaseConfig from "../env/firebaseConfig";
import { initializeApp } from "firebase/app";
import { doc, getFirestore } from "firebase/firestore";
import { collection, setDoc, getDoc } from "firebase/firestore";

let app, database;

initializeFirestore();

async function initializeFirestore() {
  app = await initializeApp(firebaseConfig);
  database = await getFirestore(app);
  return database;
}

async function updateGlobalStats(data) {
  console.log("Updating Global Stats in firestore");
  const globalStatsRef = doc(database, "appData/globalStats");
  try {
    await setDoc(globalStatsRef, data);
    console.log("Global Stats Updated Successfully");
  } catch (error) {
    console.log(
      "Failed to update Global Stats in firestore: ",
      new Error(error)
    );
  }
}

async function fetchGlobalStats() {
  console.log("Fetching Global Stats from firestore");
  const globalStatsRef = doc(database, "appData/globalStats");
  try {
    let documentSnapshot = await getDoc(globalStatsRef);
    let data = documentSnapshot.data();
    console.log("Global Stats fetched successfully.");
    data.totalPointsMined = 0;
    data.totalSearches = 0;
    data.totalTimesAutomated = 0;
    return data;
  } catch (error) {
    console.log(
      "Failed to fetch Global Stats from firestore: ",
      new Error(error)
    );
  }
}

export { updateGlobalStats, fetchGlobalStats };
