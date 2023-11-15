
import  { createContext, useContext, useState } from 'react';
import { playerData,operatorData } from 'src/constants';
import { handleDraw } from 'src/helpers/generateDraw';
import { generateNewTicket } from 'src/helpers/genereateNewTicket';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [player, setPlayer] = useState(playerData);

  const [operator, setOperator] = useState(operatorData);

  const [report, setReport] = useState(null);

  const updatePlayerPurchasionData = (newTicket) => {
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      balance: prevPlayer.balance - 500,
      tickets: [...prevPlayer.tickets, newTicket],
    }));

  }
  const purchaseTicket = (guesses) => {
   const newTicket = generateNewTicket(guesses)

    updatePlayerPurchasionData(newTicket)

    draw(); 
  };
  

  const draw = () => {
    const drawResults = handleDraw(player.tickets, operator.balance);
    setReport(drawResults);

    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      balance: prevPlayer.balance + drawResults.totalWinnings,
    }));

    setOperator((prevOperator) => ({
      ...prevOperator,
      balance: prevOperator.balance - drawResults.totalWinnings,
    }));
  };

  const contextValue = {
    player,
    setPlayer,
    operator,
    setOperator,
    report,
    setReport,
    purchaseTicket,
    draw,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
