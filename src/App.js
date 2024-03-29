import React from "react";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import HomeScreen from "./screen/HomeScreen";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
import RegistrationScreen from "./screen/RegistrationScreen";
import ContactScreen from "./screen/ContactScreen";
import BlogScreen from "./screen/BlogScreen";
import MarineServiceScreen from "./screen/MarineServiceScreen";
import MarineSupplyScreen from "./screen/MarineSupplyScreen";
import ProtectedRoute from "./protectedRouted/ProtectedRoute";
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import SingleBlogsScreen from "./screen/SingleBlogsScreen";
import Addblog from "./components/myblogs/Add-blog";
import MyBlogScreen from "./screen/MyBlogScreen";


function App() {
  return (
    <div>
     <Toaster />
      <Navbar />
      <hr /> 

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomeScreen />
            </ProtectedRoute>
          }
        />

        <Route path="/contactus" element={<ContactScreen />} />
        <Route path="/all-blogs" element={<BlogScreen />} />
        <Route path="/all-blogs/singleblog/:id" element={<SingleBlogsScreen />} />
        <Route
          path="/Marine-Service"
          element={
            <ProtectedRoute>
              <MarineServiceScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Marine-Supply"
          element={
            <ProtectedRoute>
              <MarineSupplyScreen />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registration" element={<RegistrationScreen />} />
        <Route path="/my-blogs/add-blog" element={<Addblog />}/>
         <Route path="/my-blogs" element={<MyBlogScreen />}/>
      </Routes>
      
  
      <Footer />


      
    </div>
  );
}

export default App;
