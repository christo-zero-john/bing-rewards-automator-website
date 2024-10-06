import { useEffect, useRef, useState } from "react";
import getSettings from "../../localstore/getSettings";
import putSettings from "../../localstore/putSettings";
import InputForms from "../inputs/InputForms";
import getJokes from "../../service-vendors/official-jokes-api";
import updateStats from "../Statistics/updateStats";

function Automation(props) {
  // localStorage.clear();

  // Fetch settings from local storage
  if (!getSettings()) {
    console.log("Saving Settings to local storage");
    putSettings({ count: 30, delay: 15 });
  }

  const [settings, changeSettings] = useState(getSettings());
  console.log("settings", settings);

  const [appData, setAppData] = useState({
    automation: props.automationStatus,
  });

  const people = [
    "Yang Kai",
    "Yu Ru Meng",
    "Qu Hua Chang",
    "Ru Meng",
    "Zhu Qing",
    "Xue Yue",
    "Tang san",
    "Xiao Wu",
    "Yu Xiaogang",
    "Hu Liena",
    "Zhu Zhu Qing",
    "Dai Mu Bai",
    "Liu Erlong",
    "Ma Hong Jun",
    "Bi Bidong",
    "Dugu Bo",
    "Xue Beng",
    "Su Yuntao",
    "Xue Qinghe",
    "Bu Le",
    "Ye Zhiqiu",
    "Ning Feng Zhi",
    "Tai Long",
    "Liu Long",
    "Jian Dou Luo",
    "Su Yun Tao",
    "Yu Tianheng",
    "Fei lan De",
    "Xiao Chenyu",
    "Dugu Ya",
  ];

  let urlSet = [];

  useEffect(() => {
    console.log("search left updated");
    if (settings.searchLeft == 0) {
      props.setAutomationStatus(false);
    }
  }, [settings.searchLeft]);

  const startSearchAutomation = async () => {
    // set automation property as true.
    props.setAutomationStatus(true);
    console.log("Starting Search Automation");

    let jokes = new Array();
    jokes = await getJokes(settings.count);
    // console.log(settings);
    // stats.totalTimesAutomated++;
    updateStats(1);
    console.log("Jokes fetched successfully.");

    // Convert all jokes to search parameter format
    for (let x = 0; x < jokes.length; x++) {
      urlSet.push(convertToSearchParameter(jokes[x]));
    }
    console.log("converted to url format.");
    console.log("Sequencing Search Automation");
    sequenceSearchAutomation();
  };

  const convertToSearchParameter = (text) => {
    let textArray = text.split(" ");
    let link = new String("");
    for (let x = 0; x < textArray.length; x++) {
      link += textArray[x] + "+";
    }
    return link;
  };

  const sequenceSearchAutomation = async () => {
    console.log("Started automation with url set.");
    let x = 0;
    const sequence = () => {
      console.log("x ", x);
      changeSettings((prevSettings) => ({
        ...prevSettings,
        searchLeft: settings.count - x,
      }));
      if (x < settings.count) {
        props.iframeRef.current.src = `https://www.bing.com/search?FORM=U523DF&PC=U523&q=${urlSet[x]}?`;
        updateStats(2);
        updateStats(3);
        // stats.totalSearches++;
        // stats.totalPointsMined += 3;
        x++;
        setTimeout(sequence, settings.delay * 1000);
      }
    };
    sequence();
  };

  return (
    <div className="automation">
      <InputForms
        automationStatus={props.automationStatus}
        settings={settings}
        changeSettings={changeSettings}
      />

      <p>Number of Searches Left: {settings.searchLeft}</p>

      <button
        onClick={startSearchAutomation}
        disabled={props.automationStatus}
      >
        START SEARCH AUTOMATION
      </button>
    </div>
  );
}

export default Automation;
