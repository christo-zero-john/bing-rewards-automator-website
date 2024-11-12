function putSettings(data) {
  localStorage.setItem("settings", JSON.stringify(data));
}

export default putSettings;
