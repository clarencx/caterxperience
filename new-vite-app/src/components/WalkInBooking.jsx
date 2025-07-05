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
  beef: '',
  pork: '',
  chicken: '',
  vegetables: '',
  pastaFish: '',
  dessert: '',
  downpayment: '',
  totalPrice: '',
  freebies: '',
  stylist: '',
  cook: '',
  headWaiter1: '',
  headWaiter2: '',
  agree: false,
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 0 }}>
              <h2 className="booking-form-title" style={{ margin: 0 }}>Add New Event Booking</h2>
              <select className="booking-customer-dropdown" value={customerType} onChange={e => setCustomerType(e.target.value)} style={{ width: 220, minWidth: 220, maxWidth: 240, height: 40, fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif', fontSize: '1rem', borderRadius: 6, border: '1px solid #bbb', background: '#fff', color: '#222', padding: '0 1rem', boxSizing: 'border-box', appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none', verticalAlign: 'middle', display: 'inline-block' }}>
                <option>Add New Customer</option>
                <option>Existing Customer</option>
              </select>
            </div>
            <div className="booking-section" style={{ marginTop: 0 }}>
              <h3 className="booking-form-section-title" style={{ marginTop: 0 }}>Customer Details</h3>
              <hr className="booking-section-divider" style={{ marginTop: 0, marginBottom: '1.2rem' }} />
              <div className="booking-grid booking-grid-3">
                <div className="booking-field-group">
                  <label htmlFor="firstName" className="booking-field-label">First Name</label>
                  <input id="firstName" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} style={{ fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }} />
                </div>
                <div className="booking-field-group">
                  <label htmlFor="middleName" className="booking-field-label">Middle Name</label>
                  <input id="middleName" name="middleName" placeholder="Middle Name" value={form.middleName} onChange={handleChange} style={{ fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }} />
                </div>
                <div className="booking-field-group">
                  <label htmlFor="lastName" className="booking-field-label">Last Name</label>
                  <input id="lastName" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} style={{ fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }} />
                </div>
                <div className="booking-field-group" style={{ gridColumn: '1 / span 2' }}>
                  <label htmlFor="email" className="booking-field-label">Email Address</label>
                  <input id="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} style={{ fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }} />
                </div>
                <div className="booking-field-group" style={{ gridColumn: '3 / span 1' }}>
                  <label htmlFor="contact" className="booking-field-label">Contact Number</label>
                  <input id="contact" name="contact" placeholder="Phone" value={form.contact} onChange={handleChange} style={{ fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }} />
                </div>
              </div>
            </div>
            <hr className="booking-section-divider" />
            <div className="booking-section" style={{ marginTop: 0 }}>
              <h3 className="booking-form-section-title" style={{ marginTop: 0 }}>Event Details</h3>
              <hr className="booking-section-divider" style={{ marginTop: 0, marginBottom: '1.2rem' }} />
              <div className="booking-grid booking-grid-3">
                <div className="booking-field-group">
                  <label htmlFor="eventName" className="booking-field-label">Event Name</label>
                  <input id="eventName" name="eventName" placeholder="Name" value={form.eventName} onChange={handleChange} />
                </div>
                <div className="booking-field-group">
                  <label htmlFor="eventType" className="booking-field-label">Event Type</label>
                  <select id="eventType" name="eventType" value={form.eventType} onChange={handleChange}>
                    <option value="">Type</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate">Corporate</option>
                  </select>
                </div>
                <div className="booking-field-group">
                  <label htmlFor="eventDate" className="booking-field-label">Event Date</label>
                  <input id="eventDate" name="eventDate" type="date" placeholder="" value={form.eventDate} onChange={handleChange} />
                </div>
                <div className="booking-field-group">
                  <label htmlFor="eventLocation" className="booking-field-label">Event Location</label>
                  <select id="eventLocation" name="eventLocation" value={form.eventLocation} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Venue 1">Venue 1</option>
                    <option value="Venue 2">Venue 2</option>
                  </select>
                </div>
                <div className="booking-field-group">
                  <label htmlFor="eventStart" className="booking-field-label">Event Start</label>
                  <input id="eventStart" name="eventStart" type="time" placeholder="" value={form.eventStart} onChange={handleChange} />
                </div>
                <div className="booking-field-group">
                  <label htmlFor="eventEnd" className="booking-field-label">Event End</label>
                  <input id="eventEnd" name="eventEnd" type="time" placeholder="" value={form.eventEnd} onChange={handleChange} />
                </div>
                <div className="booking-field-group">
                  <label htmlFor="celebrantName" className="booking-field-label">Celebrant Name</label>
                  <input id="celebrantName" name="celebrantName" placeholder="" value={form.celebrantName} onChange={handleChange} />
                </div>
                <div className="booking-field-group">
                  <label htmlFor="ageYear" className="booking-field-label">Age/Year</label>
                  <input id="ageYear" name="ageYear" placeholder="" value={form.ageYear} onChange={handleChange} />
                </div>
                <div className="booking-field-group">
                  <label htmlFor="guardName" className="booking-field-label">Name of Guard/Bantay</label>
                  <input id="guardName" name="guardName" placeholder="" value={form.guardName} onChange={handleChange} />
                </div>
              </div>
            </div>
            <hr className="booking-section-divider" />
            <div className="booking-section" style={{ marginTop: 0 }}>
              <h3 className="booking-form-section-title" style={{ marginTop: 0 }}>Package Details</h3>
              <hr className="booking-section-divider" style={{ marginTop: 0, marginBottom: '1.2rem' }} />
              <div className="booking-grid booking-grid-2">
                <div className="booking-field-group">
                  <label htmlFor="package" className="booking-field-label">Package</label>
                  <select id="package" name="package" value={form.package} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Basic">Basic</option>
                    <option value="Premium">Premium</option>
                  </select>
                </div>
                <div className="booking-field-group">
                  <label htmlFor="motif" className="booking-field-label">Motif/Theme</label>
                  <select id="motif" name="motif" value={form.motif} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Classic">Classic</option>
                    <option value="Modern">Modern</option>
                  </select>
                </div>
                <div className="booking-field-group" style={{ gridColumn: '1 / span 2' }}>
                  <label htmlFor="addons" className="booking-field-label">Addons</label>
                  <select id="addons" name="addons" value={form.addons} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Photo Booth">Photo Booth</option>
                    <option value="Sound System">Sound System</option>
                  </select>
                </div>
              </div>
            </div>
            <hr className="booking-section-divider" />
            <div className="booking-section" style={{ marginTop: 0 }}>
              <h3 className="booking-form-section-title" style={{ marginTop: 0 }}>Menu Details</h3>
              <hr className="booking-section-divider" style={{ marginTop: 0, marginBottom: '1.2rem' }} />
              <div className="booking-grid booking-grid-2">
                <div className="booking-field-group">
                  <label htmlFor="beef" className="booking-field-label">Beef</label>
                  <select id="beef" name="beef" value={form.beef} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Roast Beef">Roast Beef</option>
                    <option value="Beef Caldereta">Beef Caldereta</option>
                  </select>
                </div>
                <div className="booking-field-group">
                  <label htmlFor="pork" className="booking-field-label">Pork</label>
                  <select id="pork" name="pork" value={form.pork} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Lechon">Lechon</option>
                    <option value="Pork BBQ">Pork BBQ</option>
                  </select>
                </div>
                <div className="booking-field-group">
                  <label htmlFor="chicken" className="booking-field-label">Chicken</label>
                  <select id="chicken" name="chicken" value={form.chicken} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Fried Chicken">Fried Chicken</option>
                    <option value="Chicken Curry">Chicken Curry</option>
                  </select>
                </div>
                <div className="booking-field-group">
                  <label htmlFor="vegetables" className="booking-field-label">Vegetables</label>
                  <select id="vegetables" name="vegetables" value={form.vegetables} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Chopsuey">Chopsuey</option>
                    <option value="Pinakbet">Pinakbet</option>
                  </select>
                </div>
                <div className="booking-field-group">
                  <label htmlFor="pastaFish" className="booking-field-label">Pasta/Fish</label>
                  <select id="pastaFish" name="pastaFish" value={form.pastaFish} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Spaghetti">Spaghetti</option>
                    <option value="Fish Fillet">Fish Fillet</option>
                  </select>
                </div>
                <div className="booking-field-group">
                  <label htmlFor="dessert" className="booking-field-label">Dessert</label>
                  <select id="dessert" name="dessert" value={form.dessert} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Leche Flan">Leche Flan</option>
                    <option value="Fruit Salad">Fruit Salad</option>
                  </select>
                </div>
              </div>
            </div>
            <hr className="booking-section-divider" />
            <div className="booking-section" style={{ marginTop: 0 }}>
              <h3 className="booking-form-section-title" style={{ marginTop: 0 }}>Payment Details</h3>
              <hr className="booking-section-divider" style={{ marginTop: 0, marginBottom: '1.2rem' }} />
              <div className="booking-grid booking-grid-2">
                <div className="booking-field-group">
                  <label htmlFor="downpayment" className="booking-field-label">Downpayment Amount</label>
                  <input id="downpayment" name="downpayment" placeholder="" value={form.downpayment} onChange={handleChange} />
                </div>
                <div className="booking-field-group">
                  <label htmlFor="totalPrice" className="booking-field-label">Total Price</label>
                  <input id="totalPrice" name="totalPrice" placeholder="" value={form.totalPrice} onChange={handleChange} />
                </div>
                <div className="booking-field-group" style={{ gridColumn: '1 / span 2' }}>
                  <label htmlFor="freebies" className="booking-field-label">Freebies</label>
                  <input id="freebies" name="freebies" placeholder="" value={form.freebies} onChange={handleChange} />
                </div>
              </div>
            </div>
            <hr className="booking-section-divider" />
            <div className="booking-section" style={{ marginTop: 0 }}>
              <h3 className="booking-form-section-title" style={{ marginTop: 0 }}>Staff Assignment</h3>
              <hr className="booking-section-divider" style={{ marginTop: 0, marginBottom: '1.2rem' }} />
              <div className="booking-grid booking-grid-2">
                <div className="booking-field-group">
                  <label htmlFor="stylist" className="booking-field-label">Stylist</label>
                  <select id="stylist" name="stylist" value={form.stylist} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Stylist 1">Stylist 1</option>
                    <option value="Stylist 2">Stylist 2</option>
                  </select>
                </div>
                <div className="booking-field-group">
                  <label htmlFor="headWaiter1" className="booking-field-label">Head Waiter 1</label>
                  <select id="headWaiter1" name="headWaiter1" value={form.headWaiter1} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Waiter 1">Waiter 1</option>
                    <option value="Waiter 2">Waiter 2</option>
                  </select>
                </div>
                <div className="booking-field-group">
                  <label htmlFor="cook" className="booking-field-label">Cook</label>
                  <select id="cook" name="cook" value={form.cook} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Cook 1">Cook 1</option>
                    <option value="Cook 2">Cook 2</option>
                  </select>
                </div>
                <div className="booking-field-group">
                  <label htmlFor="headWaiter2" className="booking-field-label">Head Waiter 2</label>
                  <select id="headWaiter2" name="headWaiter2" value={form.headWaiter2} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Waiter 3">Waiter 3</option>
                    <option value="Waiter 4">Waiter 4</option>
                  </select>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', maxWidth: '500px', margin: '0 0 2rem 0' }}>
              <input type="checkbox" name="agree" checked={form.agree} onChange={e => setForm(f => ({ ...f, agree: e.target.checked }))} style={{ marginRight: '0.5rem' }} />
              <span style={{ fontWeight: 400, fontSize: '1rem', whiteSpace: 'nowrap' }}>
                As a client, I have read and agree to the Terms and Conditions within the contract.
              </span>
            </div>
            <div className="booking-form-row button-row">
              <button className="submit-btn" type="submit">Schedule Booking</button>
              <button className="cancel-btn" type="button">Cancel</button>
            </div>
          </div>
        </div>
        <AddUserModal show={showAddUser} onClose={() => setShowAddUser(false)} onSave={handleAddUser} />
      </div>
    </div>
  );
};

export default WalkInBooking; 