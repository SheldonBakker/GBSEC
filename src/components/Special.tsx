import { motion } from "framer-motion"; // For animations
import {
  FaShieldAlt,
  FaHandshake,
  FaMedkit,
  FaTachometerAlt,
} from "react-icons/fa"; // Professional icons

const SpecialOps = () => {
  return (
    <div className="bg-white text-gray-800 py-24 px-6 sm:px-12 lg:px-24 pb-40">
      {/* Header Section */}
      <motion.h1
        className="text-4xl sm:text-5xl font-semibold text-center mb-12 text-red-600 tracking-wide leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Strike with Strength
      </motion.h1>

      {/* Introductory Paragraph */}
      <motion.p
        className="text-lg sm:text-xl mb-12 leading-relaxed text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        GBSEC operates specialized alarm reaction vehicles across Somerset West,
        Strand, and Gordon’s Bay. These vehicles are dedicated to their areas of
        operation, ensuring round-the-clock safety, much like sector policing.
      </motion.p>

      {/* Information with Icons in One Line */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {/* Alarm Reaction */}
        <motion.div
          className="flex items-center space-x-4 max-w-xs text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <FaShieldAlt className="text-6xl sm:text-7xl text-red-600" />
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              Dedicated Alarm Reaction
            </h2>
            <p className="text-gray-600 mt-1">
              Our vehicles are always in their designated area, similar to
              sector policing, ensuring rapid responses.
            </p>
          </div>
        </motion.div>

        {/* Neighbourhood Watch */}
        <motion.div
          className="flex items-center space-x-4 max-w-xs text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.7 }}
        >
          <FaHandshake className="text-6xl sm:text-7xl text-red-600" />
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              Neighbourhood Watch Cooperation
            </h2>
            <p className="text-gray-600 mt-1">
              Collaborating with Neighbourhood Watches and other security
              providers to maintain community safety.
            </p>
          </div>
        </motion.div>

        {/* Medical & Tactical Training */}
        <motion.div
          className="flex items-center space-x-4 max-w-xs text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.9 }}
        >
          <FaMedkit className="text-6xl sm:text-7xl text-red-600" />
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              Medical & Tactical Training
            </h2>
            <p className="text-gray-600 mt-1">
              Special Ops members are ex-SAPS, with advanced tactical training
              and medical certifications.
            </p>
          </div>
        </motion.div>

        {/* Tactical Operations */}
        <motion.div
          className="flex items-center space-x-4 max-w-xs text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <FaTachometerAlt className="text-6xl sm:text-7xl text-red-600" />
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              Tactical Operations
            </h2>
            <p className="text-gray-600 mt-1">
              Equipped with advanced firearms, including MP5 rifles, our units
              remain on the scene for extended support.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Additional Paragraphs */}
      <motion.p
        className="text-lg sm:text-xl mb-12 leading-relaxed text-gray-700 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.2 }}
      >
        Established in 2014, GBSEC’s Special Ops Unit has evolved with changing
        criminal tactics, ensuring our services stay relevant and effective. Our
        unit works flexibly alongside SAPS and Neighbourhood Watch operations,
        allowing normal reaction units to focus on their patrols.
      </motion.p>

      <motion.p
        className="text-lg sm:text-xl leading-relaxed text-gray-700 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4 }}
      >
        We provide adaptable and reliable security without resorting to
        aggressive terminologies like "Strike Team" or "High-Risk Force". Our
        mission is to protect and serve communities with strength, integrity,
        and professionalism.
      </motion.p>
    </div>
  );
};

export default SpecialOps;
