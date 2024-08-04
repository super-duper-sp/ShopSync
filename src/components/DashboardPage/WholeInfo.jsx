import React from 'react'
import { TrendingUp } from "lucide-react";


const WholeInfo = () => {
  return (
    <div className="h-screen w-full  flex flex-col py-16 px-14 space-x-3 ">
    <h1 className="font">Dashboard</h1>

    <div className="flex space-x-2">
      <div className="  px-4 py-4  rounded-xl border-2  border-gray-200">
        <div>
          <h1 className="text-lg font-bold">Total Revenue</h1>
          <h1 className="text-sm text-gray-400">
            12 january 2020 - 12 january 2024
          </h1>

          <div className="mt-10 flex flex-col">
            <div className="font-bold text-4xl">₹ 75,843.52</div>
            <div className=" py-2 px-2 mr-auto border-2 border-gray-200 rounded-b-full rounded-r-full">
              <h1 className="text-sm">You have a great performance </h1>
            </div>
            <div className="mt-4"></div>
          </div>
        </div>

        <div className="flex">
          <div className="py-4 px-4 rounded-sm   border-gray-300 flex items-center justify-center">
            <div className="mr-4">
              <div className="w-8 h-8 bg-blue-200 rounded-full flex justify-center items-center">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm text-gray-500">
                Avg. monthly growing
              </div>
              <h1 className="font-bold text-2xl">
                2.24<span className="text-sm">%</span>
              </h1>
            </div>
          </div>

          <span className="h-14 bg-gray-400 w-2 mx-1 mt-8"></span>

          <div className="py-4 px-4 rounded-sm   border-gray-600 flex items-center justify-center">
            <div className="mr-4">
              <div className="w-8 h-8 bg-blue-200 rounded-full flex justify-center items-center">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm text-gray-500">
                Avg. monthly growing
              </div>
              <h1 className="font-bold text-2xl">
                2.24<span className="text-sm">%</span>
              </h1>
            </div>
          </div>

          <span className="h-14 bg-gray-400 w-2 mx-1 mt-8"></span>

          <div className="py-4 px-4 rounded-sm   border-gray-600 flex items-center justify-center">
            <div className="mr-4">
              <div className="w-8 h-8 bg-blue-200 rounded-full flex justify-center items-center">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm text-gray-500">
                Avg. monthly growing
              </div>
              <h1 className="font-bold text-2xl">
                2.24<span className="text-sm">%</span>
              </h1>
            </div>
          </div>

          <span className="h-14 bg-gray-400 w-2 mx-1 mt-8"></span>

          <div className="py-4 px-4 rounded-sm   border-gray-600 flex items-center justify-center">
            <div className="mr-4">
              <div className="w-8 h-8 bg-blue-200 rounded-full flex justify-center items-center">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm text-gray-500">
                Avg. monthly growing
              </div>
              <h1 className="font-bold text-2xl">
                2.24<span className="text-sm">%</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-4 px-4 border-2 rounded-xl border-gray-200">
        <p>okkk</p>
        <div className="flex flex-row">
          <div className="flex-1 space-y-2 py-2 px-2 flex-col">
            <div className="py-2 px-2 rounded-lg border-2 flex flex-col bg-[#fedaad]">
              <div className="flex justify-between">
                <div>BTC</div>
                <div>ok</div>
              </div>
              <div className="mt-10">₹ 12,933</div>
            </div>
            <div className="py-2 px-2 rounded-lg border-2 bg-[#c1dfe6]">
              <div className="flex justify-between">
                <div>BTC</div>
                <div>okkk</div>
              </div>
              <div className="mt-10">₹ 12,933</div>
            </div>
          </div>
          <div className="flex-1 space-y-2 py-2 px-2 flex-col">
            <div className="py-2 px-2 rounded-lg border-2 bg-[#dacdf5]">
              <div className="flex justify-between">
                <div>BTC</div>
                <div>ok</div>
              </div>
              <div className="mt-10">₹ 12,933</div>
            </div>
            <div className="py-2 px-2 rounded-lg border-2 bg-[#c9eff9]">
              <div className="flex justify-between">
                <div>BTC</div>
                <div>ok</div>
              </div>
              <div className="mt-10">₹ 12,933</div>
            </div>
            <div className="py-2 px-2 rounded-lg border-2 bg-[#f5f6ab]">
              <div className="flex justify-between">
                <div>BTC</div>
                <div>ok</div>
              </div>
              <div className="mt-10">₹ 12,933</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  </div>
  )
}

export default WholeInfo