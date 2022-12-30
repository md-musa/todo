import React from 'react';
import { useState } from 'react';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import app from '../firebaseConfig';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../context/AuthProvider';

function Login() {
  const auth = getAuth(app);
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let from = location.state?.from?.pathname || '/';

  const handleLoginWithEmailAndPassword = async e => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const { displayName: name, email, photoURL: image } = result.user;
      setUser({ name, email, image });
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const googleProvider = new GoogleAuthProvider();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { displayName: name, email, photoURL: image } = result.user;
      setUser({ name, email, image });
      navigate(from, { replace: true });

      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-[40%] m-auto shadow-lg rounded-md border-2 border-gray-100 p-8 mt-5">
      <form onSubmit={handleLoginWithEmailAndPassword} className="my-5">
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your email
          </label>
          <input
            type="email"
            id="email"
            onChange={e => setEmail(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required=""
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your password
          </label>
          <input
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Remember me
          </label>
        </div>
        <div className="flex w-full items-center justify-center">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Login
          </button>
        </div>
      </form>

      <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="flex flex-col items-center justify-center">
        <button
          onClick={loginWithGoogle}
          type="button"
          class="text-white my-3 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-7 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55">
          <svg
            class="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512">
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
          </svg>
          Sign in with Google
        </button>

        <p className="text-lg mt-5">
          Don't have an account?{' '}
          <Link to={'/register'}>
            <span className=" px-1 shadow border border-gray-200 text-blue-600 rounded-md cursor-pointer hover:underline text-md">
              Register now
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
