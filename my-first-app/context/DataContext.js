import { createContext, useState, useContext } from "react";

const DataContext = createContext({ loading: () => "", setLoading: () => "" });
export const useDataContext = () => useContext(DataContext);

const DataContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState();
  const values = { loading, setLoading, auth, setAuth };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
