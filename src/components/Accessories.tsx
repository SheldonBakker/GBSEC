import { useState } from "react";

const RifleScopesAndAccessories = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { model: 'H1-030940-T3', type: 'Riflescope', tube: '25mm', description: '3-9x40mm', reticle: 'T3', price: 'R 4 900.00' },
    { model: 'H1-041250-T3', type: 'Riflescope', tube: '25mm', description: '4-12x50mm', reticle: 'T3', price: 'R 5 800.00' },
    { model: 'H1-351444-T3', type: 'Riflescope', tube: '25mm', description: '3.5-14x44mm SF', reticle: 'T3', price: 'R 6 800.00' },
    { model: 'H2-041642-T4', type: 'Riflescope', tube: '25mm', description: '4-16x42mm SF', reticle: 'T4', price: 'R 10 900.00' },
    { model: 'V1-251550-D2', type: 'Riflescope', tube: '30mm', description: '2.5-15x50mm', reticle: 'D2 IR', price: 'R 9 500.00' },
    { model: 'V1-251550-T3', type: 'Riflescope', tube: '30mm', description: '2.5-15x50mm', reticle: 'T3 IR', price: 'R 9 500.00' },
    { model: 'V1-052550-T3', type: 'Riflescope', tube: '30mm', description: '5-25x50mm', reticle: 'T3 IR Zerostop', price: 'R 10 900.00' },
    { model: 'V1-052550-T9', type: 'Riflescope', tube: '30mm', description: '5-25x50mm', reticle: 'T9 FFP IR', price: 'R 14 600.00' },
    { model: 'VH-062450-T5', type: 'Riflescope', tube: '30mm', description: '6-24x50mm', reticle: 'T5', price: 'R 15 000.00' },
    { model: 'VH-031642-T8', type: 'Riflescope', tube: '30mm', description: '3-16x42mm', reticle: 'T8 FFP IR', price: 'R 17 900.00' },
    { model: 'VH-042050-T8', type: 'Riflescope', tube: '30mm', description: '4-20x50mm', reticle: 'T8 FFP IR', price: 'R 19 900.00' },
    { model: 'AR-010824-T7', type: 'Riflescope', tube: '30mm', description: '1-8x24mm IR', reticle: 'T7', price: 'R 11 200.00' },
    { model: 'OPS-053056-T9', type: 'Riflescope', tube: '34mm', description: '5-30x56mm', reticle: 'T9 FFP IR', price: 'R 29 900.00' },
    { model: 'RX-2403', type: 'Red Dot – Reflex', tube: '-', description: '1x24mm', reticle: '3 MOA Dot', price: 'R 5 490.00' },
    { model: 'RD-0130', type: 'Red Dot', tube: '30mm', description: '1x30mm', reticle: '3 MOA Dot', price: 'R 3 950.00' },
    { model: 'RD-0120', type: 'Red Dot', tube: '-', description: '1x20mm', reticle: '3 MOA Dot', price: 'R 4 600.00' },
  ];

  const accessories = [
    { name: 'Rudolph Ear Protection – Passive', price: 'R 395.00' },
    { name: 'Rudolph Ear Protection – Electronic', price: 'R 1 250.00' },
    { name: 'Rudolph 6-9" Pivot Bipod', price: 'R 1 190.00' },
    { name: 'Rudolph 9-13" Pivot Bipod', price: 'R 1 390.00' },
    { name: 'Rudolph Guncoat – Brown', price: 'R 420.00' },
    { name: 'Rudolph PowerLever', price: 'R 650.00' },
    { name: 'Rudolph Folding Pocket Knife', price: 'R 695.00' },
    { name: 'Rudolph ZeroSet Ring - T1 SFP model', price: 'R 400.00' },
    { name: 'Rudolph PH Shooting Sticks', price: 'R 2 400.00' },
    { name: 'Rudolph Tactical Bag - Kryptek Raid', price: 'R 1 300.00' },
  ];

  const filteredProducts = products.filter(product => 
    product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.tube.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.reticle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAccessories = accessories.filter(accessory =>
    accessory.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100 pt-24 pb-24">
      {/* Page Description */}
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Rifle Scopes and Accessories</h1>
        <p className="text-lg text-gray-600">
          Welcome to our comprehensive catalog of Rudolph rifle scopes, red dot sights, binoculars, rangefinders, and accessories. 
          Whether you're looking for the perfect scope for your next hunting trip or high-quality accessories for your shooting gear, 
          we have a variety of options to suit your needs. Explore our premium selection below.
        </p>
      </section>

      {/* Search Input */}
      <section className="mb-8 text-center">
        <input 
          type="text" 
          placeholder="Search by model, tube, description, reticle..."
          className="p-2 w-full max-w-md border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      {/* Riflescopes Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-700">Rudolph Scopes</h2>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-800">
                <th className="p-4 text-left">Model</th>
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Tube</th>
                <th className="p-4 text-left">Description</th>
                <th className="p-4 text-left">Reticle</th>
                <th className="p-4 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={index} className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                  <td className="p-4">{product.model}</td>
                  <td className="p-4">{product.type}</td>
                  <td className="p-4">{product.tube}</td>
                  <td className="p-4">{product.description}</td>
                  <td className="p-4">{product.reticle}</td>
                  <td className="p-4 font-semibold text-gray-700">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessories Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-gray-700">Accessories</h2>
        <div className="bg-white shadow-md rounded-lg">
          <ul className="divide-y divide-gray-200">
            {filteredAccessories.map((accessory, index) => (
              <li key={index} className={`p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                <div className="flex justify-between">
                  <span className="text-gray-800">{accessory.name}</span>
                  <span className="font-semibold text-gray-700">{accessory.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Email */}
      <section className="mt-12 text-center">
        <p className="text-lg text-gray-600">
          Email <a href="mailto:gunshop@gbsec.co.za" className="text-red-500 underline">gunshop@gbsec.co.za</a> with any orders that you would like to place.
        </p>
      </section>
    </div>
  );
};

export default RifleScopesAndAccessories;
