import { Routes, Route, Navigate, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-black">
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route
            path="/home"
            element={
              <h1 className="text-3xl font-bold text-center mt-10">
                Welcome to Cinnamon City Hotel Booking!
              </h1>
            }
          />
          <Route
            path="/about"
            element={
              <h1 className="text-3xl font-bold text-center mt-10">About Us</h1>
            }
          />
          <Route
            path="/contact"
            element={
              <h1 className="text-3xl font-bold text-center mt-10">
                Contact Us
              </h1>
            }
          />
        </Routes>
      </div>
      <Toaster position="top-center" />
    </>
  );
}

export default App;
