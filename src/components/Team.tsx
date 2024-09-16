import React from 'react';
// Importing local images
import Heyns from './assets/heyns-de-waal.png';
import sunette from './assets/sunette-ligthelm.png';
import matthew from './assets/matthew-williams.png';
import rudi from './assets/rudi-kruger.png';
import blackie from './assets/blackie-swart.png';
import geo from './assets/geo-van-de-merwe.png';
import irvin from './assets/irvin-du-plessis.png';
import kika from './assets/kika-rossouw.png';

const Team: React.FC = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-red-600">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Team Member 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300">
            <img
              src={Heyns}
              alt="Heyns de Waal"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Heyns de Waal</h3>
            <p className="text-gray-600">Chief Operating Officer</p>
            <a
              href="mailto:dewaal@gbsec.co.za"
              className="mt-4 inline-block bg-red-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-stone-500 transition-colors"
            >
              Email Heyns
            </a>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300">
            <img
              src={matthew}
              alt="Matthew Williams"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Matthew Williams</h3>
            <p className="text-gray-600">General Manager</p>
            <a
              href="mailto:matthew@gbsec.co.za"
              className="mt-4 inline-block bg-red-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-stone-500 transition-colors"
            >
              Email Matthew
            </a>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300">
            <img
              src={sunette}
              alt="Sunette Ligthelm"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Sunette Ligthelm</h3>
            <p className="text-gray-600">Medical Base Manager</p>
            <a
              href="mailto:management@gbmedrescue.co.za"
              className="mt-4 inline-block bg-red-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-stone-500 transition-colors"
            >
              Email Sunette
            </a>
          </div>

          {/* Team Member 4 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300">
            <img
              src={rudi}
              alt="Rudi Kruger"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Rudi Kruger</h3>
            <p className="text-gray-600">Wireless/Internet</p>
            <a
              href="mailto:rudi@gbsec.co.za"
              className="mt-4 inline-block bg-red-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-stone-500 transition-colors"
            >
              Email Rudi
            </a>
          </div>

          {/* Team Member 5 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300">
            <img
              src={blackie}
              alt="Blackie Swart"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Blackie Swart</h3>
            <p className="text-gray-600">Armed Response Manager</p>
            <a
              href="mailto:blackie@gbsec.co.za"
              className="mt-4 inline-block bg-red-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-stone-500 transition-colors"
            >
              Email Blackie
            </a>
          </div>

          {/* Team Member 6 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300">
            <img
              src={geo}
              alt="Geo van der Merwe"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Geo van der Merwe</h3>
            <p className="text-gray-600">Head of Technical Department</p>
            <a
              href="mailto:geo@gbsec.co.za"
              className="mt-4 inline-block bg-red-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-stone-500 transition-colors"
            >
              Email Geo
            </a>
          </div>

          {/* Team Member 7 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300">
            <img
              src={irvin}
              alt="Irvin du Plessis"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Irvin du Plessis</h3>
            <p className="text-gray-600">Technical/Quote</p>
            <a
              href="mailto:quotes@gbsec.co.za"
              className="mt-4 inline-block bg-red-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-stone-500 transition-colors"
            >
              Email Irvin
            </a>
          </div>

          {/* Team Member 8 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300">
            <img
              src={kika}
              alt="Kika Rossouw"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Kika Rossouw</h3>
            <p className="text-gray-600">Accounts Department</p>
            <a
              href="mailto:kika@gbsec.co.za"
              className="mt-4 inline-block bg-red-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-stone-500 transition-colors"
            >
              Email Kika
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
