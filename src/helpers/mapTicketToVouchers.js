export const mapTicketsToVouchers = (playerName, tickets) => {
    return tickets.map((ticket) => ({
      playerName,
      hits: ticket.hits,
      winnings: ticket.winnings,
    }));
  };