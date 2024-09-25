import React from 'react';
import { Link } from 'react-router-dom';

const Range: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-24 p-6">
      <div className="container mx-auto py-12 px-4 md:px-8 lg:px-12">
        
        {/* Buttons Section (Moved to the Top) */}
        <div className="flex justify-center gap-6 mb-8">
          <Link to="/gunshop/ammunition">
            <button className="bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-stone-700 transition">
              Ammunition
            </button>
          </Link>
          <Link to="/gunshop/accessories">
            <button className="bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-stone-700 transition">
              Scopes/Accessories
            </button>
          </Link>
        </div>

        {/* Title Section */}
        <h1 className="text-5xl font-extrabold text-center mb-12 text-red-600 tracking-tight">
          Gordon's Bay Indoor Shooting Range
        </h1>

        {/* Intro Section */}
        <div className="text-center mb-10">
          <p className="text-xl font-semibold">
            When last did you fire that handgun lying in your safe? How old is that ammunition?
          </p>
          <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
            If you, like many other gun owners in the Helderberg, can’t remember when last you fired your handgun or how old your ammunition is, your worries are over.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <img
            src="/images/range1.png"
            alt="Shooting Range 1"
            className="w-full h-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          />
          <img
            src="/images/range2.png"
            alt="Shooting Range 2"
            className="w-full h-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          />
          <img
            src="/images/range3.png"
            alt="Shooting Range 3"
            className="w-full h-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          />
          <img
            src="/images/range4.png"
            alt="Shooting Range 4"
            className="w-full h-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          />
        </div>

        {/* Details Section */}
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Shooting Range Details</h2>
          <p className="mb-5 text-gray-700 leading-relaxed">
            Gordon's Bay Security has an indoor shooting range in Gordon's Bay next to Gordon's Bay Fisheries in Link Road. The shooting tunnel and roof are built with double thick concrete blocks with soundproof material in between them. At the end of the tunnel is a bullet catcher and in front of this is a rubber curtain to stop ricochets.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed">
            The floor is constructed of a meter thick sand and clay to further ensure safety. Targets are operated electronically by the shooter, who can determine the distance they want to shoot at. The public is welcome to use the shooting range at a fee of R150 per half hour.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed">
            There are five lanes in the tunnel, allowing five shooters to shoot at a time. The range has been open since 2005 and is NRCS, SAPS, and ITA approved.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed">
            Firearms allowed: Any calibre Handgun, Shotguns (no slugs), .22 Rifles, and air rifles. Range use is available on Saturdays for groups of 3 or more, with prior arrangements.
          </p>
        </div>

        {/* Pricing & Booking Section */}
        <div className="bg-yellow-50 p-10 rounded-lg shadow-lg mt-10">
          <h2 className="text-3xl font-bold text-yellow-700 mb-6">Pricing & Booking Information</h2>
          <ul className="list-disc pl-6 text-gray-800 leading-relaxed mb-5">
            <li className="mb-2">Monday – Friday (On appointment): R150 per half hour.</li>
            <li className="mb-2">After hours – Monday to Saturday: R200 per half hour.</li>
            <li className="mb-2">Saturday (On appointment): R200 per half hour (with 3 or more people).</li>
          </ul>
          <p className="text-gray-700 mb-5">
            The range is SABS accredited (No.: AZC 2004/04) and is open from 08:00 to 16:30 on weekdays. Bookings for Saturdays need to be done 2 days in advance.
          </p>
          <p className="font-semibold text-gray-800">
            To book, contact Matthew at 082 321 3632 or the offices at 021 856 0214.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Range;
