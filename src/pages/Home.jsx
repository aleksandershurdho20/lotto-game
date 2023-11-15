import { useNavigate } from "react-router-dom";
import { useAppContext } from "src/context/AppContext";


export default function Home() {
  const { player, setPlayer } = useAppContext();

  const navigate = useNavigate()

  const handlePlayerName=(e) => setPlayer({...player,name:e.target.value})
  const handlePlay = () => navigate("game")
    return (
        <div className="d-flex justify-content-center flex-column align-items-center min-vh-100">
            <h1 className="text-white text-entry">
                Welcome, To get started enter username
            </h1>
            <div className="form-group mt-5 mb-5">
              <label className="label-title mb-2">Username</label>
                <input
                    type="text"
                    className="form-control bg-dark border-dark text-white"
                    value={player.name}
                    onChange={handlePlayerName}
                />
            </div>
            <button className="btn btn-dark btn-lg" onClick={handlePlay} disabled={!player.name}>
                <span className="text-white fw-bold">Play</span>
            </button>
        </div>
    );
}
