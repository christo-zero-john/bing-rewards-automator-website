import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Automation(props) {
  console.log(props);

  let stats = useState({
    visitorCount: 0,
    totalTimesAutomated: 0,
    totalSearches: 0,
    totalPointsMined: 0,
    totalDevices: 0,
  });

  let searchLeft = 0;

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

  const startSearchAutomation = async () => {
    console.log("Starting Search Automation");
    let jokes = new Array();
    jokes = await getJokes(props.settings.settings.count);
    console.log(props.settings.settings);
    stats.totalTimesAutomated++;

    console.log(jokes);
    for (let x = 0; x < jokes.length; x++) {
      jokes[x] = convertToUrl(jokes[x]);
    }
    console.log("converted to url format", jokes);
    urlSet = jokes;
    console.log("Sequencing Search Automation");
    sequenceSearchAutomation();
  };

  const getJokes = async (num) => {
    console.log("Fetching Jokes from Jokes API");

    let link = `https://official-joke-api.appspot.com/jokes/random/${num || 2}`;
    console.log(link);
    let response = await fetch(link);
    let data = await response.json();
    let jokes = new Array();
    for (let i = 0; i < data.length; i++) {
      jokes.push(data[i].setup + " " + data[i].punchline);
    }
    return jokes;
  };

  const convertToUrl = (text) => {
    let textArray = text.split(" ");
    let link = new String("");
    for (let x = 0; x < textArray.length; x++) {
      link += textArray[x] + "+";
    }
    return link;
  };

  const sequenceSearchAutomation = async () => {
    console.log("Started with url set", urlSet);
    let x = 0;
    const sequence = () => {
      if (x < urlSet.length) {
        props.iframeRef.current.src = `https://www.bing.com/search?q=${urlSet[x]}&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=bing+automator+websit&sc=8-21&sk=&cvid=0DE08CFD7AE74266A2FE8C42FF1644AA&ghsh=0&ghacc=0&ghpl=`;
        searchLeft--;
        stats.totalSearches++;
        stats.totalPointsMined += 3;
        x++;
        setTimeout(sequence, props.settings.settings.delay * 1000);
      }
    };
    sequence();
  };

  return (
    <div className="automation">
      <p>Number of Searches: {props.settings.settings.count}</p>
      <p>Number of Searches Left: {searchLeft}</p>
      <p>Delay Between each Search:{props.settings.settings.delay} seconds</p>

      <button onClick={() => startSearchAutomation()}>
        START SEARCH AUTOMATION
      </button>
      <p>You can change the default values below</p>
      <input
        type="text"
        placeholder="Enter count"
        onChange={(e) => {
          console.log("changed count to ", e.target.value);
          props.settings.changeSettings((currentSettings) => ({
            ...currentSettings,
            count: e.target.value,
          }));
        }}
      />
      <input
        type="text"
        placeholder="Enter delay in seconds"
        onChange={(e) => {
          console.log("changed delay to ", e.target.value, "seconds");
          props.settings.changeSettings((currentSettings) => ({
            ...currentSettings,
            delay: e.target.value,
          }));
        }}
      />
    </div>
  );
}

export default Automation;
