
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './Components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Authintications/Login/Login';
import Registar from './Components/Pages/Authintications/Registar/Registar';
import Blogs from './Components/Pages/Blogs/Blogs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registar' element={<Registar />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
