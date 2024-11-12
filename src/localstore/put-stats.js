function putStats(data) {
  localStorage.setItem("stats", JSON.stringify(data));
}

export default putStats;
