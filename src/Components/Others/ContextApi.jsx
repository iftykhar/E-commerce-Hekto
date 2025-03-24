import React, { createContext, useEffect, useState } from "react";
import axios, { Axios } from "axios";

const ApiDataContext = createContext();

const ContextApi = ({ children }) => {
  let [infos, setinfos] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/?limit=0")
      .then((data) => setinfos(data.data.products));
  }, []);

  return (
    <ApiDataContext.Provider value={infos}>{children}</ApiDataContext.Provider>
  );
};

export { ApiDataContext, ContextApi };
