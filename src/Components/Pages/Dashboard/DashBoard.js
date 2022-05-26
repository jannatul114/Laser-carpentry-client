import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    const [admin] = useAdmin(user)
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content bg-orange-200 pb-5">
                    <h1 className='text-center text-3xl font-bold my-5'>DashBoard</h1>
                    <Outlet />

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content gap-4">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to={'/dashboard/'}>My Profile</NavLink></li>
                        {!admin && <li><NavLink to={'/dashboard/addreview'}>Add Reviews</NavLink></li>}
                        {!admin && <li><NavLink to={'/dashboard/myorders'}>My Ordrs</NavLink></li>}
                        {admin && <li><NavLink to={'/dashboard/makeadmin'}>Make Admin</NavLink></li>}
                        {admin && <li><NavLink to={'/dashboard/addtools'}>Add Tools</NavLink></li>}
                        {admin && <li><NavLink to={'/dashboard/managetools'}>Manage Tools</NavLink></li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;