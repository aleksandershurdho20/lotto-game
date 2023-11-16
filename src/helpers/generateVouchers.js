import { generateNewTicket } from "./genereateNewTicket";

export const generateVoucher = (numPlayers) => {
    const vouchers = Array.from({ length: numPlayers }, (_, index) => {
      const guesses = Array.from({ length: 5 }, () => Math.floor(Math.random() * 39) + 1);
      const newTicket = generateNewTicket(guesses.join(','));
      return { playerName: `Player ${index + 1}`, ...newTicket };
    });

    return vouchers

  };