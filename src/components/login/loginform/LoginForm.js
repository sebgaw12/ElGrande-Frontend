import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Api} from "../../../api/Api";

const inputStyle =
    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(false); // loading state

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await Api.logIn(setLoading, formData, setUserName, navigate);
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className={inputStyle}
                                value={formData.email}
                                onChange={handleChange}
                                disabled={loading} // Disable input during loading
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className={inputStyle}
                                value={formData.password}
                                onChange={handleChange}
                                disabled={loading} // Disable input during loading
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading} // Disable button during loading
                        >
                            {loading ? 'Signing in...' : 'Sign in'}
                        </button>
                    </div>
                </form>

                {userName && (
                    <p className="mt-4 text-center text-sm text-gray-900">
                        Welcome, {userName}!
                    </p>
                )}

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link to="/register">
            <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register new account
            </span>
                    </Link>
                </p>
            </div>
        </>
    );
}

export default LoginForm;
