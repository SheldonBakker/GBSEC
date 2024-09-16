import React, { useState } from 'react';
import { formatCurrency } from './utils'; // Import the utility function
import { Ammunition } from './types'; // Import the interface

const ammunitionData: Ammunition[] = [
    { type: '.177 Pellet', stock: 'No Stock', price: 'R0,00' },
    { type: '.22 Long', stock: 'In Stock', price: 'R165,00' },
    { type: '.22 High Velocity', stock: 'No Stock', price: 'R0,00' },
    { type: '.22 Hornet (45g) SP', stock: 'In Stock', price: 'R420,00' },
    { type: '6.35 (FMJ)', stock: 'In Stock', price: 'R525,00' },
    { type: '6.35 Hollow Points', stock: 'No Stock', price: 'R0,00' },
    { type: '7.65 (73g FMJ)', stock: 'In Stock', price: 'R475,00' },
    { type: '7.65 Hollow Points', stock: 'No Stock', price: 'R0,00' },
    { type: '9mmK (92g FMJ)', stock: 'In Stock', price: 'R490,00' },
    { type: '9mmK Hollow Points', stock: 'No Stock', price: 'R0,00' },
    { type: '9mm (115g FMJ)', stock: 'In Stock', price: 'R400,00' },
    { type: '9mm Hollow Points', stock: 'No Stock', price: 'R0,00' },
    { type: '38Spl (158g) JSP', stock: 'In Stock', price: 'R550,00' },
    { type: '38Spl Hollow Points', stock: 'No Stock', price: 'R0,00' },
    { type: '357 (158g) JSP', stock: 'In Stock', price: 'R630,00' },
    { type: '40 S&W (180g FMJ)', stock: 'In Stock', price: 'R610,00' },
    { type: '44 (FMJ)', stock: 'No Stock', price: 'R0,00' },
    { type: '44 Hollow Points', stock: 'No Stock', price: 'R0,00' },
    { type: '45 ACP (230g FMJ)', stock: 'In Stock', price: 'R650,00' },
    { type: '222 REM (50g SP)', stock: 'In Stock', price: 'R472,00' },
    { type: '222 (???g)', stock: 'No Stock', price: 'R0,00' },
    { type: '22-250 REM (55g SP)', stock: 'In Stock', price: 'R574,00' },
    { type: '22-250 (???g)', stock: 'No Stock', price: 'R0,00' },
    { type: '223 REM (55g SP)', stock: 'In Stock', price: 'R516,00' },
    { type: '223 REM (55g SP) P&P', stock: 'No Stock', price: 'R0,00' },
    { type: '243 WIN (100g SP)', stock: 'In Stock', price: 'R474,00' },
    { type: '243 (???g)', stock: 'No Stock', price: 'R0,00' },
    { type: '270 WIN (150g SP)', stock: 'In Stock', price: 'R816,00' },
    { type: '270 WIN (130g SP)', stock: 'In Stock', price: 'R832,00' },
    { type: '7x57 (???g)', stock: 'No Stock', price: 'R0,00' },
    { type: '300 WIN (180g)', stock: 'In Stock', price: 'R1214,00' },
    { type: '300 (???g)', stock: 'No Stock', price: 'R0,00' },
    { type: '303 (???g)', stock: 'No Stock', price: 'R0,00' },
    { type: '308 WIN (150g)', stock: 'In Stock', price: 'R654,00' },
    { type: '308 WIN (180g SP)', stock: 'In Stock', price: 'R674,00' },
    { type: '30-06 PRG (150g)', stock: 'In Stock', price: 'R652,00' },
    { type: '30-06 PRG (180g SP)', stock: 'In Stock', price: 'R672,00' },
    { type: '375 (???g)', stock: 'No Stock', price: 'R0,00' },
    { type: '12G - 7,5', stock: 'No Stock', price: 'R0,00' },
    { type: '12G - AAA', stock: 'No Stock', price: 'R0,00' },
    { type: '12G - SSG', stock: 'No Stock', price: 'R0,00' },
    { type: '410 Rounds', stock: 'No Stock', price: 'R0,00' },
    { type: '6.5 Rounds', stock: 'No Stock', price: 'R0,00' },
  ];

const AmmunitionPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Ammunition[]>(ammunitionData);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    if (term) {
      setFilteredData(
        ammunitionData.filter(ammo =>
          ammo.type.toLowerCase().includes(term)
        )
      );
    } else {
      setFilteredData(ammunitionData);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 pt-24 pb-24">
      <h1 className="text-3xl font-bold mb-6 text-center">Ammunition In Stock</h1>
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search ammunition..."
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-4 border-b">Type</th>
              <th className="py-3 px-4 border-b">Stock</th>
              <th className="py-3 px-4 border-b">Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((ammo, index) => (
              <tr key={index} className={`text-gray-700 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <td className="py-3 px-4 border-b">{ammo.type}</td>
                <td className="py-3 px-4 border-b">{ammo.stock}</td>
                <td className="py-3 px-4 border-b">{formatCurrency(ammo.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AmmunitionPage;
