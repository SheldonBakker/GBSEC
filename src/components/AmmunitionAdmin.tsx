import React, { useState } from 'react';
import { formatCurrency } from './utils'; // Import the utility function
import { Ammunition } from './types'; // Import the interface

const initialData: Ammunition[] = [
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

const AmmunitionEdit: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredData, setFilteredData] = useState<Ammunition[]>(initialData);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [formData, setFormData] = useState<Ammunition | null>(null);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        setFilteredData(
            term
                ? initialData.filter(ammo => ammo.type.toLowerCase().includes(term))
                : initialData
        );
    };

    const handleEdit = (index: number) => {
        setEditingIndex(index);
        setFormData({ ...filteredData[index] });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => (prev ? { ...prev, [name]: value } : null));
    };

    const handleSave = () => {
        if (editingIndex !== null && formData) {
            const updatedData = [...filteredData];
            updatedData[editingIndex] = formData;
            setFilteredData(updatedData);
            setEditingIndex(null);
            setFormData(null);
        }
    };

    const handleAddNew = () => {
        if (formData) {
            setFilteredData([...filteredData, { ...formData, type: '', stock: '', price: '' }]);
            setFormData(null);
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
                            <th className="py-3 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((ammo, index) => (
                            <tr key={index} className={`text-gray-700 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                <td className="py-3 px-4 border-b">{ammo.type}</td>
                                <td className="py-3 px-4 border-b">{editingIndex === index ? (
                                    <input
                                        type="text"
                                        name="stock"
                                        value={formData?.stock}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded"
                                    />
                                ) : (
                                    ammo.stock
                                )}</td>
                                <td className="py-3 px-4 border-b">{editingIndex === index ? (
                                    <input
                                        type="text"
                                        name="price"
                                        value={formData?.price}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded"
                                    />
                                ) : (
                                    formatCurrency(ammo.price)
                                )}</td>
                                <td className="py-3 px-4 border-b">
                                    {editingIndex === index ? (
                                        <button onClick={handleSave} className="text-blue-600">Save</button>
                                    ) : (
                                        <button onClick={() => handleEdit(index)} className="text-blue-600">Edit</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h2 className="text-2xl font-bold mt-6">Add New Ammunition</h2>
            <div className="flex flex-col mb-4">
                <input
                    type="text"
                    name="type"
                    value={formData?.type || ''}
                    onChange={handleChange}
                    placeholder="Type"
                    className="mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="stock"
                    value={formData?.stock || ''}
                    onChange={handleChange}
                    placeholder="Stock"
                    className="mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="price"
                    value={formData?.price || ''}
                    onChange={handleChange}
                    placeholder="Price"
                    className="mb-2 p-2 border border-gray-300 rounded"
                />
                <button onClick={handleAddNew} className="bg-red-600 text-white p-2 rounded">Add Ammunition</button>
            </div>
        </div>
    );
};

export default AmmunitionEdit;
