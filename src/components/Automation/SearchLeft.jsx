import React, { useEffect, useState, useRef } from "react";

function SearchLeft({ settings }) {
  const [countDown, setCountDown] = useState(settings.delay);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    if (countDown > 0) {
      intervalIdRef.current = setInterval(() => {
        setCountDown((prevCount) => prevCount - 1);
      }, 1000);
    }

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [countDown]);

  useEffect(() => {
    setCountDown(settings.delay);
  }, [settings.delay]);

  return (
    <div>
      <p>Number of Searches Left: {settings.searchLeft}</p>
      <p>Next Search In {countDown} sec</p>
    </div>
  );
}

export default SearchLeft;
