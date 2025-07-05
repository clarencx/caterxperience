import React, { useState } from 'react';
import './WalkInBooking.css';

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

const WalkInBooking = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) {
      alert('You must agree to the Terms and Conditions.');
      return;
    }
    alert('Booking scheduled! (No backend, just a demo)');
    setForm(initialForm);
  };

  return (
    <form className="walkin-booking-form" onSubmit={handleSubmit}>
      <h2>Add New Event Booking</h2>
      <section>
        <h3>Customer Details</h3>
        <div className="form-row">
          <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
          <input name="middleName" placeholder="Middle Name" value={form.middleName} onChange={handleChange} />
          <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
        </div>
        <div className="form-row">
          <input name="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
          <input name="contact" placeholder="Contact Number" value={form.contact} onChange={handleChange} />
        </div>
      </section>
      <section>
        <h3>Event Details</h3>
        <div className="form-row">
          <input name="eventName" placeholder="Event Name" value={form.eventName} onChange={handleChange} />
          <input name="eventType" placeholder="Event Type" value={form.eventType} onChange={handleChange} />
          <input name="eventDate" type="date" placeholder="Event Date" value={form.eventDate} onChange={handleChange} />
        </div>
        <div className="form-row">
          <input name="eventLocation" placeholder="Event Location" value={form.eventLocation} onChange={handleChange} />
          <input name="eventStart" type="time" placeholder="Event Start" value={form.eventStart} onChange={handleChange} />
          <input name="eventEnd" type="time" placeholder="Event End" value={form.eventEnd} onChange={handleChange} />
        </div>
        <div className="form-row">
          <input name="celebrantName" placeholder="Celebrant Name" value={form.celebrantName} onChange={handleChange} />
          <input name="ageYear" placeholder="Age/Year" value={form.ageYear} onChange={handleChange} />
          <input name="guardName" placeholder="Name of Guard/Bantay" value={form.guardName} onChange={handleChange} />
        </div>
      </section>
      <section>
        <h3>Package Details</h3>
        <div className="form-row">
          <input name="package" placeholder="Package" value={form.package} onChange={handleChange} />
          <input name="motif" placeholder="Motif/Theme" value={form.motif} onChange={handleChange} />
        </div>
        <div className="form-row">
          <input name="addons" placeholder="Addons" value={form.addons} onChange={handleChange} />
        </div>
      </section>
      <section>
        <h3>Menu Details</h3>
        <div className="form-row">
          <input name="beef" placeholder="Beef" value={form.beef} onChange={handleChange} />
          <input name="pork" placeholder="Pork" value={form.pork} onChange={handleChange} />
        </div>
        <div className="form-row">
          <input name="chicken" placeholder="Chicken" value={form.chicken} onChange={handleChange} />
          <input name="vegetables" placeholder="Vegetables" value={form.vegetables} onChange={handleChange} />
        </div>
        <div className="form-row">
          <input name="pastaFish" placeholder="Pasta/Fish" value={form.pastaFish} onChange={handleChange} />
          <input name="dessert" placeholder="Dessert" value={form.dessert} onChange={handleChange} />
        </div>
      </section>
      <section>
        <h3>Payment Details</h3>
        <div className="form-row">
          <input name="downpayment" placeholder="Downpayment Amount" value={form.downpayment} onChange={handleChange} />
          <input name="totalPrice" placeholder="Total Price" value={form.totalPrice} onChange={handleChange} />
        </div>
        <div className="form-row">
          <input name="freebies" placeholder="Freebies" value={form.freebies} onChange={handleChange} />
        </div>
      </section>
      <section>
        <h3>Staff Assignment</h3>
        <div className="form-row">
          <input name="stylist" placeholder="Stylist" value={form.stylist} onChange={handleChange} />
          <input name="headWaiter1" placeholder="Head Waiter 1" value={form.headWaiter1} onChange={handleChange} />
        </div>
        <div className="form-row">
          <input name="cook" placeholder="Cook" value={form.cook} onChange={handleChange} />
          <input name="headWaiter2" placeholder="Head Waiter 2" value={form.headWaiter2} onChange={handleChange} />
        </div>
      </section>
      <div className="form-row checkbox-row">
        <label>
          <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
          <span> As a client, I have read and agree to the Terms and Conditions within the contract.</span>
        </label>
      </div>
      <div className="form-row button-row">
        <button type="submit" className="submit-btn">Schedule Booking</button>
        <button type="button" className="cancel-btn" onClick={() => setForm(initialForm)}>Cancel</button>
      </div>
    </form>
  );
};

export default WalkInBooking; 