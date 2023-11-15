
import "./App.css";
import Routes from "./routes/Index";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./context/AppContext";

function App() {

    return (
        <AppProvider>
            <Routes />
        </AppProvider>
    );
}

export default App;
