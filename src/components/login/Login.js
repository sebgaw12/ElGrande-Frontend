import {useCallback, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {mockCustomer} from "../../mockdata/MockCustomer";
import {toast} from "react-toastify";
import {ACCESS_TOKEN} from "../../constants/constant";
import {UserContext} from "../../context/UserContextProvider";

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isUsernameValid, setIsUsernameValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)

    const navigate = useNavigate()

    const {userModifier, loginModifier} = useContext(UserContext)

    const onLoginClicked = useCallback(async () => {

        try {
            if (username === mockCustomer.email && password === mockCustomer.passwordHash) {
                localStorage.setItem(ACCESS_TOKEN, 'ACCESS_TOKEN')
                userModifier({
                    username: mockCustomer.email
                })
                toast.success('zalogowano poprawnie', {
                    position: "top-center"
                })
                loginModifier(true)
                navigate('/main-page')
            } else {
                toast.error('podałeś niepoprawne dane, spróbuj ponownie', {
                    position: "top-center"
                })
            }
        } catch (err) {
            toast.error('wystąpił błąd podczas logowania', {
                position: "top-center"
            })
        }
    }, [username, password, navigate])

    useEffect(() => {
        setIsUsernameValid(username.length > 0)
    }, [username]);

    useEffect(() => {
        setIsPasswordValid(password.length > 0)
    }, [password]);

    const onUsernameChange = (ev) => {
        setUsername(ev.target.value)
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
                {!isUsernameValid && <div>wpisz emaila do zalogowania</div>}
            </div>
            <input
                placeholder="hasło"
                type="password"
                onChange={(e) => onPasswordChange(e)}
            />
            {!isPasswordValid && <div>wpisz hasło</div>}<br/>
            <button
                disabled={!isUsernameValid || !isPasswordValid}
                onClick={onLoginClicked}
                className="border-black border-2 p-2"
            >zaloguj
            </button>
        </div>
    )
}

export default Login
