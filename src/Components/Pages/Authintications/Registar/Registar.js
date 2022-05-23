import React, { useEffect } from 'react';
import auth from '../../../../firebase.init';
// import { useCreateUserWithEmailAndPassword } from 'firebase'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../Shared/Loading/Loading';
const Registar = () => {
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (error || gError) {
            toast.error(error.message || gError.message)
        }
    }, [error, gError])
    if (user || gUser) {
        navigate(from, { replace: true });

    }

    if (loading || gLoading) {
        return <Loading />
    }

    const handleGoogleLogin = () => {
        signInWithGoogle();
    }

    const handleRegistar = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);

    }
    return (
        <div className='hero min-h-screen'>

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-4  p-3 border-2 border-gray-500">
                <form onSubmit={handleRegistar} >
                    <div class="card-body">
                        <h1 className='text-center text-4xl text-primary'>Registar</h1>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" class="input input-bordered" required />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Registar</button>
                        </div>
                        <p className='text-center'>Already have an accoune? <Link className='text-primary' to={'/login'}>Login </Link></p>

                        <div class="divider">OR</div>
                        <button onClick={handleGoogleLogin} className='btn btn-glass hover:btn-accent'>Continue with Google</button>
                    </div>
                </form>
            </div>

        </div>

    );
};

export default Registar;