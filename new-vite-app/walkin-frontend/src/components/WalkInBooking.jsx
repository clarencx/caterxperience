import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WalkInBooking.css';
import Sidebar from './Sidebar';
import logo from '../assets/logo.png';
import { FaBell } from 'react-icons/fa';
import BookingCalendar from './BookingCalendar';
import AddUserModal from './AddUserModal';

const initialForm = {
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  contact: '',
  eventName: '',
  eventType: '',
  eventDate: '',
  eventLocation: '',
  eventStart: '',
  eventEnd: '',
  celebrantName: '',
  ageYear: '',
  guardName: '',
  package: '',
  motif: '',
  addons: '',
};

const mockEvents = [
  { event_date: '2024-07-01', event_name: 'Birthday Party' },
  { event_date: '2024-07-02', event_name: 'Wedding' },
  { event_date: '2024-07-01', event_name: 'Corporate Event' },
];

const WalkInBooking = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const [bookingData, setBookingData] = React.useState([]);
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  useEffect(() => {
    // TODO: Update API endpoint as needed
    fetch('http://localhost:8000/api/bookings')
      .then(res => res.json())
      .then(data => {
        setBookingData(data.bookings);
      })
      .catch(err => console.error('Failed to fetch bookings:', err));
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = bookingData.filter(event =>
      event.event_name.toLowerCase().includes(term) ||
      event.customer_name.toLowerCase().includes(term) ||
      event.event_date.includes(term)
    );

    setSearchResults(results);
  };

  const selectedBookings = selectedDate
    ? bookingData.filter(e => e.event_date === selectedDate)
    : [];

  const [form, setForm] = useState(initialForm);
  const [customerType, setCustomerType] = useState('Add New Customer');
  const [showAddUser, setShowAddUser] = useState(false);
  const [allEvents, setAllEvents] = useState(mockEvents);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = (user) => {
    // You can add logic to update user list, etc.
    // For now, just close the modal
    setShowAddUser(false);
  };

  return (
    <div className="booking-app-layout">
      <Sidebar />
      <div className="booking-main-content">
        {/* Yellow Header Bar */}
        <header className="booking-header">
          <img src={logo} alt="Ollinati Catering Logo" className="booking-header-logo" />
          <div className="booking-header-user">
            <span className="booking-header-username">Jen Tarriela</span>
            <FaBell className="booking-header-bell" />
          </div>
        </header>
        <div style={{ display: 'flex', gap: '2rem', width: '100%', justifyContent: 'center' }}>
          {/* Calendar Section */}
          <div style={{ minWidth: 350, maxWidth: 400 }}>
            <BookingCalendar allEvents={allEvents} onDateClick={() => {}} />
          </div>
          {/* Form Card Section */}
          <div className="booking-form-card">
            <h2 className="booking-form-title">Add New Event Booking</h2>
            <div className="booking-form-row booking-form-row-top">
              <h3 className="booking-form-section-title">Customer Details</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <select
                  className="booking-customer-dropdown"
                  value={customerType}
                  onChange={e => setCustomerType(e.target.value)}
                >
                  <option>Add New Customer</option>
                  <option>Existing Customer</option>
                </select>
                <button type="button" className="submit-btn" onClick={() => setShowAddUser(true)}>
                  + Add User
                </button>
              </div>
            </div>
            <hr className="booking-section-divider" />
            <div className="booking-form-row">
              <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
              <input name="middleName" placeholder="Middle Name" value={form.middleName} onChange={handleChange} />
              <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
            </div>
            <div className="booking-form-row">
              <input name="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
              <input name="contact" placeholder="Contact Number" value={form.contact} onChange={handleChange} />
            </div>
            <h3 className="booking-form-section-title">Event Details</h3>
            <hr className="booking-section-divider" />
            <div className="booking-form-row">
              <input name="eventName" placeholder="Event Name" value={form.eventName} onChange={handleChange} />
              <input name="eventType" placeholder="Event Type" value={form.eventType} onChange={handleChange} />
              <input name="eventDate" type="date" placeholder="Event Date" value={form.eventDate} onChange={handleChange} />
            </div>
            <div className="booking-form-row">
              <select name="eventLocation" value={form.eventLocation} onChange={handleChange}>
                <option value="">Event Location</option>
                <option value="Venue 1">Venue 1</option>
                <option value="Venue 2">Venue 2</option>
              </select>
              <input name="eventStart" type="time" placeholder="Event Start" value={form.eventStart} onChange={handleChange} />
              <input name="eventEnd" type="time" placeholder="Event End" value={form.eventEnd} onChange={handleChange} />
            </div>
            <div className="booking-form-row">
              <input name="celebrantName" placeholder="Celebrant Name" value={form.celebrantName} onChange={handleChange} />
              <input name="ageYear" placeholder="Age/Year" value={form.ageYear} onChange={handleChange} />
              <input name="guardName" placeholder="Name of Guard/Bantay" value={form.guardName} onChange={handleChange} />
            </div>
            <h3 className="booking-form-section-title">Package Details</h3>
            <hr className="booking-section-divider" />
            <div className="booking-form-row">
              <input name="package" placeholder="Package" value={form.package} onChange={handleChange} />
              <input name="motif" placeholder="Motif/Theme" value={form.motif} onChange={handleChange} />
            </div>
            <div className="booking-form-row">
              <input name="addons" placeholder="Addons" value={form.addons} onChange={handleChange} />
            </div>
          </div>
        </div>
        <AddUserModal show={showAddUser} onClose={() => setShowAddUser(false)} onSave={handleAddUser} />
      </div>
    </div>
  );
};

export default WalkInBooking; 