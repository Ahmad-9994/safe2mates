import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomeScreen from "./screen/HomeScreen";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
                      <Navbar />
                        <hr />
                       <HomeScreen />
                       <Footer />
    </div>
  );
}

export default App;
