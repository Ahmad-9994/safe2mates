import { useState } from 'react';
import React from 'react'
import { Modal } from 'antd';
import {useFormik }from "formik"
import { useContext } from 'react';
import { globalData } from '../../Context';
import axios from "axios"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const Addblog = () => {
    const {visible ,setVisible}=useContext(globalData)
    const navigate=useNavigate()

  const [blogData ,setBlogData]=useState({
    title:"",
    description:"",
    image:""
  })

  function closeModel(){
    setVisible(false)
  }

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: blogData,
    onSubmit: async (values) => {    
      try {
       await axios.post("http://localhost:5000/api/blog/add-blog" ,values)
       .then(res=>toast.success(res.data.message))
       setVisible(false)
       navigate("/my-blogs")
       
      } catch (error) {
        console.log(error)
      }
    }
  });

   React.useEffect(() => {
    setBlogData(values);
  }, [values]);





  return (

    <div >
 
    <Modal
      visible={visible}
      onCancel={closeModel}
    >
   

      <form id="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="block text-gray-700">Title</label>
          <input type="text" id="title" name="title" value={blogData.title} placeholder="Write Title" onChange={handleChange} required className="form-input mt-1 block w-full rounded-md border-gray-300" />
        </div>


        <div className="form-group mt-4">
          <label htmlFor="description" className="block text-gray-700">Description</label>
          <textarea id="description" name="description"  value={blogData.description}  placeholder="Write Here Description" onChange={handleChange} required className="form-textarea mt-1 h-[200px] block w-full rounded-md border-gray-300" />
        </div>


         <div className="form-group mt-4">
          <label htmlFor="image" className="block text-gray-700">Images URL</label>
          <input type="text" id="image" name="image" placeholder="Images URL"  value={blogData.image}  required onChange={handleChange} className="form-input mt-1 block w-full  rounded-md border-gray-300" />
        </div>
        
        <div className="mt-6">
          <button type="submit"  className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add Blog</button>

        </div>
      </form>
    </Modal>
    </div>
  )
}

export default Addblog
