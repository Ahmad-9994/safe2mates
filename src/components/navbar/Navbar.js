import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate, NavLink } from "react-router-dom";
import { globalData } from "../../Context";
import { useContext } from "react";

const Navbar = () => {
  const navigate = useNavigate();
const userId=localStorage.getItem("id")
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-[0%]">
      <div class="w-[90%] flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="md:w-[30%] ">
          <img src={logo} width={140} height={140} />
        </div>

        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                class="block py-2 px-3  text-[14px] text-white bg-[#37cafb] hover:cursor-pointer rounded md:bg-transparent md:text-gray-700 hover:text-[#37cafb] md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                For Boating Enthusiasts
              </NavLink>
            </li>
            <li>
              <button
                id="dropdownNavbarLink1"
                data-dropdown-toggle="dropdownNavbar1"
                class="flex items-center justify-between w-full py-2 px-3 text-[14px] text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#37cafb] md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Bussiness & Services{" "}
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar1"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <NavLink
                      to="/Marine-Service"
                      className="block px-6 py-2 text-[14px] hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-[#37cafb]"
                    >
                      Marine Service
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/Marine-Supply"
                      className="block px-6 py-2 text-[14px] hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-[#37cafb]"
                    >
                      Marine Supply Store
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>



             <li>
              <button
                id="dropdownNavbarLink2"
                data-dropdown-toggle="dropdownNavbar2"
                class="flex items-center justify-between w-full py-2 px-3 text-[14px] text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#37cafb] md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Bolgs{" "}
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar2"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <NavLink
                      to="/all-blogs"
                      className="block px-6 py-2 text-[14px] hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-[#37cafb]"
                    >
                      All Blogs
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/my-Blogs"
                      className="block px-6 py-2 text-[14px] hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-[#37cafb]"
                    >
                      My Blogs
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>


           
            <li>
              <NavLink
                to="/contactus"
                class="block py-2 px-3 text-[14px] text-gray-900 rounded hover:bg-gray-100 hover:cursor-pointer md:hover:bg-transparent md:border-0 hover:text-[#37cafb] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact Us
              </NavLink>
            </li>

            {userId ? (
              <li>
                <NavLink
                to="/login"
                  onClick={() => {
                  localStorage.clear();

                  }}
                  class="block py-2 px-3 text-[14px] text-red-400  rounded hover:bg-gray-100 hover:cursor-pointer md:hover:bg-transparent md:border-0 hover:text-[#37cafb] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                > 
                  Sign out
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/registration"
                  class="block py-2 px-3 text-[14px] text-green-500 rounded  hover:cursor-pointer md:hover:bg-transparent md:border-0 hover:text-[#37cafb] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Sign Up
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
