
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Purchase from './Components/Pages/Purchase/Purchase';
import RequireAuth from './Components/Pages/Authintications/RequireAuth/RequireAuth';
import NotFound from './Components/Pages/NotFound/NotFound';
import DashBoard from './Components/Pages/Dashboard/DashBoard';

import AddReview from './Components/Pages/Dashboard/AddReview';
import MyOrders from './Components/Pages/Dashboard/MyOrders';
import MyPortfolio from './Components/Pages/MyPortfolio/MyPortfolio';
import MyProfile from './Components/Pages/Dashboard/MyProfile';
import AllUsers from './Components/Pages/Dashboard/AllUsers';
import RequireAdmin from './Components/Pages/Authintications/RequireAdmin/RequireAdmin';


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
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>}>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/dashboard' element={<RequireAuth><DashBoard /></RequireAuth>}>
          <Route index element={<MyProfile />}></Route>
          <Route path='addreview' element={<AddReview />}></Route>
          <Route path='myorders' element={<MyOrders />}></Route>
          <Route path='allusers' element={<RequireAdmin><AllUsers /></RequireAdmin>}></Route>
        </Route>
        <Route path='myportfolio' element={<MyPortfolio />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
