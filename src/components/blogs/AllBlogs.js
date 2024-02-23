import React, { useState } from "react";
import pic from "../../assets/gallary4.jpg";
import { useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const AllBlogs = () => {
  const [allBlogs ,setAllBlogs]=useState([])
  const navigate=useNavigate()
  ////////////////////all blog api///////////////////////////
  useEffect(()=>{
           axios.get("http://localhost:5000/api/blog/all-blogs")
           .then(res=>setAllBlogs(res.data))
  },[])


  console.log(allBlogs)
  return (



<div className="flex flex-wrap justify-evenly ">
{
  allBlogs.map((data,index)=>{
    return(
   <div onClick={()=>navigate(`/all-blogs/singleblog/${data._id}`)} class=" max-w-sm m-2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
   
      <div class="flex flex-col  p-2 ">
        <img
          class=" h-[200px] mb-3 rounded shadow-lg "
          src={data.image}
          alt="Bonnie image"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {data.title}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">
         {data.description}
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
                <h1 className="text-sm">Sunday, 10 March 2024</h1>
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
          <a
            href="#"
            class="inline-flex items-center px-4 text-sm font-medium text-center text-blue-900 "
          >
            {`Read More >`}
          </a>
        </div>
      </div>
    </div>
    )
  })
}

 


    </div>
  );
};

export default AllBlogs;
