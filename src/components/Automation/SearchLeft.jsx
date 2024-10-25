import React, { useEffect, useState } from "react";

function SearchLeft({ settings }) {
  return (
    <div className="">
      <p className="">Searches Left: {settings.searchLeft}</p>
    </div>
  );
}

export default SearchLeft;
