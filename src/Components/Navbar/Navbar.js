import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
    }

    return (
        <div>
            <div class="navbar lg:px-12 bg-orange-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-4">
                            <li><NavLink to={'/home'}>Home</NavLink></li>
                            {
                                user && <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                            }
                            {
                                user ? <button onClick={handleSignOut} className='btn btn-assert'>Signout</button> : <li><NavLink to={'/login'}>Login</NavLink></li>
                            }
                            {user && <li>{user.name || user.displayName}</li>}
                            <li><NavLink to={'/myportfolio'}>My Portfolio</NavLink></li>
                            <li><NavLink to={'/blogs'}>Blogs</NavLink></li>


                        </ul>
                    </div>
                    <p class="btn btn-ghost normal-case text-xl">Laser Carpentry</p>
                    <label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 m-0 gap-x-3">
                        {user && <li><button className='btn btn-ghost'>{user.name || user.displayName?.length >= 6 ? user.name?.slice(0, 6) || user?.displayName.slice(0, 6) : user.name || user?.displayName}</button></li>}
                        <li><NavLink to={'/home'}>Home</NavLink></li>
                        {
                            user && <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                        }
                        {
                            user ? <button onClick={handleSignOut} className='btn btn-assert'>Signout</button> : <li><NavLink to={'/login'}>Login</NavLink></li>
                        }

                        <li><NavLink to={'/myportfolio'}>My Portfolio</NavLink></li>
                        <li><NavLink to={'/blogs'}>Blogs</NavLink></li>


                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;