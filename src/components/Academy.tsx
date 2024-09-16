import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

const Academy: React.FC = () => {
    return (
        <div className="pt-24 md:pt-32 pb-24 px-6 md:px-16 space-y-12">
            {/* Header Section */}
            <section className="text-center">
                <motion.h1 
                    className="text-4xl md:text-5xl font-bold text-red-700 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Gordon's Bay Security Trust Academy
                </motion.h1>
                <motion.p 
                    className="text-lg md:text-xl text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    Gordons Bay Security Academy has been running since 2003.
                </motion.p>
            </section>

            {/* Accreditations Section */}
            <section className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                <motion.h2 
                    className="text-3xl md:text-4xl font-semibold text-red-700 border-b-2 border-red-700 pb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.4 }}
                >
                    Accreditations
                </motion.h2>
                <motion.p 
                    className="mt-4 text-lg text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.6 }}
                >
                    We are accredited with:
                </motion.p>
                <motion.ul 
                    className="list-disc pl-6 mt-4 space-y-2 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.8 }}
                >
                    <li>SAPS</li>
                    <li>ITA</li>
                    <li>PFTC</li>
                    <li>SAQA</li>
                    <li>ETQA</li>
                    <li>PSIRA</li>
                    <li>SASSETA</li>
                </motion.ul>
            </section>

            {/* Instructor Section */}
            <section className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                <motion.h2 
                    className="text-3xl md:text-4xl font-semibold text-red-700 border-b-2 border-red-700 pb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    Our Instructor
                </motion.h2>
                <motion.p 
                    className="mt-4 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2.2 }}
                >
                    Our instructor, Matthew W Williams, is not only an instructor but an Assessor and Moderator
                    registered with all the above-mentioned entities. His gradings and certificates are up-to-date and
                    valid. With 20 years of experience, he has built a reputation for having an "Above Standard" Portfolio
                    of Evidence for his students.
                </motion.p>
                <motion.p 
                    className="mt-4 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2.4 }}
                >
                    He is accredited to conduct the following Unit Standards:
                </motion.p>
                <motion.ul 
                    className="list-disc pl-6 mt-4 space-y-2 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2.6 }}
                >
                    <li>Knowledge of the Firearms Act 60/2000 - Unit Standard 117705</li>
                    <li>Handle and Use of a Handgun Private - Unit Standard 119649</li>
                    <li>Handle and Use of a Shotgun Private - Unit Standard 119652</li>
                    <li>Handle and Use of a MO Rifle Private - Unit Standard 119651</li>
                    <li>Handle and Use of a SL Rifle Private - Unit Standard 119650</li>
                    <li>Handle and Use of a Handgun Business - Unit Standard 123515</li>
                    <li>Handle and Use of a Shotgun Business - Unit Standard 123514</li>
                    <li>Handle and Use of a MO Rifle Business - Unit Standard 123519</li>
                    <li>Handle and Use of a SL Rifle Business - Unit Standard 123511</li>
                    <li>Handle and Use of a Handgun for Tactical Purposes - Unit Standard 123513</li>
                    <li>Handle and Use of a Shotgun for Tactical Purposes - Unit Standard 123512</li>
                    <li>Handle and Use of a SL Rifle for Tactical Purposes - Unit Standard 123518</li>
                    <li>Apply Tactical Knowledge Unit Standard 123510</li>
                    <li>Supervise Tactical Exercise Unit Standard 123517</li>
                    <li>Range Officer Unit Standard 123516</li>
                    <li>Regulation 21</li>
                </motion.ul>
            </section>

            {/* New Instructor Section */}
            <section className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                <motion.h2 
                    className="text-3xl md:text-4xl font-semibold text-red-700 border-b-2 border-red-700 pb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2.8 }}
                >
                    New Instructor
                </motion.h2>
                <motion.p 
                    className="mt-4 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3 }}
                >
                    Our newest member, Clifford van Haght, will complete his training and accreditation to become an
                    Instructor and Assessor in October 2024. He has been under the guidance and training of Matthew W
                    Williams.
                </motion.p>
            </section>

            {/* Contact Section */}
            <section className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                <motion.h2 
                    className="text-3xl md:text-4xl font-semibold text-red-700 border-b-2 border-red-700 pb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3.2 }}
                >
                    Contact Us
                </motion.h2>
                <motion.p 
                    className="mt-4 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3.4 }}
                >
                    For course inquiries, please contact:
                </motion.p>
                <motion.ul 
                    className="list-disc pl-6 mt-4 space-y-2 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3.6 }}
                >
                    <li>Matthew at 082 321 3632</li>
                    <li>Offices at 021 856 0214</li>
                </motion.ul>
            </section>

            {/* Pricing Section */}
            <section className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                <motion.h2 
                    className="text-3xl md:text-4xl font-semibold text-red-700 border-b-2 border-red-700 pb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3.8 }}
                >
                    Firearms Competency Training
                </motion.h2>
                <motion.p 
                    className="mt-4 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 4 }}
                >
                    In terms of the Firearms Control Act, 2000, all existing firearm licenses had to be renewed from 1
                    April 2004. Every person applying for a firearm license or renewal in South Africa must obtain a
                    Firearm Competency Certificate from an accredited institution.
                </motion.p>
                <motion.p 
                    className="mt-4 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 4.2 }}
                >
                    Courses are available in English and Afrikaans.
                </motion.p>
                <div className="mt-6 space-y-4">
                    <motion.div 
                        className="bg-gray-100 p-4 rounded-lg border border-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 4.4 }}
                    >
                        <h3 className="text-2xl font-semibold text-red-700 mb-2">Legal</h3>
                        <p className="text-lg">R500</p>
                    </motion.div>
                    <motion.div 
                        className="bg-gray-100 p-4 rounded-lg border border-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 4.6 }}
                    >
                        <h3 className="text-2xl font-semibold text-red-700 mb-2">Handgun Private (119649)</h3>
                        <p className="text-lg">R800 (Excl. Ammo) - Ammo: R8.00 per round min 20 rounds = R160</p>
                    </motion.div>
                    <motion.div 
                        className="bg-gray-100 p-4 rounded-lg border border-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 4.8 }}
                    >
                        <h3 className="text-2xl font-semibold text-red-700 mb-2">Shotgun Private (119652)</h3>
                        <p className="text-lg">R800 (Excl. Ammo) - Ammo: R10.50 per round min 10 rounds = R105</p>
                    </motion.div>
                    <motion.div 
                        className="bg-gray-100 p-4 rounded-lg border border-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 5 }}
                    >
                        <h3 className="text-2xl font-semibold text-red-700 mb-2">MO Rifle Private (119651)</h3>
                        <p className="text-lg">R800 (Excl. Ammo) - Ammo: R3.30 per round min 20 rounds = R66</p>
                    </motion.div>
                    <motion.div 
                        className="bg-gray-100 p-4 rounded-lg border border-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 5.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-red-700 mb-2">SL Rifle Private (119650)</h3>
                        <p className="text-lg">R800 (Excl. Ammo) - Ammo: R8.00 per round min 20 rounds = R160</p>
                    </motion.div>
                    <motion.div 
                        className="bg-gray-100 p-4 rounded-lg border border-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 5.4 }}
                    >
                        <h3 className="text-2xl font-semibold text-red-700 mb-2">Handgun Combo (649 & 515)</h3>
                        <p className="text-lg">R2200 (Excl. Ammo) - Ammo: R8.00 per round min 70 rounds = R560</p>
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                <motion.h2 
                    className="text-3xl md:text-4xl font-semibold text-red-700 border-b-2 border-red-700 pb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 5.6 }}
                >
                    Process
                </motion.h2>
                <motion.p 
                    className="mt-4 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 5.8 }}
                >
                    Take the manuals home and complete the tests inside in pen. Upon purchasing the manuals, you will be
                    given a date for the next class. On this day, bring your ID book and completed tests to the office.
                </motion.p>
                <motion.p 
                    className="mt-4 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 6 }}
                >
                    Your open book test will be marked. If you pass, you will write the closed book test in the classroom.
                    Upon passing both tests, you will be scheduled for your range shoot with an instructor.
                </motion.p>
            </section>

            {/* Tactical Training Section */}
            <section className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                <motion.h2 
                    className="text-3xl md:text-4xl font-semibold text-red-700 border-b-2 border-red-700 pb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 6.2 }}
                >
                    Tactical Training
                </motion.h2>
                <div className="space-y-6">
                    <motion.div 
                        className="bg-gray-100 p-4 rounded-lg border border-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 6.4 }}
                    >
                        <h3 className="text-2xl font-semibold text-red-700 mb-2">Apply Tactical Knowledge</h3>
                        <p className="text-lg">Duration: 2 Days</p>
                        <p className="text-lg">Unit: 123510</p>
                        <p className="text-lg">PRICE ON REQUEST</p>
                    </motion.div>
                    <motion.div 
                        className="bg-gray-100 p-4 rounded-lg border border-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 6.6 }}
                    >
                        <h3 className="text-2xl font-semibold text-red-700 mb-2">Supervise Tactical Exercise</h3>
                        <p className="text-lg">Duration: 2 Days</p>
                        <p className="text-lg">Unit: 123517</p>
                        <p className="text-lg">PRICE ON REQUEST</p>
                    </motion.div>
                    <motion.div 
                        className="bg-gray-100 p-4 rounded-lg border border-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 6.8 }}
                    >
                        <h3 className="text-2xl font-semibold text-red-700 mb-2">Handle Handgun for Tactical Purposes</h3>
                        <p className="text-lg">Duration: 2 Days</p>
                        <p className="text-lg">Unit: 123513</p>
                        <p className="text-lg">PRICE ON REQUEST</p>
                    </motion.div>
                </div>
            </section>

            {/* Additional Details Section */}
            <section className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                <motion.h2 
                    className="text-3xl md:text-4xl font-semibold text-red-700 border-b-2 border-red-700 pb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 7 }}
                >
                    Additional Details
                </motion.h2>
                <motion.p 
                    className="mt-4 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 7.2 }}
                >
                    Our Tactical Unit Standard courses are PFTC and ITA accredited and provide advanced training for
                    high-risk situations where quick decision-making and skills are essential. These courses prepare
                    individuals for the highest level of security response.
                </motion.p>
            </section>
        </div>
    );
};

export default Academy;
