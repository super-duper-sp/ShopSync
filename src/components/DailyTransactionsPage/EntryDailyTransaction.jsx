import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDailyTransaction } from "../../features/DailyTransaction/DailyTransactionAction";

const EntryDailyTransaction = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.userData?.token);

  const [formData, setFormData] = useState({
    date: "",
    buyAmount: "",
    buyNotes: "",
    sellAmount: "",
    sellNotes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the action with formData
    dispatch(addDailyTransaction(formData))
      
  };

  return (
    <div className="px-4 py-4 rounded-xl border-2 border-gray-200">
     
      <form className="flex space-x-4" onSubmit={handleSubmit}>
        {/* Date */}
        <div className="mb-4">
          <label
            htmlFor="date"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div>
          {/* Buy Amount */}
          <div className="mb-4">
            <label
              htmlFor="buyAmount"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Buy Amount
            </label>
            <input
              type="number"
              id="buyAmount"
              name="buyAmount"
              value={formData.buyAmount}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Enter buy amount"
            />
          </div>

          {/* Buy Notes */}
          <div className="mb-4">
            <label
              htmlFor="buyNotes"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Buy Notes
            </label>
            <input
              type="text"
              id="buyNotes"
              name="buyNotes"
              value={formData.buyNotes}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Enter buy notes"
            />
          </div>
        </div>

        <div>
          {/* Sell Amount */}
          <div className="mb-4">
            <label
              htmlFor="sellAmount"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Sell Amount
            </label>
            <input
              type="number"
              id="sellAmount"
              name="sellAmount"
              value={formData.sellAmount}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Enter sell amount"
            />
          </div>

          {/* Sell Notes */}
          <div className="mb-4">
            <label
              htmlFor="sellNotes"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Sell Notes
            </label>
            <input
              type="text"
              id="sellNotes"
              name="sellNotes"
              value={formData.sellNotes}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Enter sell notes"
            />
          </div>
        </div>

        <div className="flex justify-end">
        <div className="flex justify-end">
    <button
      type="submit"
      className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 active:bg-blue-700"
    >
      Submit
    </button>
  </div>
        </div>
      </form>
    </div>
  );
};

export default EntryDailyTransaction;