import React, { useState, createContext } from 'react';
import toast from 'react-hot-toast';

const globalData = createContext();

const Context = ({ children }) => {
  const [islogin, setIsLogin] = useState(false);

  function login() {
    toast.success("user successfully login")
      setIsLogin(true);
  };

  const logout = () => {
      toast.success("user successfully logout")
    setIsLogin(false);
  };



  ////////////////////////////////all user record//////////
  const[alluser ,setAllUser]=useState([])
  return (
    <globalData.Provider value={{islogin,setIsLogin, login ,logout,alluser,setAllUser}}>
      {children}
    </globalData.Provider>
  );
};

export { Context, globalData };
