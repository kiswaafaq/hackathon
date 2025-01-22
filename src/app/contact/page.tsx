import Navbar from '@/navbar/page';
import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto p-8">
        <Navbar/>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="mb-4">
          We'd love to hear from you! Whether you have questions about our products,
          need assistance with an order, or just want to say hello, feel free to reach out.
        </p>

        <div className="mb-4">
          <h2 className="text-xl font-medium mb-2">Our Information</h2>
          <p>Email: comforty@gmail.com</p> {/* Replace with your actual email */}
          <p>Phone: 03330205238</p>
          <p>Address: 123 Main Street, Anytown</p> {/* Replace with your address */}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-medium mb-2">Business Hours</h2>
          <p>Monday - Friday: 9am - 5pm</p>
          <p>Saturday: 10am - 2pm</p>
          <p>Sunday: Closed</p>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactPage;