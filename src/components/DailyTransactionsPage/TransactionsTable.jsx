import { PencilIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Trash2, Pencil } from "lucide-react";

const TABLE_HEAD = [
  "Date",
  "BuyAmount",
  "SellAmount",
  "BuyNotes",
  "SellNotes",
  "User",
  "Edit",
  "Delete",
];

const TransactionsTable = ({ TABLE_ROWS }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedTransaction, setEditedTransaction] = useState({});

  const handleEdit = (index) => {
    setEditIndex(index);
    setShowEditModal(true);
    // Initialize the editedTransaction state with the data of the selected transaction
    setEditedTransaction(TABLE_ROWS[index]);
  };

  const handleDelete = async (index) => {
    const transactionIdToDelete = TABLE_ROWS[index]._id;

    try {
      // Dispatch the deleteDailyEntries action with the transaction ID
      // await dispatch(deleteDailyEntries(transactionIdToDelete));

      // Show success alert
      window.alert("Transaction deleted successfully");
    } catch (error) {
      // Show error alert
      window.alert("Error deleting transaction");
      console.error("Error deleting daily transaction:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const handleSaveEdit = async () => {
    try {
      // Update the original transactions array with the edited transaction
      const updatedTransactions = [...TABLE_ROWS];
      updatedTransactions[editIndex] = editedTransaction;

      // Dispatch the putDailyEntries action, assuming it's a Redux action
      // console.log(editedTransaction);
      // await dispatch(putDailyEntries(editedTransaction._id, editedTransaction));

      // Update state and close the modal
      setEditIndex(null);
      setShowEditModal(false);

      // Show an alert saying "Saved" after the asynchronous operation is completed
      alert("Saved");
    } catch (error) {
      // Handle any errors that may occur during the asynchronous operation
      console.error("Error saving edit:", error);
      // You might want to show an error message or take other appropriate actions
    }
  };

  const handleCloseModal = () => {
    setEditIndex(null);
    setShowEditModal(false);
  };

  return (
    <div>
      <div>
        <table className="w-full">
          <thead className="">
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
                  className="px-4 py-4 border-t-2 border-b-2  border-gray-200 bg-[#c9eff9] p-4 "
                >
                  <span className="text-[15px]  text-blue-gray font-bold leading-none opacity-70">
                    {head}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {TABLE_ROWS.map(
              (
                { date, buyAmount, sellAmount, buyNotes, sellNotes, user },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={date} className="hover:bg-[#dfdfdf]">
                    <td className={classes}>
                      <span className="text-sm text-blue-gray font-normal">
                        {date}
                      </span>
                    </td>
                    <td className={classes}>
                      <span className="text-sm text-blue-gray font-normal">
                        {buyAmount}
                      </span>
                    </td>

                    <td className={classes}>
                      <span className="text-sm text-blue-gray font-normal">
                        {sellAmount}
                      </span>
                    </td>

                    <td className={classes}>
                      <span className="text-sm text-blue-gray font-normal">
                        {sellNotes}
                      </span>
                    </td>

                    <td className={classes}>
                      <span className="text-sm text-blue-gray font-normal">
                        {buyNotes}
                      </span>
                    </td>

                    <td className={classes}>
                      <span className="text-sm text-blue-gray font-normal">
                        {user}
                      </span>
                    </td>

                    <td className={classes}>
                      <span className="tooltip">
                        <button
                          onClick={() => handleEdit(index)}
                          className="px-1 py-1"
                          variant="text"
                        >
                          <div className="w-8 h-8 bg-[#0ab63eeb] rounded-full flex justify-center items-center">
                            <Pencil className="w-5 h-5 text-white" />
                          </div>
                        </button>
                        <span className="tooltip-text"></span>
                      </span>
                    </td>
                    <td>
                      <span className="tooltip">
                        <button
                          onClick={() => handleDelete(index)}
                          className="px-1 py-1"
                          variant="text"
                        >
                          <div className="w-8 h-8 bg-[#af0e19de] rounded-full flex justify-center items-center">
                            <Trash2 className="w-5 h-5 text-white " />
                          </div>
                        </button>
                        <span className="tooltip-text"></span>
                      </span>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>

        <div>
          {showEditModal && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
              <div className="bg-white p-8 rounded-md">
                <h2 className="text-lg font-semibold mb-4">Edit Transaction</h2>
                <form>
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
                      value={editedTransaction.date}
                      onChange={handleInputChange}
                      className="mt-1 p-2 border rounded-md w-full"
                    />
                  </div>

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
                      value={editedTransaction.buyAmount}
                      onChange={handleInputChange}
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
                      value={editedTransaction.buyNotes}
                      onChange={handleInputChange}
                      className="mt-1 p-2 border rounded-md w-full"
                      placeholder="Enter buy notes"
                    />
                  </div>

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
                      value={editedTransaction.sellAmount}
                      onChange={handleInputChange}
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
                      value={editedTransaction.sellNotes}
                      onChange={handleInputChange}
                      className="mt-1 p-2 border rounded-md w-full"
                      placeholder="Enter sell notes"
                    />
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={handleSaveEdit}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionsTable;
