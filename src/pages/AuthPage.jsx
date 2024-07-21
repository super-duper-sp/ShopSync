import React,{useState} from 'react'

const AuthPage = () => {

      const [isLogin,setIsLogin] = useState(true);

  const [loginEmail,setLoginEmail] = useState("");
  const [loginPassword,setLoginPassword] = useState("");

  const [registerEmail,setRegisterEmail] = useState("");
  const [registerPassword,setRegisterPassword] = useState("");
  const [registerName,setRegisterName] = useState("");
  const [registerAvatar,setRegisterAvatar] = useState("");
  

      const LoginForm = () => {
    return(
       <>
       {/*Form*/}
    <div className="sm:w-1/2 px-16">
      <h2 className="font-bold text-2xl text-[#4527a5] text-center">Login</h2>
      <p className="text-sm mt-7 text-[#6c57b1] text-opacity-70 text-center">
        If you already a member, easily log in
      </p>
      {/*Data entry group*/}
      <form className="flex flex-col gap-4" action="">
        <input
          className="p-2 mt-8 rounded-xl border"
          type="text"
          name="email"
          placeholder="Your email"
        />
        <div className="relative">
          <input
            className="p-2 mt-8 rounded-xl border w-full"
            type="password"
            name="password"
            placeholder="Your password"
          />
          {/*SVG Eye*/}
          <svg
            className="bi bi-eye-fill absolute top-1/2 right-4 
              translate-y-1/2"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="gray"
            viewBox="0 0 16 16"
          >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
          </svg>
        </div>
        <button className="Login-button rounded-xl text-white py-2">
          Login
        </button>
      </form>
      <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400" />
        <p className="text-center text-sm">OR</p>
        <hr className="border-gray-400" />
      </div>
      <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center text-sm">
        <img className="w-6 mr-3" src="./img/google_logo_icon.png" alt="" />
        Login width Google
      </button>
      <p className="mt-5 text-xs border-b border-gray-400 py-4">
        <a href="">Forgot Your password?</a>
      </p>
      <div className="mt-3 text-xs flex justify-between items-cente">
        <p>
          <a onClick={() => setIsLogin(true)} >If you dont't have an account?</a>
        </p>
        <button className="py-2 px-5 bg-white border rounded-xl">
          Register
        </button>
      </div>
    </div>
    {/*Image*/}
    <div className="sm:block hidden w-1/2">
      <img
        className="sm:block hidden rounded-2xl"
        src="../assets/images/login.jpeg"
        alt="img-login"
      />
    </div>
       </>
    )
  }
  
  const  SignUpForm = () => {
     return(
       <></>
     )
  }

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">

  {/*Login and Signup container*/}
  <div className="bg-[#7ad3f62a] flex rounded-2xl shadow-lg max-w-3xl p-4">
   {
        isLogin? (
         <LoginForm/>
        ):(
         <SignUpForm/>
        )
      }
    
  </div>
  {/*===============*/}
</section>

  )
}

export default AuthPage


// import React,{useState} from 'react'

// const AuthPage = () => {

//   const [isLogin,setIsLogin] = useState(true);

//   const [loginEmail,setLoginEmail] = useState("");
//   const [loginPassword,setLoginPassword] = useState("");

//   const [registerEmail,setRegisterEmail] = useState("");
//   const [registerPassword,setRegisterPassword] = useState("");
//   const [registerName,setRegisterName] = useState("");
//   const [registerAvatar,setRegisterAvatar] = useState("");
  
//   const LoginForm = () => {
//     return(
//        <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
//              <h2 className='p-3 text-3xl font-bold text-pink-400'>Horiz</h2>
//              <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
//              <h3 className='text-xl font-semibold text-blue-400 pt-2'>Sign In!</h3>
//              <div className='flex space-x-2 m-4 items-center justify-center'>
//                 {/* <div className="socialIcon">
//                 <Facebook/>
//                 </div>
//                 <div className="socialIcon">
//                 <GitHub/>
//                 </div>
//                 <div className="socialIcon">
//                 <Google/>  
//                 </div> */}
//              </div>
//              {/* Inputs */}
//              <div className='flex flex-col items-center justify-center'>
//               <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Email'></input>
//               <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
//               <button className='rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in'>
//                 Sign In
//               </button>
//              </div>
//              <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
//              <p className='text-blue-400 mt-4 text-sm'>Don't have an account?</p>
//              <p className='text-blue-400 mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(false)}>Create a New Account?</p>
//           </div>
//     )
//   }
  
//   const  SignUpForm = () => {
//      return(
//         <div className="bg-blue-400 text-white rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
//               <h2 className='p-3 text-3xl font-bold text-white'>Horiz</h2>
//              <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
//              <h3 className='text-xl font-semibold text-white pt-2'>Create Account!</h3>
//              <div className='flex space-x-2 m-4 items-center justify-center'>
//                 {/* <div className="socialIcon border-white">
//                 <Facebook className="text-white"/>
//                 </div>
//                 <div className="socialIcon border-white">
//                 <GitHub className="text-white"/>
//                 </div>
//                 <div className="socialIcon border-white">
//                 <Google className="text-white"/>  
//                 </div> */}
//              </div>
//              {/* Inputs */}
//              <div className='flex flex-col items-center justify-center mt-2'>
//              <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Name'></input>
//               <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Email'></input>
//               <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
//               <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Avatar URL'></input>
//               <button className='rounded-2xl m-4 text-blue-400 bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-blue-400 transition duration-200 ease-in'>
//                 Sign Up
//               </button>
//              </div>
//              <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
//              <p className='text-white mt-4 text-sm'>Already have an account?</p>
//              <p className='text-white mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(true)}>Sign In to your Account?</p>
//           </div>
//      )
//   }

//   return (
//     <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen md:py-2">
//     <main className="flex items-center w-full px-2 md:px-20">
//       <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
//         <p className='text-6xl text-blue-500 font-bold'>Horiz</p>
//         <p className='font-medium text-lg leading-1 text-pink-400'>Explore your interests, meet new friends & expand your horions</p>
//       </div>
//       {
//         isLogin? (
//          <LoginForm/>
//         ):(
//          <SignUpForm/>
//         )
//       }
//     </main>
//     </div>
//   )
// }

// export default AuthPage