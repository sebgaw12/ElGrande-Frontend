import './App.css';
import Routing from "./routing/Routing";
import {UserContextProvider} from "./context/UserContextProvider";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";

function App() {
    Modal.setAppElement('#root')
    return (
        <div className="App bg-[rgb(255,245,0)] bg-custom-gradient">
            <UserContextProvider>
                <Routing/>
                <ToastContainer/>
            </UserContextProvider>
        </div>
    );
}

export default App;
