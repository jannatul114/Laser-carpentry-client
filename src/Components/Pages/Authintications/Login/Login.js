import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const Login = () => {
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        if (error || gError) {
            toast.error(error?.message || gError?.message)
        }
    }, [error, gError])

    if (user || gUser) {
        navigate(from, { replace: true });
    }
    if (loading || gLoading) {
        return <Loading />
    }

    const handleGoogleSignin = () => {
        signInWithGoogle()
    }
    return (
        <div className='hero min-h-screen '>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-3 border-2 border-gray-500 ">
                <form onSubmit={handleLogin}>
                    <div class="card-body">
                        <h1 className='text-center text-4xl text-primary'>Login</h1>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' class="input input-bordered" />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                        </div>
                        <p className='text-center'>New Here? <Link className='text-primary' to={'/registar'}>Create account</Link></p>

                    </div>
                </form>
                <div class="divider">OR</div>
                <button onClick={handleGoogleSignin} className='btn btn-glass hover:btn-accent'>Continue with Google</button>
            </div>

        </div>

    );
};

export default Login;