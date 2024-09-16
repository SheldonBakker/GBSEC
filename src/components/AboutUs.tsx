import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-red-600">
          About Us
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-center">
          Gordon's Bay Security opened its doors under the leadership of Owner and CEO Okkie van der Merwe on the 1st August 2001. We have since become a force to be reckoned with.
        </p>
        <p className="text-lg leading-relaxed mb-6 text-center">
          We can now offer you several services with the competency to deliver these services with a high level of qualification and expertise.
        </p>
        <p className="text-lg leading-relaxed mb-6 text-center">
          Our team of Armed Response Officers are a formidable force. Once our fully equipped control room receives an alarm from your premises, they will dispatch a Response Officer to thoroughly inspect and secure your premises. All of our Officers have been highly trained and equipped with the knowledge of how to, and what to do in case of an emergency or break-in.
        </p>
        <p className="text-lg leading-relaxed mb-6 text-center">
          Our technical teams are of the best-qualified and friendliest technicians in the Security Industry. All of our staff members are registered with PSIRA, the governing body of the security industry. They install new alarm systems and are capable of sorting out any enquiries and problems on most alarm systems.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/images/manual.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-red-600 hover:bg-yellow-600 text-white font-bold py-2 px-5 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              PAIA Manual
            </button>
          </a>
          <a href="/images/form2.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-5 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              Form 02 Access
            </button>
          </a>
          <a href="/images/form2.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-yellow-600 hover:bg-red-600 text-white font-bold py-2 px-5 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              Form 03 Outcome
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
