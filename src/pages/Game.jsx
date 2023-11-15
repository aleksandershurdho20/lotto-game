import { useState } from "react";
import { useAppContext } from "src/context/AppContext";

const Game = () => {
    const { player, purchaseTicket } = useAppContext();
    const [guesses, setGuesses] = useState("");
    const handlePurchase = () => {
        purchaseTicket(guesses);
        setGuesses("");
    };

    console.log(player, "player");

    return (
        <div className="container py-5 px-5">
            <div className="row">
                <div className="col-md-10">
                    <h2 className="text-white mb-4">{`Hello, ${player.name}! Your Balance: ${player.balance}`}</h2>
                    <div className="form-group">
                        <label className="label-title mb-2">
                            Enter your guesess
                            <input
                                type="text"
                                value={guesses}
                                onChange={(e) => setGuesses(e.target.value)}
                                className="form-control bg-dark border-dark text-white mt-3"
                            />
                        </label>
                    </div>
                    <button
                        className="btn btn-dark btn-md mt-3 mb-3"
                        onClick={handlePurchase}
                        disabled={!guesses}
                    >
                        <span className="text-white">
                            Purchase Ticket
                        </span>
                    </button>
                    <div className="mt-5">
                        <h3 className="text-white">Your Tickets:</h3>
                        <ul className="list-unstyled">
                            {player.tickets.map((ticket, index) => (
                                <li
                                    key={index}
                                    className="text-white mb-2"
                                >{`Guesses: ${ticket.guesses.join(
                                    ", ",
                                )}, Hits: ${ticket.hits}, Winnings: ${
                                    ticket.winnings
                                }`}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
