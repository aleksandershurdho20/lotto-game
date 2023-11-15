import  { createContext, useContext, useState } from 'react';
import { playerData,operatorData } from 'src/constants';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [player, setPlayer] = useState(playerData);

  const [operator, setOperator] = useState(operatorData);

  const [report, setReport] = useState(null);

  const contextValue = {
    player,
    setPlayer,
    operator,
    setOperator,
    report,
    setReport,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
