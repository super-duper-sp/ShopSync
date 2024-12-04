import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDailyTransaction, updateDailyTransaction, fetchDailyTransactions } from "../../features/DailyTransaction/DailyTransactionAction";
import { Trash2, Pencil } from "lucide-react";

const TransactionsTable = () => {
  const [editIndex, setEditIndex] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedTransaction, setEditedTransaction] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const TABLE_HEAD = [
    "Date",
    "Buy Amount",
    "Sell Amount",
    "Buy Notes",
    "Sell Notes",
    "Shop",
    "User",
    "Actions",
  ];
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  const { transactions, totalPages, loading } = useSelector(state => state.dailyTransactions);

  useEffect(() => {
    dispatch(fetchDailyTransactions({
      page: currentPage,
      year: selectedYear,
      month: selectedMonth,
    }));
  }, [dispatch, currentPage, selectedYear, selectedMonth]);

  const handleEdit = (index) => {
    setEditIndex(index);
    setShowEditModal(true);
    setEditedTransaction(transactions[index]);
  };

  const handleDelete = async (index) => {
    const transactionIdToDelete = transactions[index]._id;
    try {
      await dispatch(deleteDailyTransaction(transactionIdToDelete));
      window.alert("Transaction deleted successfully");
    } catch (error) {
      window.alert("Error deleting transaction");
      console.error("Error deleting daily transaction:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTransaction(prevTransaction => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const handleSaveEdit = async () => {
    try {
      await dispatch(updateDailyTransaction({ id: editedTransaction._id, transactionData: editedTransaction }));
      setEditIndex(null);
      setShowEditModal(false);
      alert("Saved");
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };

  const handleCloseModal = () => {
    setEditIndex(null);
    setShowEditModal(false);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const years = [undefined, ...Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i)];
  const months = [
    { value: undefined, label: 'None' },
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' }
  ];

  const handleYearChange = (e) => {
    setSelectedYear(Number(e.target.value));
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(Number(e.target.value));
  };

  return (
    <div className="container mx-auto p-4">
      {/* Filters */}
      <div className="mb-4 flex space-x-4">
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
          <select
            id="year"
            value={selectedYear}
            onChange={handleYearChange}
            className="mt-1 p-2 border rounded-md"
          >
            {years.map(year => (
              <option key={year} value={year}>{year || 'None'}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="month" className="block text-sm font-medium text-gray-700">Month</label>
          <select
            id="month"
            value={selectedMonth}
            onChange={handleMonthChange}
            className="mt-1 p-2 border rounded-md"
          >
            {months.map(month => (
              <option key={month.value} value={month.value}>{month.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="relative max-h-[calc(100vh-200px)] overflow-y-auto">
        <table className="min-w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="sticky top-0 bg-blue-100 border-b">
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th key={index} className="px-4 py-2 text-left text-gray-700 font-semibold">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={TABLE_HEAD.length} className="text-center p-4">Loading...</td>
              </tr>
            ) : (
              transactions.map((transaction, index) => {
                const isLast = index === transactions.length - 1;
                const classes = `p-4 ${isLast ? "" : "border-b border-gray-200"}`;

                return (
                  <tr key={transaction._id} className="hover:bg-gray-50">
                    <td className={classes}>{transaction.normalizedDate}</td>
                    <td className={classes}>{transaction.buyAmount}</td>
                    <td className={classes}>{transaction.sellAmount}</td>
                    <td className={classes}>{transaction.buyNotes}</td>
                    <td className={classes}>{transaction.sellNotes}</td>
                    <td className={classes}>{transaction.shop}</td>
                    <td className={classes}>{transaction.user}</td>
                    <td className={classes}>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(index)}
                          className="text-blue-600 hover:text-blue-800"
                          aria-label={`Edit transaction ${transaction._id}`}
                        >
                          <Pencil className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="text-red-600 hover:text-red-800"
                          aria-label={`Delete transaction ${transaction._id}`}
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-l-lg shadow-md hover:bg-blue-600 disabled:bg-blue-300"
          aria-label="First page"
        >
          &laquo; First
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white font-bold py-2 px-4 shadow-md hover:bg-blue-600 disabled:bg-blue-300"
          aria-label="Previous page"
        >
          &lt; Previous
        </button>
        <span className="text-gray-700 font-medium">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white font-bold py-2 px-4 shadow-md hover:bg-blue-600 disabled:bg-blue-300"
          aria-label="Next page"
        >
          Next &gt;
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-r-lg shadow-md hover:bg-blue-600 disabled:bg-blue-300"
          aria-label="Last page"
        >
          Last &raquo;
        </button>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-lg font-semibold mb-4">Edit Transaction</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={editedTransaction.date || ""}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full"
                  aria-required="true"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="buyAmount" className="block text-sm font-medium text-gray-700">Buy Amount</label>
                <input
                  type="number"
                  id="buyAmount"
                  name="buyAmount"
                  value={editedTransaction.buyAmount || ""}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full"
                  aria-required="true"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="buyNotes" className="block text-sm font-medium text-gray-700">Buy Notes</label>
                <input
                  type="text"
                  id="buyNotes"
                  name="buyNotes"
                  value={editedTransaction.buyNotes || ""}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="sellAmount" className="block text-sm font-medium text-gray-700">Sell Amount</label>
                <input
                  type="number"
                  id="sellAmount"
                  name="sellAmount"
                  value={editedTransaction.sellAmount || ""}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="sellNotes" className="block text-sm font-medium text-gray-700">Sell Notes</label>
                <input
                  type="text"
                  id="sellNotes"
                  name="sellNotes"
                  value={editedTransaction.sellNotes || ""}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={handleSaveEdit}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg shadow-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionsTable;
