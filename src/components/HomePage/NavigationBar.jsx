import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, LayoutDashboard, Clock3, BarChart2, ArrowRight, ArrowRightLeft, HelpCircleIcon } from "lucide-react";
import { logoutUser } from "../../features/Auth/AuthAction";
import Cookies from 'js-cookie';

const navlinks = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/home" },
  { name: "Analytics", icon: BarChart2, path: "/home/analytics" },
  { name: "Daily Transactions", icon: ArrowRightLeft, path: "/home/dailytransactions" },
  // {
  //   name: "Settings",
  //   icon: HelpCircleIcon,
  //   path: "/home/settings",
  //   subRoutes: [
  //     { name: "Shop Settings", path: "/home/settings/shop" },
  //     { name: "User Settings", path: "/home/settings/user" }
  //   ]
  // },
  { name: "Shop Settings", icon: ArrowRightLeft, path: "/home/settings/shop", role: "admin" }, // Role restricted
  { name: "User Settings", icon: ArrowRightLeft, path: "/home/settings/user"  },
  { name: "Clock", icon: Clock3, path: "/home/clock" },
];



const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "7%" },
};

const NavigationBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedSetting, setExpandedSetting] = useState(false);
  const [navHeight, setNavHeight] = useState('auto');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  
  // Filter navlinks based on user role
const filteredNavlinks = navlinks.filter(
  (item) => !item.role || (user?.role.includes(item.role))
); 

  useEffect(() => {
    // Function to update the height based on the content
    const updateNavHeight = () => {
      const nav = document.querySelector(".nav-container");
      if (nav) {
        setNavHeight(`${nav.scrollHeight}px`);
      }
    };

    // Update the height initially
    updateNavHeight();

    // Optionally, add a resize event listener to adjust height if needed
    window.addEventListener("resize", updateNavHeight);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateNavHeight);
    };
  }, [isExpanded, expandedSetting]);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());

      // Clear local storage or session storage if necessary
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('userData');

      Cookies.remove('token');

      // Redirect to login or home page

    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className={`sticky top-0 py-12 bg-black flex flex-col border-r-2 h-auto relative ${isExpanded ? "px-10" : "px-4"} nav-container`}
      style={{ height: navHeight }}
    >
      <div className="flex space-x-3 items-center">
        {/* <img className="h-7 w-9" src="" /> */}
        <span className={`mx-auto text-2xl font-black leading-none ${isExpanded ? "text-4xl" : "text-sm"}  text-white select-none`}>
          ShopSync<span className="text-orange-600">.</span>
        </span>
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-8 h-8 bg-[#e34a0e] rounded-full absolute top-16 -right-[10px] flex justify-center items-center cursor-pointer"
      >
        <ArrowRight className="w-6 text-white" />
      </div>

      <div className="mt-10 flex flex-col space-y-8">

        {filteredNavlinks.map((item, index) => (
          <div key={index}>

            <NavLink
              to={item.path}
              end={item.path === "/home"} // This ensures exact match for the dashboard
              className={({ isActive }) =>
                `relative group flex p-2 space-x-3 rounded text-white cursor-pointer hover:bg-[#d53c1e] ${isActive ? "bg-[#d53c1e] text-white font-semibold" : ""}`
              }
              onClick={() => {
                if (item.subRoutes) {
                  setExpandedSetting(!expandedSetting);
                }
              }}
            >
              <item.icon className="ml-3" />
              <span className={isExpanded ? "block" : "hidden"}>{item.name}</span>
            </NavLink>

            {expandedSetting && item.subRoutes && isExpanded && (
             <div className="ml-8 mt-2 flex flex-col space-y-2">
             {item.subRoutes.map((subItem, subIndex) => {

              //  if (user?.role.includes('shopmember') || user?.role.includes('admin')) {
              //    return (
                   <NavLink
                     key={subIndex}
                     to={subItem.path}
                     className={({ isActive }) =>
                       `flex p-2 space-x-3 rounded text-white cursor-pointer hover:bg-slate-600 ${
                         isActive ? "bg-slate-600 text-white font-semibold" : ""
                       }`
                     }
                   >
                     <span>{subItem.name}</span>
                   </NavLink>
              //    );
              //  }
              //  return null; // Render nothing if the role doesn't match
             })}
           </div>
            )}

          </div>
        ))}

      </div>

      {user && (
        <div
          onClick={handleLogout}
          className="flex p-2 mt-10 space-x-5 text-white font-bold rounded hover:bg-[#ff7849] cursor-pointer"
        >
          <div className="w-10 h-10 bg-[#5e5d5d] rounded-full flex justify-center items-center cursor-pointer ">
            <LogOut className="ml-1" />
          </div>
          <span className={isExpanded ? "block mt-2" : "hidden"}>Log Out</span>
        </div>
      )}
    </motion.div>
  );
};

export default NavigationBar;
