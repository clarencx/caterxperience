import React from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { FaBell, FaPrint, FaFilter } from "react-icons/fa";
import searchIcon from "./assets/Search.png";
import logo from "./assets/logo.png";

const initialPaymentData = [
  {
    paymentNo: "R-18347",
    clientName: "Ayn Alwyn",
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
  const [showInvoiceModal, setShowInvoiceModal] = React.useState(false);
  const [selectedPayment, setSelectedPayment] = React.useState(null);

  const handlePrintClick = (payment) => {
    setSelectedPayment(payment);
    setShowInvoiceModal(true);
  };

  const closeModal = () => {
    setShowInvoiceModal(false);
    setSelectedPayment(null);
  };

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
                      <button className="print-btn" onClick={() => handlePrintClick(payment)}>
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
      
      {/* Invoice Modal */}
      {showInvoiceModal && selectedPayment && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="invoice-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>×</button>
            
            <div className="invoice-header">
              <img src={logo} alt="Ollinati Catering" className="company-logo" />
              <div className="company-contact">
                <div>📞 0919-3745-162 / 0933-3960-877</div>
                <div>📍 Ron Pavillion Bunsuran 1st Pandi, Bulacan</div>
              </div>
            </div>
            
            <div className="invoice-details">
              <div className="invoice-row">
                <span>Invoice No.: {selectedPayment.paymentNo.replace('R-', '')}</span>
                <span className="invoice-divider">|</span>
                <span>Date: 05/01/2025</span>
              </div>
              <div className="customer-row">
                Customer: {selectedPayment.clientName}
              </div>
            </div>
            
            <div className="invoice-table">
              <div className="invoice-table-header">
                <span>Description</span>
                <span>Price</span>
              </div>
              <div className="invoice-table-row">
                <span>Reservation Fee</span>
                <span>{selectedPayment.amountPaid}</span>
              </div>
            </div>
            
            <div className="invoice-total">
              <div className="total-row">
                <span className="total-label">Total</span>
                <span className="total-amount">{selectedPayment.amountPaid}</span>
              </div>
              <div className="payment-details">
                <div className="payment-row">
                  <span>Cash</span>
                  <span>{selectedPayment.amountPaid}</span>
                </div>
                <div className="payment-row">
                  <span>Change</span>
                  <span>0.00</span>
                </div>
              </div>
            </div>
            
            <div className="thank-you">
              ***** THANK YOU *****
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
