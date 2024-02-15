import React, { useState } from 'react'

const BlogScreen = () => {
     fetch("https://jsonplaceholder.typicode.com/posts")
     .then((res)=>res.json())
     .then((result)=>console.log(result))
     .catch((error)=>{console.log(error)})
  return (
    <div>
      BLOGS
    </div>
  )
}

export default BlogScreen
