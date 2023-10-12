// import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
// import {TEInput, TERipple} from 'tw-elements-react';
//
// import IconArrowTurnLeft from '../restaurantform/elements/icons/IconArrowTurnLeft';
// import FoodSpotLogo from '../restaurantform/elements/graphics/FoodSpotLogo';
// import RememberMeCheckbox from '../restaurantform/elements/form/RememberMeCheckbox';
// import ForgotPasswordLink from '../restaurantform/elements/form/ForgotPasswordLink';
// import GoogleIcon from '../restaurantform/elements/social/GoogleIcon';
// import TwitterLongButton from '../restaurantform/elements/social/TwitterLongButton';
// import Divider from '../restaurantform/elements/form/Divider';
//
// import {StyleLongButton, StyleRoundedBlueButton} from '../../styles/styles';
//
// function UserRegisterFormView({childToParent, handleSubmit}) {
//     const [formData, setFormData] = useState({
//         name: '',
//         surname: '',
//         email: '',
//         password: '',
//         passwordRepeat: '',
//     });
//
//     const localHandleSubmit = async (e) => {
//         e.preventDefault();
//         childToParent(formData);
//         //handleSubmit(e);
//     }
//
//     const handleChange = async (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     }
//
//     return (
//         <section className="h-screen">
//             <div className="container h-full px-6 py-24">
//                 <Link to="/">
//                     <button className={StyleRoundedBlueButton}>
//                         <IconArrowTurnLeft/>
//                     </button>
//                 </Link>
//
//                 <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
//                     {/* <!-- Left column container with background--> */}
//                     <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
//                         <FoodSpotLogo/>
//                     </div>
//                     {/* <!-- Right column container with form --> */}
//                     <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
//                         <form onSubmit={localHandleSubmit}>
//                             <TEInput
//                                 type="text"
//                                 label="Name"
//                                 placeholder="John"
//                                 className="mb-6"
//                                 size="lg"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                             ></TEInput>
//                             <TEInput
//                                 type="text"
//                                 label="Surname"
//                                 placeholder="Doe"
//                                 className="mb-6"
//                                 size="lg"
//                                 name="surname"
//                                 value={formData.surname}
//                                 onChange={handleChange}
//                             ></TEInput>
//                             <TEInput
//                                 type="email"
//                                 label="Email"
//                                 placeholder="john@doe.com"
//                                 className="mb-6"
//                                 size="lg"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                             ></TEInput>
//                             <TEInput
//                                 type="password"
//                                 label="Password"
//                                 placeholder="password"
//                                 className="mb-6"
//                                 size="lg"
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                             ></TEInput>
//                             <TEInput
//                                 type="password"
//                                 label="Repeat Password"
//                                 placeholder="password"
//                                 className="mb-6"
//                                 size="lg"
//                                 name="passwordRepeat"
//                                 value={formData.passwordRepeat}
//                                 onChange={handleChange}
//                             ></TEInput>
//                             <div className="mb-6 flex items-center justify-between">
//                                 <RememberMeCheckbox/>
//                                 <ForgotPasswordLink/>
//                             </div>
//                             <TERipple rippleColor="light" className="w-full">
//                                 <button type="submit" className={StyleLongButton}>
//                                     Sign up
//                                 </button>
//                             </TERipple>
//                             {/* <!-- Divider --> */}
//                             <Divider/>
//                             <GoogleIcon/>
//                             <TwitterLongButton/>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
//
// export default UserRegisterFormView;
