import React from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { FaBell, FaPrint, FaFilter } from "react-icons/fa";
import searchIcon from "./assets/Search.png";

const initialPaymentData = [
  {
    paymentNo: "R-18347",
    clientName: "Scott Dawson",
    eventName: "Scott's 30th Birth...",
    amountPaid: "20,000.00",
    paymentStatus: "Pending"
  },
  {
    paymentNo: "R-18359",
    clientName: "Adam Page",
    eventName: "Adam and Kate 5...",
    amountPaid: "6,000.00",
    paymentStatus: "Paid"
  },
  {
    paymentNo: "R-18347",
    clientName: "Kris Statlander",
    eventName: "Kris' Birthday Ba...",
    amountPaid: "600.00",
    paymentStatus: "Paid"
  },
  {
    paymentNo: "R-18359",
    clientName: "Adam Page",
    eventName: "Adam and Kate 5...",
    amountPaid: "7,000.00",
    paymentStatus: "Paid"
  }
];

function App() {
  const [paymentData, setPaymentData] = React.useState(initialPaymentData);

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Lora, Georgia, Times, serif", background: "#f4f4f4", width: "100%", overflowX: "hidden" }}>
      <Sidebar />
      <main className="main-content">
        <div className="payment-box">
          <div className="header-bar">
            <div></div>
            <div className="header-user">
              <span className="header-username">Jen Tarriela</span>
              <FaBell size={18} color="#222" />
            </div>
          </div>
          
          <div className="payment-title-section">
            <h2 className="payment-title">Payment Records</h2>
          </div>
          
          <div className="payment-controls-section">
            <div className="payment-search-wrapper">
              <input
                type="text"
                placeholder="Search"
                className="payment-search-input"
              />
              <img src={searchIcon} alt="search" className="payment-search-icon" />
            </div>
            <div className="payment-right-controls">
              <button className="filter-btn">
                <FaFilter />
              </button>
              <button className="generate-report-btn">Generate Report</button>
            </div>
          </div>
          
          <div className="payment-table-container">
            <table className="payment-table">
              <thead>
                <tr>
                  <th>Payment No.</th>
                  <th>Client Name</th>
                  <th>Event Name</th>
                  <th>Amount Paid</th>
                  <th>Payment Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {paymentData.map((payment, index) => (
                  <tr key={index}>
                    <td>{payment.paymentNo}</td>
                    <td>{payment.clientName}</td>
                    <td>{payment.eventName}</td>
                    <td>{payment.amountPaid}</td>
                    <td>
                      <span className={`status-badge ${payment.paymentStatus.toLowerCase()}`}>
                        {payment.paymentStatus}
                      </span>
                    </td>
                    <td>
                      <button className="print-btn">
                        <FaPrint />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
