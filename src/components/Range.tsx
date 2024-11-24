import React from "react";
import Button from "./Button"; // Adjust the import path as needed

const Range: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 py-24 px-6 sm:px-12 lg:px-24 pb-40">
      <div className="container mx-auto max-w-4xl py-12 px-4 md:px-8 lg:px-12">
        {/* Buttons Section */}
        <div className="flex flex-row justify-center gap-6 mb-8 flex-wrap">
          <Button
            to="/gunshop/ammunition"
            ariaLabel="Navigate to ammunition section"
          >
            Ammunition
          </Button>
          <Button to="/gunshop/scopes" ariaLabel="Navigate to scopes section">
            Scopes
          </Button>
          <Button
            to="/gunshop/accessories"
            ariaLabel="Navigate to accessories section"
          >
            Accessories
          </Button>
        </div>

        {/* Title Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-red-600 tracking-tight">
          Gordon's Bay Indoor Shooting Range
        </h1>

        {/* Intro Section */}
        <div className="text-center mb-10 p-4">
          <p className="text-lg md:text-xl font-semibold">
            When last did you fire that handgun lying in your safe? How old is
            that ammunition?
          </p>
          <p className="text-base md:text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
            If you, like many other gun owners in the Helderberg, can’t remember
            when last you fired your handgun or how old your ammunition is, your
            worries are over.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            "/images/range1.png",
            "/images/range2.png",
            "/images/range3.png",
            "/images/range4.png",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Shooting Range ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
              onError={(e: any) => {
                e.target.src = "/images/default-placeholder.png"; // Fallback image
              }}
            />
          ))}
        </div>

        {/* Details Section */}
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Shooting Range Details
          </h2>
          <p className="mb-5 text-gray-700 leading-relaxed text-base md:text-lg">
            Gordon's Bay Security has an indoor shooting range in Gordon's Bay
            next to Gordon's Bay Fisheries in Link Road. The shooting tunnel and
            roof are built with double thick concrete blocks with soundproof
            material in between them. At the end of the tunnel is a bullet
            catcher and in front of this is a rubber curtain to stop ricochets.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base md:text-lg">
            The floor is constructed of a meter thick sand and clay to further
            ensure safety. Targets are operated electronically by the shooter,
            who can determine the distance they want to shoot at. The public is
            welcome to use the shooting range at a fee of R150 per half hour.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base md:text-lg">
            There are five lanes in the tunnel, allowing five shooters to shoot
            at a time. The range has been open since 2005 and is NRCS, SAPS, and
            ITA approved.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed text-base md:text-lg">
            Firearms allowed: Any calibre Handgun, Shotguns (no slugs), .22
            Rifles, and air rifles. Range use is available on Saturdays for
            groups of 3 or more, with prior arrangements.
          </p>
        </div>

        {/* Pricing & Booking Section */}
        <div className="bg-yellow-50 p-6 md:p-10 rounded-lg shadow-lg mt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-700 mb-6">
            Pricing & Booking Information
          </h2>
          <ul className="list-disc pl-6 text-gray-800 leading-relaxed mb-5 text-base md:text-lg">
            <li className="mb-2">
              Monday – Friday (On appointment): R150 per half hour.
            </li>
            <li className="mb-2">
              After hours – Monday to Saturday: R200 per half hour.
            </li>
            <li className="mb-2">
              Saturday (On appointment): R200 per half hour (with 3 or more
              people).
            </li>
          </ul>
          <p className="text-gray-700 mb-5 text-base md:text-lg">
            The range is SABS accredited (No.: AZC 2004/04) and is open from
            08:00 to 16:30 on weekdays. Bookings for Saturdays need to be done 2
            days in advance.
          </p>
          <p className="font-semibold text-gray-800 text-base md:text-lg">
            To book, contact Matthew at 082 321 3632 or the offices at 021 856
            0214.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Range;
