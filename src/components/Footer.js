import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/images/logo.png';

const Footer= ({toggleDropUpMenu}) => {
    const [isOpenDropDownFooter, setIsOpenDropDownFooter] = useState(false);
    const toggleDropDownFooter = () => {
        setIsOpenDropDownFooter(!isOpenDropDownFooter);
    }

    let proRef = useRef();
    useEffect(() => {
        const hideDropDownFooter = () => {
            if (window.innerWidth > 768 && isOpenDropDownFooter){
                setIsOpenDropDownFooter(false);
            }
        }

        const handleClickOutsideComponent = (event) => {
            if (proRef.current && !proRef.current.contains(event.target)) {
                setIsOpenDropDownFooter(false);
            }
        }

        window.addEventListener('resize', hideDropDownFooter);
        document.addEventListener("mousedown", handleClickOutsideComponent);

        return () => {
            window.removeEventListener('resize', hideDropDownFooter);
            document.removeEventListener("mousedown", handleClickOutsideComponent);
        }
    });

    return (
            <>
                <footer class="fixed bottom-0 left-0 z-20 p-4 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-2 dark:bg-gray-800 dark:border-gray-600">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <span class="hover:underline">KORK™</span>. All Rights Reserved.
                    </span>
                    <ul class="flex flex-wrap items-center mt-3 t ext-sm text-gray-500 dark:text-gray-400 sm:mt-0" onClick={toggleDropUpMenu}>
                        <li ref={proRef} onClick={toggleDropDownFooter}>
                        <button class="mr-3 mb-3 md:mb-0 px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 py-2.5 leading-tight hover:underline transition duration-150 ease-in-out mr-1.5" type="button" data-drawer-backdrop="true" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">More References<svg class="ml-2 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg></button>
                            <div class={isOpenDropDownFooter ? "offcanvas offcanvas-bottom fixed bottom-0 flex flex-col max-w-full bg-gray-100 bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 left-0 right-0 border-none h-1/3 max-h-full":"hidden"} tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                                <div class="md:flex md:justify-between p-4">
                                    <div class="mb-6 md:mb-0">
                                        <a href="/" class="flex items-center">
                                            <img src={logo} class="mr-3 h-8" alt="Kork Logo" />
                                        </a>
                                    </div>
                                    <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <div class="ml-20">
                                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About Us</h2>
                                            <ul class="text-gray-600 dark:text-gray-400">
                                                <li class="mb-4">
                                                    <span class="hover:underline">Kork established in 2022</span>
                                                </li>
                                                <li>
                                                <span class="hover:underline">Kork will reserve you the comfortable places for your great meeting experience</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="ml-20">
                                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact us</h2>
                                            <ul class="text-gray-600 dark:text-gray-400">
                                                <li class="mb-4">
                                                    <span class="flex gap-3 hover:underline "><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>+(855)99 999 999</span>
                                                </li>
                                                <li>
                                                    <span class="flex gap-3 hover:underline"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>kork@info.com</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                            <ul class="text-gray-600 dark:text-gray-400">
                                                <li class="mb-4">
                                                    <a href="/" class="hover:underline">Privacy Policy</a>
                                                </li>
                                                <li>
                                                    <a href="/" class="hover:underline">Terms &amp; Conditions</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button type="button" data-drawer-dismiss="drawer-bottom-example" aria-controls="drawer-bottom-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span class="sr-only">Close menu</span>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </footer>
            </>
        )
    }

export default Footer;
