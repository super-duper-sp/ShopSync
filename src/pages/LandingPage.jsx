import React from 'react'
import Header from '../components/LandingPage/Header'
import Footer from '../components/LandingPage/Footer'
import Plan from '../components/LandingPage/Plan'
import Testimonials from '../components/LandingPage/Testimonials'



function LandingPage() {
  return (

    <>
    
<Header/>
<>
  <section className="px-2 py-32 bg-white md:px-0">
    <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
      <div className="flex flex-wrap items-center sm:-mx-3">
        <div className="w-full md:w-1/2 md:px-3">
          <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Useful Tools to</span>
              <span className="block text-orange-600 xl:inline">
                Help You Grow Faster.
              </span>
            </h1>
            <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
              It's never been easier to build beautiful websites that convey
              your message and tell your story.
            </p>
            <div className="relative flex flex-col sm:flex-row sm:space-x-4">
              <a
                href="#_"
                className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-orange-600 rounded-md sm:mb-0 hover:bg-orange-700 sm:w-auto"
              >
                Try It Free
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={5} y1={12} x2={19} y2={12} />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#_"
                className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
            <img src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
      <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
        <img
          src="https://cdn.devdojo.com/images/december2020/productivity.png"
          className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
        />
      </div>
      <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
          Boost Productivity
        </h2>
        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
          Build an atmosphere that creates productivity in your organization and
          your company culture.
        </p>
        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
          <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-600 rounded-full">
              <span className="text-sm font-bold">✓</span>
            </span>{" "}
            Maximize productivity and growth
          </li>
          <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-600 rounded-full">
              <span className="text-sm font-bold">✓</span>
            </span>{" "}
            Speed past your competition
          </li>
          <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-600 rounded-full">
              <span className="text-sm font-bold">✓</span>
            </span>{" "}
            Learn the top techniques
          </li>
        </ul>
      </div>
    </div>
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
      <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-orange-600 lg:text-3xl md:text-2xl">
          Automated Tasks
        </h2>
        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
          Save time and money with our revolutionary services. We are the
          leaders in the industry.
        </p>
        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
          <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-600 rounded-full">
              <span className="text-sm font-bold">✓</span>
            </span>{" "}
            Automated task management workflow
          </li>
          <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-600 rounded-full">
              <span className="text-sm font-bold">✓</span>
            </span>{" "}
            Detailed analytics for your data
          </li>
          <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-600 rounded-full">
              <span className="text-sm font-bold">✓</span>
            </span>{" "}
            Some awesome integrations
          </li>
        </ul>
      </div>
      <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
        <img
          src="https://cdn.devdojo.com/images/december2020/settings.png"
          className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
        />
      </div>
    </div>
  </section>
  <section className="py-20 bg-gray-50">
    <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
      <div className="flex flex-wrap items-center -mx-3">
        <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
          <div className="w-full lg:max-w-md">
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
              Jam-packed with all the tools you need to succeed!
            </h2>
            <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
              It's never been easier to build a business of your own. Our tools
              will help you with the following:
            </p>
            <ul>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <svg
                  className="w-8 h-8 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
                <span className="font-medium text-gray-500">
                  Faster Processing and Delivery
                </span>
              </li>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <svg
                  className="w-8 h-8 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span className="font-medium text-gray-500">
                  Out of the Box Tracking and Monitoring
                </span>
              </li>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="font-medium text-gray-500">
                  100% Protection and Security for Your App
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
          <img
            className="mx-auto sm:max-w-sm lg:max-w-full"
            src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
            alt="feature image"
          />
        </div>
      </div>
    </div>
  </section>
 <Testimonials/>
 <Plan/>
</>


<Footer/>
</>
  )
}

export default LandingPage