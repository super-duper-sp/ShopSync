import React, { useEffect } from "react";
import { TrendingUp } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTotalRevenue,
  fetchLowestMonthlySales,
  fetchHighestMonthlySales,
  fetchAverageSales,
} from "../../features/Dashboard/DashboardAction";
import SalesYearly from "../AnalyticsPage/SalesYearly";

const WholeInfo = () => {
  const dispatch = useDispatch();
  const {
    totalRevenue,
    highestMonthlySales,
    lowestMonthlySales,
    averageSales,
    status,
    error,
  } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchTotalRevenue());
    dispatch(fetchLowestMonthlySales());
    dispatch(fetchHighestMonthlySales());
    dispatch(fetchAverageSales());
  }, [dispatch]);

  return (
    <div className="h-screen w-full flex flex-col py-16 px-4 sm:px-8 lg:px-14 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
        {/* Total Revenue Card */}
        <div className="w-full lg:w-1/2 px-4 py-4 rounded-xl border-2 border-gray-200 bg-white shadow-md">
          <h2 className="text-lg font-bold">Total Revenue</h2>
          <p className="text-sm text-gray-400">
            12 January 2020 - 12 January 2024
          </p>
          <div className="mt-6 flex flex-col">
            <div className="font-bold text-4xl">
              ₹ {totalRevenue?.toLocaleString() || "Loading..."}
            </div>
            <div className="py-2 px-2 border-2 border-gray-200 rounded-b-full rounded-r-full mt-2">
              <p className="text-sm">You have a great performance</p>
            </div>
          </div>
        </div>

        <SalesYearly/>
      </div>

      {/* Highest and Lowest Month Info */}
      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
        <div className="w-full lg:w-1/2 py-4 px-4 border-2 rounded-xl border-gray-200 bg-white shadow-md">
          <div className="py-2 px-4 rounded-lg border-2 bg-[#fedaad]">
            <div className="flex justify-between">
              <div className="text-xl font-bold">Highest Month</div>
              <div className="mt-4 text-xl font-medium">
                {highestMonthlySales
                  ? new Date(`${highestMonthlySales.month}-1`).toLocaleString(
                      "default",
                      { month: "long", year: "numeric" }
                    )
                  : "Loading..."}
              </div>
            </div>
            <div className="mt-4 text-xl font-medium">
              ₹ {highestMonthlySales?.sales?.toLocaleString() || "Loading..."}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 py-4 px-4 border-2 rounded-xl border-gray-200 bg-white shadow-md">
          <div className="py-2 px-4 rounded-lg border-2 bg-[#c1dfe6]">
            <div className="flex justify-between">
              <div className="text-xl font-bold">Lowest Month</div>
              <div className="mt-4 text-xl font-medium">
                {lowestMonthlySales
                  ? new Date(`${lowestMonthlySales.month}-1`).toLocaleString(
                      "default",
                      { month: "long", year: "numeric" }
                    )
                  : "Loading..."}
              </div>
            </div>
            <div className="mt-4 text-xl font-medium">
              ₹ {lowestMonthlySales?.sales?.toLocaleString() || "Loading..."}
            </div>
          </div>
        </div>
      </div>

      {/* Growth and Comparison Cards */}
      <div className="w-full lg:w-1/2 flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
        <div className="py-4 px-4 rounded-xl border-gray-300 flex items-center justify-between bg-blue-50 shadow-md">
          <div className="w-16 h-16 bg-blue-200 rounded-full flex justify-center items-center">
            <TrendingUp className="w-8 h-8 text-blue-600" />
          </div>
          <div className="flex flex-col ml-4">
            <div className="text-sm text-gray-500">Avg. Monthly Sales</div>
            <h2 className="font-bold text-2xl">
              ₹{" "}
              {averageSales?.averageMonthlySales?.toLocaleString() ||
                "Loading..."}
            </h2>
          </div>
        </div>

        <div className="py-4 px-4 rounded-xl border-gray-600 flex items-center justify-between bg-blue-100 shadow-md">
          <div className="w-16 h-16 bg-blue-300 rounded-full flex justify-center items-center">
            <TrendingUp className="w-8 h-8 text-blue-800" />
          </div>
          <div className="flex flex-col ml-4">
            <div className="text-sm text-gray-500">Avg. Daily Sales</div>
            <h2 className="font-bold text-2xl">
              ₹{" "}
              {averageSales?.averageDailySales?.toLocaleString() ||
                "Loading..."}
            </h2>
          </div>
        </div>

        {/* Average Yearly Sales Card */}
        <div className="py-4 px-4 rounded-xl border-gray-300 flex items-center justify-between bg-blue-200 shadow-md">
          <div className="w-16 h-16 bg-blue-300 rounded-full flex justify-center items-center">
            <TrendingUp className="w-8 h-8 text-blue-800" />
          </div>
          <div className="flex flex-col ml-4">
            <div className="text-sm text-gray-500">Avg. Yearly Sales</div>
            <h2 className="font-bold text-2xl">
              ₹{" "}
              {averageSales?.averageYearlySales?.toLocaleString() ||
                "Loading..."}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WholeInfo;
