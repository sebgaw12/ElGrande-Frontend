import './App.css';
import Routing from "./routing/Routing";
import {UserProvider} from "./context/UserContextProvider";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {RestaurantContextProvider} from "./context/RestaurantContextProvider";
import {GlobalStyle} from "./styles/global.styles";

function App() {

    return (
        <GlobalStyle>
            <RestaurantContextProvider>
                <UserProvider>
                    <Routing/>
                    <ToastContainer/>
                </UserProvider>
            </RestaurantContextProvider>
        </GlobalStyle>
    );
}

export default App;
