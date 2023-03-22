import { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [datas, setDatas] = useState(data);
  const value = { datas, setDatas };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataContextProvider;

const data = [
  {
    title: "title 1",
    desc: "this is desc 1",
    st: "active",
  },
  {
    title: "title 2",
    desc: "this is desc 2",
    st: "active",
  },

  {
    title: "title 3",
    desc: "this is desc 3",
    st: "active",
  },

  {
    title: "title 4",
    desc: "this is desc 4",
    st: "active",
  },

  {
    title: "title 5",
    desc: "this is desc 5",
    st: "active",
  },

  {
    title: "title 6",
    desc: "this is desc 6",
    st: "active",
  },
];
