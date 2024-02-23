import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { globalData } from '../Context'
import toast from 'react-hot-toast'
import { useFormik } from 'formik';
import axios from 'axios';

const LoginScreen = () => {
    // const {setIsUserId}=useContext(globalData)
    const navigate=useNavigate()
const [initialValues ,setinitialValues] = useState({
    email: "",
    password: "",
  });

 const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
     
       axios.post("http://localhost:5000/api/auth/singin" ,values)
      .then(response => {
        toast.success(response.data.message);
         if (response.data.id) {
         localStorage.setItem("id", response.data.id);
         navigate("/")
    }
     
        })
        .catch(error => {
          // Handle errors, e.g., show error message
          console.error(error);
        });
        
      
    }
  });




  return (
     <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-auto my-10 lg:py-0">

      <div class="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight text-[#37cafb] text-center tracking-tight  md:text-2xl dark:text-white">
                  Login Here !
            
              </h1>
              <form class="space-y-4" onSubmit={handleSubmit}>

                 
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password"onChange={handleChange}  placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type='submit' class="w-full text-white bg-[#37cafb] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                       If you don't already have an account?<a onClick={()=>navigate("/registration")} class="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer">Register here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
  )
}

export default LoginScreen
