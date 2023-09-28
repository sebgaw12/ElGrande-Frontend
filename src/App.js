import './App.css';
import Routing from "./routing/Routing";
import {UserContextProvider} from "./context/UserContextProvider";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="App bg-yellow-500">
            <UserContextProvider>
                <Routing/>
                <ToastContainer/>
            </UserContextProvider>
        </div>
    );
}

export default App;
