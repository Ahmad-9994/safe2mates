import React, { useState, createContext } from 'react';
import toast from 'react-hot-toast';

const globalData = createContext();

const Context = ({ children }) => {
  const [isUserId, setIsUserId] = useState();
    const [visible, setVisible] = useState(false);

 


 
  return (
    <globalData.Provider value={{visible,setVisible}}>
      {children}
    </globalData.Provider>
  );
};

export { Context, globalData };
