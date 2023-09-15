import React, {Component} from 'react';

class RegisterForm extends Component {

    render() {
        return (
            <>
            <div class="wrapper justify-center h-screen flex bg-gray-100">
                    <div class="form-wrapper bg-white p-10 m-auto w-96 shadow">
                    <h2 class="text-4xl font-bold py-5 mb-5 text-sky-900 uppercase">Sign Up</h2>
                    <form action="#" class="flex flex-col gap-5 justify-center items-center">
                        <input type="hidden" name="type" value="register" />

                        <input type="text" name="username" placeholder="Username" class="w-full px-3 py-2 m-2 border-b-2 border-gray-400 focus:outline-none placeholder:text-gray-300 placeholder:px-none" />

                        <input type="email" name="email" placeholder="E-mail" class="w-full px-3 py-2 m-2 border-b-2 border-gray-400 focus:outline-none placeholder:text-gray-300" />

                        <input type="password" name="password" placeholder="Password" class="w-full px-3 py-2 m-2 border-b-2 border-gray-400 focus:outline-none placeholder:text-gray-300" />

                        <input type="password" name="passwordRepeat" placeholder="Repeat Password" class="w-full px-3 py-2 m-2 border-b-2 border-gray-400 focus:outline-none placeholder:text-gray-300" />

                        <button type="submit" class="w-full mt-5 px-3 py-2 bg-sky-600 text-white hover:bg-sky-700 active:bg-sky-900">
                            Register
                        </button>
                    </form>
                    </div>
                </div>
            </>
    )
  }
}

export default RegisterForm;