
import  { createContext, useContext, useState } from 'react';
import { playerData,operatorData } from 'src/constants';
import { handleDraw } from 'src/helpers/generateDraw';
import { generateVoucher } from 'src/helpers/generateVouchers';
import { generateNewTicket } from 'src/helpers/genereateNewTicket';
import { mapTicketsToVouchers } from 'src/helpers/mapTicketToVouchers';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [player, setPlayer] = useState(playerData);

  const [operator, setOperator] = useState(operatorData);

  const [report, setReport] = useState(null);
  const [vouchers, setVouchers] = useState([]);

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

  const simulatePlayers = (numPlayers) => {
    const newVouchers = generateVoucher()

    setVouchers([...vouchers, ...newVouchers]);
    setOperator((prevOperator) => ({
      ...prevOperator,
      balance: prevOperator.balance + numPlayers * 500,
    }));
  };

  const simulateDraw = () => {
    const drawResults = handleDraw(player.tickets, operator.balance);
    setReport(drawResults);

    setOperator((prevOperator) => ({
      ...prevOperator,
      balance: prevOperator.balance - drawResults.totalWinnings,
    }));
    
    setVouchers((prevVouchers) => [
      ...prevVouchers,
      ...mapTicketsToVouchers(player.name, drawResults.tickets),
    ]);
    
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
    simulatePlayers,
    simulateDraw
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
