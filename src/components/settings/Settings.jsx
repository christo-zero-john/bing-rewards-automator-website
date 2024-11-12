import React from "react";
import InputForms from "../inputs/input-forms";

function Settings({ automationStatus, settings, updateSettings }) {
  return (
    <InputForms
      automationStatus={automationStatus}
      settings={settings}
      updateSettings={updateSettings}
    />
  );
}

export default Settings;
