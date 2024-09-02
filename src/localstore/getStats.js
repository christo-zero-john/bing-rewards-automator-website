function getStats() {
  return JSON.parse(localStorage.getItem("stats"));
}

export default getStats;
