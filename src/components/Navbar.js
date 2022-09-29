import GoogleLogin from "react-google-login";
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import user from '../assets/images/user.png';
import loginIcon from '../assets/images/loginIcon.png';
import underConstructionImage from '../assets/images/underConstruction.png';
import logo from '../assets/images/logo.png';
import { cardInfo } from '../data/cardsContentMockData';
import Content from "./Content";

const Navbar = () => {
    const [isOpenDropDownProfile, setIsOpenDropDownProfile] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [openUnderConstruction, setOpenUnderConstruction] = useState(false);

    const firstName = useRef();
    const signUpPhoneNumber = useRef();
    const signUpPassword = useRef();
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const logInPhoneNumber = useRef();
    const logInPassword = useRef();

    const handleSubmitLogIn = () => {
        const loggedInPhoneNumber = localStorage.getItem("phoneNumber");
        const loggedInPassword = localStorage.getItem("password");
        if (logInPhoneNumber.current.value === loggedInPhoneNumber && logInPassword.current.value === loggedInPassword){
            localStorage.setItem("isLoggedIn", true);
        }
        else{
            alert("User not found in the system!")
        }
    }

    const handleSubmitSignUp = () => {
        localStorage.setItem("firstName", firstName.current.value);
        localStorage.setItem("phoneNumber", signUpPhoneNumber.current.value);
        localStorage.setItem("password", signUpPassword.current.value);
        localStorage.setItem("isLoggedIn", true);
    }

    const handleLogOut = () => {
        localStorage.setItem("isLoggedIn", false);
        window.location.reload(false);
    }

    const toggleDropDownProfile = () => {
        setIsOpenDropDownProfile(!isOpenDropDownProfile);
    }

    const togglePopUpSignUpModal = () => {
        setShowSignUpModal(!showSignUpModal);
        if(document.body.style.overflow !== "hidden"){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }
    const togglePopUpSignInModal = () => {
        setShowSignInModal(!showSignInModal);
    }

    const search = useRef();
    const handleSearchFunction = () => {
        var infos = cardInfo.filter(info => info.title === search.current.value);
        <Content infos={infos}/>
    }

    const toggleUnderConstructionModal = () => {
        setOpenUnderConstruction(!openUnderConstruction);
        if(document.body.style.overflow !== "hidden"){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }

    let proRef = useRef();
    let modalRef = useRef();
    useEffect(() => {
    
        const hideDropDownProfile = () => {
            if (window.innerWidth > 768 && isOpenDropDownProfile){
                setIsOpenDropDownProfile(false);
            }
        }

        const handleClickOutsideComponent = (event) => {
            if (proRef.current && !proRef.current.contains(event.target)) {
                setIsOpenDropDownProfile(false);
            }
            if (modalRef.current && !modalRef.current.contains(event.target)){
                setShowSignUpModal(false);
                setIsOpenDropDownProfile(false);
            }
        }

        window.addEventListener('resize', hideDropDownProfile);
        document.addEventListener("mousedown", handleClickOutsideComponent);

        return () => {
            window.removeEventListener('resize', hideDropDownProfile);
            document.removeEventListener("mousedown", handleClickOutsideComponent);
        }
    }, [isOpenDropDownProfile]);

    return (
        <nav className='flex z-30 justify-between items-center sticky top-0 h-24 bg-white text-red relative shadow-sm scroll-shadow-lg font-nunito' role='navigation'>
            <div className='flex flex-row justify-center items-center'>
                <Link to='/' className='hidden xl:flex flex-shrink-0 justify-center items-center ml-16 h-full '>
                    <img src={logo} alt='' className='cursor-pointer p-4 h-16'/>
                </Link>
                <div className='sm:ml-20 md:4 lg:ml-20 xl:ml-28 ml-20'>
                    <form className='w-96'>   
                        <form class="relative">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input ref={search} type="search" id="default-search" class="p-4 pl-10 w-full text-sm text-gray-900 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-400 text-white" placeholder="Search places" required/>
                            <button onClick={handleSearchFunction} type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-primary-color transform hover:bg-blue-800 transition duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </form>
                    </form>
                </div>
            </div>

            {/* Burger Menu */}
            <div 
                className='px-4 cursor-pointer lg:hidden md:ml-72'
                onClick={toggleDropDownProfile}
            >
                <svg className="w-8 h-8 transform hover:scale-110 transition duration-300 ease in"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        fillRule="evenodd" 
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                        clipRule="evenodd" 
                    />
                </svg>
            </div>

            {/* nav button & profile */}
            <div className="hidden lg:flex mr-20" id="mobile-menu-language-select">
                <ul 
                    className={ isLoggedIn === "true" ?
                        "flex flex-row justify-center items-center font-nunito p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                        : "flex flex-row justify-center items-center font-nunito p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                    }        
                >
                    <li>
                        <a href="/about_us" className="font-bold block py-2 pr-4 pl-3 text-lg hover:text-primary-color transform hover:scale-110 transition duration-300 ease-in" aria-current="page">About Us</a>
                    </li>
                    <li>
                        <button onClick={toggleUnderConstructionModal} className={isLoggedIn === "true" ? "font-bold block py-2 pr-4 pl-3 text-lg hover:text-primary-color transform hover:scale-110 transition duration-300 ease-in" : "hidden"}>Favorite</button>
                    </li>
                    <li className="flex-shrink-0">
                        <a href="/booking_history" className={isLoggedIn === "true" ? "font-bold block py-2 pr-4 pl-3 text-lg hover:text-primary-color transform hover:scale-110 transition duration-300 ease-in" : "hidden"}>Booking History</a>
                    </li>
                    <button ref={proRef} className='flex-shrink-0' onClick={toggleDropDownProfile}>
                        <ul className="flex flex-row justify-center items-center rounded-full transform hover:shadow-lg transition duration-300 border-solid border-2 border-gray">
                            <img src={loginIcon} alt='' className="w-6 m-2"/>
                            <img src={user} alt='' className="w-6 m-2"/>
                        </ul>
                    </button>
                </ul>
            </div>

            {/* Pop Up Dropdown Profile menu */}
            <div id="dropDownProfile" class={isOpenDropDownProfile ? "absolute top-20 right-4 md:right-20 z-10 mt-2 w-56 origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" : "hidden"} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div  ref={proRef} class="py-1" role="none">
                    <button onClick={togglePopUpSignUpModal} class={isLoggedIn !== "true" ? "w-full text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" : "hidden"} role="menuitem" tabindex="-1" id="menu-item-0">Sign up</button>
                    <button onClick={togglePopUpSignInModal} class={isLoggedIn !== "true" ? "w-full text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" : "hidden"} role="menuitem" tabindex="-1" id="menu-item-1">Log in</button>
                    <button class="w-full text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-2">License</button>
                    <button onClick={handleLogOut} type="submit" class={isLoggedIn === "true" ? "text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100" : "hidden"} role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                    {/* <form method="POST" action="/" role="none">
                        <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                    </form> */}
                </div>
            </div>


            {/* Pop Up Sign Up Modal */}
            <div className={showSignUpModal ? "fixed inset-0 z-10 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center font-nunito" : "hidden"}>
                <div className='relative w-full md:w-2/5 mx-20 md:mx-0 bg-white py-8 rounded'>
                    <div>
                        <button onClick={togglePopUpSignUpModal} className='absolute -top-3 -right-3 bg-primary-color rounded-full w-8 h-8 font-bold transform hover:scale-110 transition duration-300'>
                            X
                        </button>
                        <div className='flex justify-center font-bold my-3'>
                            Sign Up
                        </div>
                    </div>
                    <form>
                        <div class="flex flex-wrap mx-3 mb-6 mt-3">
                            <span className='w-full mx-4 my-4 h-px bg-gray-300'></span>
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 required:border-red-500" for="grid-first-name">
                                    First Name
                                </label>
                                <input ref={firstName} class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="First Name" required/>
                            </div>
                            <div class="relative w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Select Role
                                </label>
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option>Customer</option>
                                    <option>Seller</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 mr-4 mt-4">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Phone Number
                                </label>
                                {/* <input ref={signUpPhoneNumber} className="w-full text-gray-700 border border-gray-300 rounded p-4 h-12" placeholder="Phone Number"/> */}
                                <input ref={signUpPhoneNumber} class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Phone Number" autocomplete="off" required/>
                            </div>
                            <div class="w-full px-3 pt-2">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Password
                                </label>
                                {/* <input ref={signUpPassword} className="w-full h-12 text-gray-700 border border-gray-300 rounded p-4" placeholder="**********"/> */}
                                <input ref={signUpPassword} class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="********" autocomplete="off" required/>
                            </div>
                        </div>
                        <div className="mx-6">
                            <button onClick={handleSubmitSignUp} className="bg-primary-color mb-4 w-full transform hover:bg-blue-800 transition duration-300 text-white font-bold py-2 px-4 rounded">
                                Sign up
                            </button>
                            <GoogleLogin
                                className="flex justify-center w-full px-3 h-10"
                                clientId="527363975776-gqtip7tt8nichnmrnq8ta4nab9hfm4pb.apps.googleusercontent.com"
                                buttonText="Sign up with Google"
                                // onSuccess={googleLoginSuccess}
                                // onFailure={googleLoginFail}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </form>
                </div>
            </div>

            {/* Pop Up Log In Modal */}
            <div className={showSignInModal ? "fixed inset-0 z-10 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center font-nunito" : "hidden"}>
                <div className='relative w-full md:w-2/5 mx-20 md:mx-0 bg-white py-8 rounded'>
                    <div>
                        <button onClick={togglePopUpSignInModal} className='absolute -top-3 -right-3 bg-primary-color rounded-full w-8 h-8 font-bold transform hover:scale-110 transition duration-300'>
                            X
                        </button>
                        <div className='flex justify-center font-bold my-3'>
                            Sign In
                        </div>
                    </div>
                    <form>
                        <div class="flex flex-wrap mx-3 mb-6 mt-3">
                            <span className='w-full mx-4 my-4 h-px bg-gray-300'></span>
                            <div class="relative w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Select Role
                                </label>
                                <select className="w-full border rounded p-2">
                                    <option>Customer</option>
                                    <option>Seller</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex flex-wrap mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Phone Number
                                </label>
                                <input ref={logInPhoneNumber} class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="tel" placeholder="Phone Number" required/>
                            </div>
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Password
                                </label>
                                <input ref={logInPassword} class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="********" required/>
                            </div>
                        </div>
                        <div className="mx-6">
                            <button onClick={handleSubmitLogIn} className="bg-primary-color mb-4 w-full transform hover:bg-blue-800 transition duration-300 text-white font-bold py-2 px-4 rounded">
                                Sign in
                            </button>
                            <GoogleLogin
                                className="flex justify-center w-full px-3 h-10"
                                clientId="527363975776-gqtip7tt8nichnmrnq8ta4nab9hfm4pb.apps.googleusercontent.com"
                                buttonText="Sign in with Google"
                                // onSuccess={googleLoginSuccess}
                                // onFailure={googleLoginFail}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </form>
                </div>
            </div>

            {/* Under Construction Modal */}
            <div className={openUnderConstruction ? 'fixed inset-0 z-10 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center' : 'hidden'}>
                <div className='flex flex-col flex-shrink-0 justify-center items-center bg-white w-96 h-96 rounded'>
                    <h1 className='flex justify-center font-bold top-0 text-3xl text-gray-400'>Under Construction!</h1>
                    <img alt='' className='w-80' src={underConstructionImage}/>
                    <button onClick={toggleUnderConstructionModal} className='w-20 h-10 bg-primary-color rounded mt-8 transform hover:scale-105 text-white transition duration-300 ease-out'>OK</button>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar;
