import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const Psira: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ submitting: false, success: false, error: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: '' });

        try {
            const response = await fetch('contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(formData as any)
            });

            const result = await response.text();
            if (result === 'success') {
                setStatus({ submitting: false, success: true, error: '' });
                setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form on success
            } else {
                setStatus({ submitting: false, success: false, error: result });
            }
        } catch (error) {
            setStatus({ submitting: false, success: false, error: 'Something went wrong. Please try again.' });
        }
    };

    return (
        <div className="pt-24 md:pt-32 pb-24 px-6 md:px-16 space-y-12">
            {/* Header Section */}
            <motion.section 
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-6">PSIRA Security Grades</h1>
                <p className="text-lg md:text-xl text-gray-700">Our training Registration number is T1908</p>
            </motion.section>

            {/* Home Page Section */}
            <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-red-700 border-b-2 border-red-700 pb-2">PSIRA Grades</h2>
                <p className="mt-4 text-lg text-gray-700">
                    Gordon's Bay Security has recently been fully Accredited by the Private Security Industry Regulatory Authority (PSIRA). The Academy’s Training Program is designed to assist our students in achieving the highest level of Security training in order for them to enter into the security sector with not only the needed training but also training that will equip them with the necessary understanding and abilities to handle a situation professionally and effectively.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                    As from the 11th March 2020, anyone wanting to do their security training can contact our offices and request the manuals.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                    Gordon's Bay Security has been in business since 2001 and has built up a reputation as one of the leading security companies in the Helderberg area. They have been doing the "Firearms Proficiency Training" for the past 16 years and have been known as a company with high ethics and morals.
                </p>
            </motion.section>

            {/* Contact Section */}
            <motion.section 
                className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4 }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-red-700 border-b-2 border-red-700 pb-2">Contact The Academy</h2>
                <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                    <label className="block">
                        <span className="text-gray-700">Name *</span>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="form-input mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-red-500 focus:ring-0 transition-colors duration-300"
                            required
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Email *</span>
                        <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="form-input mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-red-500 focus:ring-0 transition-colors duration-300"
                            required
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Subject</span>
                        <input 
                            type="text" 
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="form-input mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-red-500 focus:ring-0 transition-colors duration-300"
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Message *</span>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="form-textarea mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-red-500 focus:ring-0 transition-colors duration-300"
                            rows={4}
                            required
                        ></textarea>
                    </label>
                    <button
                        type="submit"
                        className="bg-red-700 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors duration-300"
                        disabled={status.submitting}
                    >
                        {status.submitting ? 'Sending...' : 'Send'}
                    </button>
                </form>

                {status.success && <p className="mt-4 text-green-600">Message sent successfully!</p>}
                {status.error && <p className="mt-4 text-red-600">{status.error}</p>}
            </motion.section>

            {/* Grades Section */}
            <motion.section 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-red-700 border-b-2 border-red-700 pb-2">Grades That Can Be Done</h2>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-lg">
                    <li className="hover:text-red-600 transition-colors duration-300">GRADE E = R800 (Including Course Reports Submission)</li>
                    <li className="hover:text-red-600 transition-colors duration-300">GRADE D = R800 (Including Course Reports Submission)</li>
                    <li className="hover:text-red-600 transition-colors duration-300">GRADE C = R800 (Including Course Reports Submission)</li>
                    <li className="hover:text-red-600 transition-colors duration-300">GRADE B = R1200 (Including Course Reports Submission)</li>
                    <li className="hover:text-red-600 transition-colors duration-300">GRADE A = R1300 (Including Course Reports Submission)</li>
                    <li className="hover:text-red-600 transition-colors duration-300">GRADE AR = R1200 (Including Course Reports Submission)</li>
                    <li className="hover:text-red-600 transition-colors duration-300">GRADE CIT = R1200 (Including Course Reports Submission)</li>
                </ul>
                <p className="mt-4 text-lg text-gray-700">
                    R150 Class booking fees. This is non-refundable and if you do not pitch up for the class or let us know 24 hours before the time that you will not be attending the class, you will need to pay another R100 for another booking.
                </p>
            </motion.section>
            
            {/* Process Section */}
            <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8 }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-red-700 border-b-2 border-red-700 pb-2">Process</h2>
                <ol className="list-decimal pl-6 mt-4 space-y-4 text-lg text-gray-700">
                    <li>Purchase the manuals from our office at Gordon's Bay Security.</li>
                    <li>Study the material and complete the assignments.</li>
                    <li>Once you've completed the material, contact us to arrange a time and date to come for your tests.</li>
                    <li>Get your course report, which will be submitted to PSIRA.</li>
                    <li>PSIRA will register you and issue your PSIRA card.</li>
                </ol>
            </motion.section>
        </div>
    );
};

export default Psira;
