function getStats() {
  try {
    return JSON.parse(localStorage.getItem("stats"));
  } catch (error) {
    console.log("Stats not found!!");
    return null;
  }
}

export default getStats;
