import React, { useState, useEffect } from "react";

interface Ammunition {
  id?: number;
  type: string;
  stock: string;
  price: string;
}

interface AmmunitionModalProps {
  isOpen: boolean;
  onClose: () => void;
  ammunition: Ammunition | null;
  onSubmit: (ammo: Ammunition) => void;
  isUserSignedIn: boolean; // Add this line
}

const AmmunitionModal: React.FC<AmmunitionModalProps> = ({
  isOpen,
  onClose,
  ammunition,
  onSubmit,
  isUserSignedIn, // Add this line to receive the prop
}) => {
  const [type, setType] = useState<string>("");
  const [stock, setStock] = useState<string>("In Stock"); // Default to "In Stock"
  const [price, setPrice] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (ammunition) {
      setType(ammunition.type);
      setStock(ammunition.stock);
      setPrice(ammunition.price.replace("R", "").trim()); // Set price without the 'R'
    } else {
      setType("");
      setStock("In Stock"); // Reset to default
      setPrice("");
    }
  }, [ammunition]);

  const validateForm = (): boolean => {
    if (!type || !stock || !price) {
      setError("All fields are required.");
      return false;
    }

    const priceNum = Number(price.replace(",", ".").trim()); // Replace commas with dots for number validation
    if (isNaN(priceNum) || priceNum <= 0) {
      setError("Price must be a valid number greater than 0.");
      return false;
    }

    setError(""); // Clear error if validation passes
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      await onSubmit({
        id: ammunition?.id,
        type,
        stock,
        price: `R${price.replace("R", "").trim()}`, // Ensure price starts with 'R'
      });
      onClose(); // Close the modal after submitting
    } catch (error) {
      setError("Error submitting form."); // You can also log the actual error for debugging
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {ammunition ? "Edit Ammunition" : "Add New Ammunition"}
        </h2>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Type
          </label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter ammunition type"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Stock
          </label>
          <select
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="In Stock">In Stock</option>
            <option value="No Stock">No Stock</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Price (R)
          </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter price"
            required
          />
        </div>

        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className={`bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 ${
              loading || !isUserSignedIn ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading || !isUserSignedIn}
            title={!isUserSignedIn ? "You must be signed in to save." : ""}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmmunitionModal;
