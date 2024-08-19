import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Personalised/Logo";
import { loginUser } from "../features/Auth/AuthAction";
import shopsync from "../assets/shopsync.gif";


export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  if (isAuthenticated) {
    navigate("/home"); 
  }

  return (
    <>

   
    <div className="relative flex flex-col justify-center min-h-screen py-12 bg-black sm:px-6 lg:px-8">
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-start space-x-8">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 sm:max-w-md">
          <h2 className="mt-6 text-3xl font-extrabold text-center text-white leading-9">
            Log in to your account
          </h2>
          <p className="mt-2 text-sm text-center text-gray-500 leading-5 max-w">
            Or{" "}
            <Link
              to="/signup"
              className="font-medium text-orange-500 hover:text-orange-400 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              create a new account
            </Link>
          </p>

          <div className="mt-8 sm:max-w-md">
            <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 leading-5"
                  >
                    Email address
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoFocus
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-orange focus:border-orange-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 leading-5"
                  >
                    Password
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-orange focus:border-orange-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="text-sm leading-5">
                    <a
                      href="/#"
                      className="font-medium text-orange-500 hover:text-orange-400 focus:outline-none focus:underline transition ease-in-out duration-150"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div className="mt-6">
                  <span className="block w-full rounded-md shadow-sm">
                    <button
                      type="submit"
                      className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-orange-500 border border-transparent rounded-md hover:bg-orange-400 focus:outline-none focus:border-orange-400 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                      disabled={loading}
                    >
                      {loading ? "Signing in..." : "Sign in"}
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Logo and Description Section */}
        <div className="w-full lg:w-1/2 lg:flex lg:items-center lg:justify-center">
          <div className="p-4 text-gray-400">
            <div className="flex justify-center items-center">
              <Logo src={shopsync} alt="shopsyncLogo" width="300px" />
            </div>
            <p className="mt-4 text-center">
              “ShopSync equips shop owners with cutting-edge tools to analyze, forecast, and strategize for success. Our platform is designed to help you anticipate trends, identify growth opportunities, and optimize your business strategies—all while keeping your data secure and accessible.”
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};
