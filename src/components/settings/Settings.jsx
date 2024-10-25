import React from "react";
import InputForms from "../inputs/InputForms";

function Settings({ automationStatus, settings, changeSettings }) {
  return (
    <InputForms
      automationStatus={automationStatus}
      settings={settings}
      changeSettings={changeSettings}
    />
  );
}

export default Settings;
