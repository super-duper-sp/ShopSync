import React from 'react'

const Experimental = () => {
  return (
    <>
     <div className="bg-yellow-50 min-h-screen p-6 font-sans text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-4xl font-bold">Overview</h1>
          <p className="text-gray-500 text-sm mt-1">
            Welcome back, Bella! Your progress is really good. Keep it up
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-12 gap-6">

        {/* Left Column */}
        <div className="col-span-9 space-y-6">
          {/* Score Card */}
          <div className="p-6 bg-yellow-300 rounded-lg shadow flex items-center justify-between">
            <div>
              <p className="text-xl font-bold">
                9.6 <span className="text-lg font-semibold">AVERAGE SCORE</span>
              </p>
              <p className="text-gray-700 mt-2">Better than 86% of students</p>
            </div>
            <img src="https://via.placeholder.com/50" alt="Decorative" />
          </div>

          {/* Featured Courses */}
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Featured Courses</h2>
              <a
                href="#"
                className="text-yellow-500 hover:text-yellow-700 text-sm"
              >
                View all &rarr;
              </a>
            </div>
            <table className="w-full mt-4">
              <thead>
                <tr className="text-gray-500 text-sm">
                  <th className="text-left py-2">Course name</th>
                  <th className="py-2">Start</th>
                  <th className="py-2">Rate</th>
                  <th className="py-2">Type</th>
                  <th className="py-2">Save</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Basics of Mobile UX", start: "Feb 12", rate: 4.8 },
                  {
                    name: "Digital Design System",
                    start: "Feb 14",
                    rate: 4.6,
                  },
                  { name: "Basics of Mobile UX", start: "Feb 16", rate: 4.5 },
                  { name: "Basics of Mobile UX", start: "Feb 18", rate: 4.8 },
                ].map((course, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 text-sm"
                  >
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-800 rounded mr-3"></div>
                        <div>
                          <p className="font-semibold">{course.name}</p>
                          <p className="text-gray-400 text-xs">Bruno Scott</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">{course.start}</td>
                    <td className="text-center">{course.rate} ★</td>
                    <td className="text-center">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">
                        UI DESIGN
                      </span>
                    </td>
                    <td className="text-center">
                      <button className="text-gray-500 hover:text-gray-800">
                        &#128278;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-3 space-y-6">
            
          {/* Profile Card */}
          <div className="p-6 bg-white rounded-lg shadow text-center">
            <div className="w-16 h-16 mx-auto bg-gray-300 rounded-full"></div>
            <h3 className="mt-3 font-semibold text-lg">Irfan Ahsan</h3>
            <p className="text-gray-400 text-sm">Middle UX/UI Designer</p>
          </div>

          {/* Reminders */}
          <div className="p-4 bg-white rounded-lg shadow space-y-3">
            <h3 className="text-lg font-bold mb-2">Reminders</h3>
            <div className="p-3 bg-gray-100 rounded">
              <p className="font-semibold">Workshop</p>
              <p className="text-xs text-gray-500">8:00 AM - 12:00 PM</p>
            </div>
            <div className="p-3 bg-gray-100 rounded">
              <p className="font-semibold">Homework</p>
              <p className="text-xs text-gray-500">8:00 AM - 12:00 PM</p>
            </div>
          </div>

          {/* Upgrade */}
          <div className="p-6 bg-yellow-300 rounded-lg shadow text-center">
            <p className="font-semibold text-lg">Upgrade to Premium</p>
            <button className="mt-4 px-3 py-1 bg-black text-white rounded">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Experimental