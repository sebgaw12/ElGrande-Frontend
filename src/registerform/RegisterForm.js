import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';

const inputStyle = "w-full px-3 py-2 m-2 border-b-2 border-gray-400 focus:outline-none placeholder:text-gray-300";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    passwordRepeat: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    const { name, surname, email, password, passwordRepeat } = formData;

    if (password !== passwordRepeat)
    {
      alert("Passwords do not match");
      return;
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const userData =
    {
      name,
      surname,
      email,
      passwordHash: hashedPassword,
    };

    try {
      const response = await fetch('http://127.0.0.1:8080/api/v1/customers',
      {
        method: 'POST',
        headers:
        {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok)
      {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setFormData(
      {
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordRepeat: '',
      });

      navigate('/login');

    } catch (error)
    {
      console.error(error);
      alert('Error creating user');
    }
  };

  const handleChange = (e) =>
  {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="wrapper justify-center h-screen flex bg-gray-100">
      <div className="form-wrapper bg-white p-10 m-auto w-96 shadow">
        <h2 className="text-4xl font-bold py-5 mb-5 text-sky-900 uppercase">
          Sign up
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 justify-center items-center">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={inputStyle}
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="surname"
            placeholder="Surname"
            className={inputStyle}
            value={formData.surname}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className={inputStyle}
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className={inputStyle}
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="password"
            name="passwordRepeat"
            placeholder="Repeat Password"
            className={inputStyle}
            value={formData.passwordRepeat}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full mt-5 px-3 py-2 bg-sky-600 text-white hover:bg-sky-700 active:bg-sky-900"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;