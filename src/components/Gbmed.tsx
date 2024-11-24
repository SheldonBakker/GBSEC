import React from "react";
import {
  FaAmbulance,
  FaRegClock,
  FaFirstAid,
  FaRegCheckCircle,
  FaFastForward,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { GiHealthNormal, GiMedicalPack } from "react-icons/gi";
import { FaClock } from "react-icons/fa6";
import { motion } from "framer-motion"; // Import Framer Motion

const Gbmed: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 py-24 px-6 sm:px-12 lg:px-24 pb-16">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-b from-yellow-100 to-stone-300 py-12 pt-24 md:py-16 md:pt-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-wide">
            GBMED RESCUE
          </h1>
          <p className="text-lg md:text-xl font-medium text-black mb-4">
            <FaRegCheckCircle className="inline mr-2 text-green-600" /> BHF
            Practice NR: 0090020422959
          </p>
          <p className="text-base md:text-lg leading-relaxed text-black mb-6 max-w-3xl md:max-w-4xl mx-auto">
            <GiHealthNormal className="inline mr-3 text-red-600" />
            GBMED Rescue provides emergency medical assistance, treatment, and
            transport to the Helderberg area, including Gordon's Bay, Strand,
            and Somerset West.
          </p>
        </div>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        className="py-12 md:py-16 bg-stone-900 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-10">
            About Us
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Our Vision
              </h3>
              <p className="text-base md:text-lg">
                <GiHealthNormal className="inline mr-2 text-yellow-400" />
                To ensure the community of Helderberg is confident in the
                quality of GBMED ambulance service.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Our Mission
              </h3>
              <p className="text-base md:text-lg">
                <FaAmbulance className="inline mr-2 text-yellow-400" />
                To save lives, reduce suffering, and enhance quality of life
                through accessible patient care.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Our Values
              </h3>
              <p className="text-base md:text-lg">
                <FaRegClock className="inline mr-2 text-yellow-400" />
                We prioritize accountability, integrity, and innovation in all
                our services.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Our Goals
              </h3>
              <p className="text-base md:text-lg">
                <GiMedicalPack className="inline mr-2 text-yellow-400" />
                Achieving excellence through teamwork, leadership, and
                partnership with our community.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Ambulance Services Section */}
      <motion.section
        className="py-12 md:py-16 bg-red-50 text-stone-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.2 }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            Our Ambulance Department Provides:
          </h2>
          <ul className="list-disc list-inside space-y-4 max-w-3xl md:max-w-4xl mx-auto">
            <motion.li
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.4 }}
            >
              <FaClock className="mr-3 text-red-600" /> 24/7 Emergency Control
              Centre
            </motion.li>
            <motion.li
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.6 }}
            >
              <FaFastForward className="mr-3 text-red-600" /> Emergency Medical
              Response
            </motion.li>
            <motion.li
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.8 }}
            >
              <FaAmbulance className="mr-3 text-red-600" /> Inter-Hospital
              Transfers Nationwide
            </motion.li>
            <motion.li
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3 }}
            >
              <FaFirstAid className="mr-3 text-red-600" /> First Aid Training
            </motion.li>
            <motion.li
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3.2 }}
            >
              <GiMedicalPack className="mr-3 text-red-600" /> Medical Equipment
            </motion.li>
            <motion.li
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3.4 }}
            >
              <HiDocumentText className="mr-3 text-red-600" /> Registered with
              the Road Accident Fund
            </motion.li>
          </ul>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-12 md:py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.6 }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8 text-center">
            Testimonials
          </h2>
          <blockquote className="bg-yellow-100 p-6 md:p-10 rounded-lg shadow-md mx-auto max-w-2xl md:max-w-3xl text-left">
            <p className="text-base md:text-lg leading-relaxed mb-6">
              "I would like to thank you and your personnel for your quick
              response over the weekend at my house. I had a medical situation
              with my six-year-old boy, and I am convinced that had it not been
              for your prompt and effective response, the outcome would have
              been very different."
            </p>
            <footer className="text-sm md:text-base font-semibold text-gray-700">
              — George Lotze
            </footer>
          </blockquote>
          <div className="text-center mt-10">
            <p className="text-lg md:text-xl font-semibold text-black mb-2">
              For Any Medical Emergency, Call:
            </p>
            <a
              href="tel:0761855351"
              className="text-2xl text-red-600 underline hover:text-red-500 transition-colors"
            >
              076 185 5351
            </a>
          </div>
        </div>
      </motion.section>

      {/* Bottom Padding */}
      <div className="pb-12 md:pb-16"></div>
    </div>
  );
};

export default Gbmed;
