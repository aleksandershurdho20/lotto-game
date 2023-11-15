export const generateNewTicket = (guesses) => {
    const guessesArray = guesses.split(',').map((num) => parseInt(num.trim(), 10));
    const newTicket = {
      guesses: guessesArray,
      hits: 0,
      winnings: 0,
    };
    return newTicket
}