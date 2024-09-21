import React from 'react';

const ContactInfo: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800 tracking-wide">
          Contact Us
        </h2>
        <p className="text-base text-center mb-6 text-gray-700">
          We're here to assist you with any security needs or inquiries.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Info Section */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold text-gray-700 mb-1">Phone</h3>
              <p className="text-gray-600 text-sm">
                <a href="tel:+27218560214" className="hover:text-red-500">
                  (+27) 21 856 0214
                </a>
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold text-gray-700 mb-1">Email</h3>
              <p className="text-gray-600 text-sm">
                <a href="mailto:info@gordonsbaysecurity.co.za" className="hover:text-red-500">
                  info@gordonsbaysecurity.co.za
                </a>
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold text-gray-700 mb-1">Address</h3>
              <p className="text-gray-600 text-sm">
                <a
                  href="https://www.google.com/maps?q=2+Link+Rd,+Mansfield,+Cape+Town,+7140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500"
                >
                  2 Link Rd, Mansfield, Cape Town, 7140
                </a>
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <form className="space-y-4" action="process-form.php" method="post">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded text-sm font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="py-10"></div> {/* Extra padding at the bottom */}
      </div>
    </section>
  );
};

export default ContactInfo;
