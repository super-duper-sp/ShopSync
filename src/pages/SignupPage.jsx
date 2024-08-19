import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Personalised/Logo";
import shopsync from "../assets/shopsync.gif";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/Auth/AuthAction";
import Message from "../components/BlurMsg/Message";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(""); // State for password mismatch error
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return; // Prevent form submission
    }
    try {
      setPasswordError(""); // Clear any previous error messages
      const credentials = { name, email, password };
      await dispatch(registerUser(credentials));
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Failed to register user");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center min-h-screen py-12 bg-black sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-start space-x-8">
          {error && (
            <Message message={error} color="red" />
          )}

          {/* Conditionally render password mismatch message */}
          {passwordError && (
            <Message message={passwordError} color="red" />
          )}

          <div className="w-full lg:w-1/2 sm:max-w-md">
            <h2 className="mt-6 text-3xl font-extrabold text-center text-white leading-9">
              Sign up to your account
            </h2>
            <p className="mt-2 text-sm text-center text-gray-500 leading-5 max-w">
              Or{" "}
              <Link
                to="/login"
                className="font-medium text-orange-500 hover:text-orange-400 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                have an account? Log In
              </Link>
            </p>

            <div className="mt-8 sm:max-w-md">
              <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                <form onSubmit={handleSubmit}>
                  <div className="mt-6">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 leading-5"
                    >
                      Full Name
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-orange-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="emailAdd"
                      className="block text-sm font-medium text-gray-700 leading-5"
                    >
                      Email Address
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="emailAdd"
                        name="emailAdd"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-orange-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        required
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
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-orange-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700 leading-5"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-orange-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                      <button
                        type="submit"
                        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-orange-500 border border-transparent rounded-md hover:bg-orange-400 focus:outline-none focus:border-orange-700 focus:shadow-outline-indigo active:bg-orange-700 transition duration-150 ease-in-out"
                      >
                        Sign Up
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:flex lg:items-center lg:justify-center">
            <div className="p-4 text-gray-400">
              <div className="flex justify-center items-center">
                <Logo src={shopsync} alt="shopsynclogo" width="300px" />
              </div>
              <p className="mt-4 text-center">
                “ShopSync equips shop owners with cutting-edge tools to analyze,
                forecast, and strategize for success. Our platform is designed
                to help you anticipate trends, identify growth opportunities,
                and optimize your business strategies—all while keeping your
                data secure and accessible.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
