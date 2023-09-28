import React, { useState } from 'react';
import {Api} from "../../../api/Api";
//import Timeit from "react-timeit";

const inputStyle = "w-full px-3 py-2 m-2 border-b-2 border-gray-400 focus:outline-none placeholder:text-gray-300";

const RestaurantRegisterForm = () => {
  const [formData, setFormData] = useState(
    {
      restaurant: {
        name: '',
        description: '',
        website: '',
        contactNumber: '',
        contactEmail: ''
      },
      location: {
        latitude: 1.5,
        longitude: 1.5
      },
      businessHour: [
        {
          dayOfWeek: 1,
          openingHour: '08:00',
          closingHour: '17:00',
        },
        {
          dayOfWeek: 2,
          openingHour: '08:00',
          closingHour: '17:00',
        },
        {
          dayOfWeek: 3,
          openingHour: '08:00',
          closingHour: '17:00'
        },
        {
          dayOfWeek: 4,
          openingHour: '08:00',
          closingHour: '17:00',
        },
        {
          dayOfWeek: 5,
          openingHour: '08:00',
          closingHour: '17:00',
        },
        {
          dayOfWeek: 6,
          openingHour: '10:00',
          closingHour: '12:30',
        }
      ],
      address: {
        country: 'Poland',
        city: 'Kraków',
        postalCode: '88-90',
        street: 'Krakowska 1',
        streetNumber: '5',
        additionalDetails: 'additional info'
      }
    }
  );

  const [time, setTime] = useState();

  const [openingHours, setOpeningHours] = useState({
    Monday: { from: '', to: '' },
    Tuesday: { from: '', to: '' },
    Wednesday: { from: '', to: '' },
    Thursday: { from: '', to: '' },
    Friday: { from: '', to: '' },
    Saturday: { from: '', to: '' },
    Sunday: { from: '', to: '' },
  });

  const [currentStep, setCurrentStep] = useState('step1');

  const nextStep = (current, next) => {
    document.getElementById(current).classList.add('hidden');
    document.getElementById(next).classList.remove('hidden');
    setCurrentStep(next);
  };

  const prevStep = (current, prev) => {
    document.getElementById(current).classList.add('hidden');
    document.getElementById(prev).classList.remove('hidden');
    setCurrentStep(prev);
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    nextStep(currentStep, `step${parseInt(currentStep.charAt(4)) + 1}`);
  };

  const handlePrevClick = (e) => {
    e.preventDefault();
    prevStep(currentStep, `step${parseInt(currentStep.charAt(4)) - 1}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Objects names have to be like that: "restaurant.name"
    const [parentName, childName] = name.split('.');
    
    if (parentName && childName) {
      setFormData({
        ...formData,
        [parentName]: {
          ...formData[parentName],
          [childName]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
  
    await Api.registerRestaurant(formData);
  };
  
  
  return (
    <div className="max-w-3xl mx-auto py-16">
      <div className={`step relative ${currentStep === 'step1' ? '' : 'hidden'}`} id="step1">
        <h2 className="text-2xl font-semibold mb-4">Restaurant info</h2>
        <form>
          <div className="mt-6">
            <input
              type="text"
              name="restaurant.name"
              minLength={1}
              maxLength={100}
              placeholder="Restaurant name"
              className={inputStyle}
              //value={formData.restaurant.name}
              onChange={handleChange}
            />
            <input
              type="text"
              minLength={1}
              name="restaurant.description"
              placeholder="Description"
              className={inputStyle}
              //value={formData.restaurant.description}
              onChange={handleChange}
            />
            <input
              type="text"
              name="restaurant.website"
              placeholder="Website"
              className={inputStyle}
              //value={formData.restaurant.website}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="restaurant.contactNumber"
              placeholder="Contact number"
              className={inputStyle}
              pattern="[0-9]{9}"
              //value={formData.restaurant.contactNumber}
              onChange={handleChange}
            />
            <input
              type="email"
              name="restaurant.contactEmail"
              placeholder="Contact email"
              className={inputStyle}
              //value={formData.restaurant.contactEmail}
              onChange={handleChange}
            />
            <button className="btn-next" onClick={handleNextClick}>Next</button>
          </div>
        </form>
      </div>

      <div className={`step relative ${currentStep === 'step2' ? '' : 'hidden'}`} id="step2">
        <h2 className="text-2xl font-semibold mb-4">Opening hours</h2>
        <form>

        {Object.keys(openingHours).map((day) => (
          <div key={day} className="mt-6">
            
            <div className="mt-2 p-5 w-80 bg-white rounded-lg shadow-xl">
              <div className="flex">
                <label>{day}</label>
                <select name="hours" className="bg-transparent text-xl appearance-none outline-none">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">10</option>
                  <option value="12">12</option>
                </select>
                <span className="text-xl mr-3">:</span>
                <select name="minutes" className="bg-transparent text-xl appearance-none outline-none mr-4">
                  <option value="0">00</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                </select>
                <select name="ampm" className="bg-transparent text-xl appearance-none outline-none">
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>
              </div>
            </div>
          </div>))}
          
          <div className="mt-6">
            <button className="btn-prev" onClick={handlePrevClick}>Previous</button>
            <button className="btn-next" onClick={handleNextClick}>Next</button>
          </div>
        </form>
      </div>

      <div className={`step relative ${currentStep === 'step3' ? '' : 'hidden'}`} id="step3">
        <h2 className="text-2xl font-semibold mb-4">Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-6">
            <button className="btn-prev" onClick={handlePrevClick}>Previous</button>
            <button type="submit" className="btn-submit">Finish</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestaurantRegisterForm;