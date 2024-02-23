import React, { useState } from 'react'
import pic from "../../assets/gallary4.jpg";
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const SingleBlog = () => {
  const {id}=useParams()
  const[singleBlogData ,setSingleBlogData]=useState()
  
     async function fetchSingleBlog(){
      try {
        const response = await axios.get(`http://localhost:5000/api/blog/single-blog/${id}`);
        setSingleBlogData(response.data);
      } catch (error) {
        console.error('Error fetching single blog:', error);
      }
    };

useEffect(() => {
    fetchSingleBlog();
  }, []); 

console.log(singleBlogData)
  


  return (
    <div class="  m-2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
    <div class="flex justify-end px-4 pt-1 ">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
          type="button"
        >
          <span class="sr-only">Open dropdown</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>

        <div
          id="dropdown"
          class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul class="py-2" aria-labelledby="dropdownButton">
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Edit
              </a>
            </li>

            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col  p-2 ">
        <img
          class=" h-[60vh] mb-3 rounded shadow-lg "
          src={singleBlogData && singleBlogData.image}
          alt="Bonnie image"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          { singleBlogData && singleBlogData.title}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">
                    { singleBlogData && singleBlogData.description}
        </span>
        <div class="flex mt-4 md:mt-6 justify-between">
          <div class="flex items-center justify-between ">
            <div class="flex items-center space-x-4">
              <a
                href="/u/joker-banny"
                class="flex-shrink-0 w-10 h-10 overflow-hidden rounded-full"
              >
                <img
                  src={pic}
                  alt="joker banny"
                  class="object-cover w-full h-full"
                />
              </a>
              <div class="flex flex-col ">
                <h1 className=" text-sm">Author:</h1>
                <h1 className="text-sm">{ singleBlogData &&  singleBlogData.timeCreated}</h1>
              </div>
            </div>
            <div class="flex items-center space-x-2 text-gray-400">
              <div class="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-4 h-4"
                ></svg>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
