function getSettings() {
  try {
    let data = JSON.parse(localStorage.getItem("settings"));
    data.searchLeft = data.count;
    return data;
  } catch {
    console.log("Settings not found in localstorage ");
  }
}

export default getSettings;
