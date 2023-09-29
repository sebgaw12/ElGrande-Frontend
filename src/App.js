import './App.css';
import Routing from "./routing/Routing";
import {UserContextProvider} from "./context/UserContextProvider";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";

function App() {
    Modal.setAppElement('#root')
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
