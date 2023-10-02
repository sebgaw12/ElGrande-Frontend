import {useCallback, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {mockCustomer} from "../../mockdata/MockCustomer";
import {toast} from "react-toastify";
import {ACCESS_TOKEN} from "../../constants/constant";
import {UserContext} from "../../context/UserContextProvider";
import {ApiCustomer} from "../../api/ApiCustomer";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)

    const navigate = useNavigate()

    const {userModifier} = useContext(UserContext)

    const onLoginClicked = useCallback(async () => {
        ApiCustomer.logIn(email, password).then(response => {
            localStorage.setItem(ACCESS_TOKEN, JSON.stringify(response))
            userModifier({...response.data})
            toast.success('zalogowano poprawnie', {
                position: "top-center"
            })
            navigate('/main-page')
        }).catch(error => {
            toast.error('podałeś niepoprawne dane, spróbuj ponownie', {
                position: "top-center"
            })
        })
    }, [email, password, navigate])

    useEffect(() => {
        setIsEmailValid(email.length > 0)
    }, [email]);

    useEffect(() => {
        setIsPasswordValid(password.length > 0)
    }, [password]);

    const onUsernameChange = (ev) => {
        setEmail(ev.target.value)
    }

    const onPasswordChange = (ev) => {
        setPassword(ev.target.value)
    }

    return (
        <div className="h-screen">
            <div>zaloguj</div>
            <div>
                <input
                    placeholder="email użytkownika"
                    type="text"
                    onChange={(e) => onUsernameChange(e)}
                />
                {!isEmailValid && <div>wpisz emaila do zalogowania</div>}
            </div>
            <input
                placeholder="hasło"
                type="password"
                onChange={(e) => onPasswordChange(e)}
            />
            {!isPasswordValid && <div>wpisz hasło</div>}<br/>
            <button
                disabled={!isEmailValid || !isPasswordValid}
                onClick={onLoginClicked}
                className="border-black border-2 p-2"
            >zaloguj
            </button>
        </div>
    )
}

export default Login
