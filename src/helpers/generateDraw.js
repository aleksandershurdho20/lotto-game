
const PRICES = {
    2: 50,
    3: 100,
    4: 500,
    5: 1000,
  };
  
  export const handleDraw = (tickets, operatorBalance) => {
    const drawedNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 39) + 1);
  
    const ticketData = tickets.map((ticket) => {
      const hits = ticket.guesses.filter((guess) => drawedNumbers.includes(guess)).length;
      const winnings = calculateWinnings(hits);
  
      return {
        ...ticket,
        hits,
        winnings,
      };
    });
  
    const totalWinnings = ticketData.reduce((total, ticket) => total + ticket.winnings, 0);
    const operatorProfit = operatorBalance - totalWinnings;
  
    return {
      drawedNumbers,
      tickets: ticketData,
      totalWinnings,
      operatorProfit,
    };
  };
  
  const calculateWinnings = (hits) => {
    return PRICES[hits] || 0;
  };
  