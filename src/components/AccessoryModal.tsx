import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Accessory {
  id?: number;
  name: string;
  price: string;
}

interface AccessoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  accessory: Accessory | null;
  onSubmit: (accessory: Accessory) => Promise<void>; // Change to async
  isUserSignedIn: boolean; // Added prop for sign-in status
}

const AccessoryModal: React.FC<AccessoryModalProps> = ({
  isOpen,
  onClose,
  accessory,
  onSubmit,
  isUserSignedIn, // Destructure the new prop
}) => {
  const [newAccessory, setNewAccessory] = useState<Accessory>({
    name: "",
    price: "R", // Initialize price with "R"
  });

  useEffect(() => {
    if (accessory) {
      setNewAccessory(accessory);
    } else {
      setNewAccessory({ name: "", price: "R" }); // Reset price to "R" when adding a new accessory
    }
  }, [accessory]);

  const handleSubmit = async () => {
    if (!isUserSignedIn) {
      toast.error("You must be signed in to add or edit accessories.");
      return;
    }
    await onSubmit(newAccessory); // Call the onSubmit function asynchronously
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers, commas, full stops, and spaces while keeping "R" at the start
    const numberPart = value.replace(/[^0-9., ]/g, ""); // Allow numbers, commas, full stops, and spaces
    setNewAccessory({ ...newAccessory, price: `R${numberPart}` });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <h2 className="text-xl font-bold mb-4">
          {accessory ? "Edit Accessory" : "Add Accessory"}
        </h2>
        <input
          type="text"
          placeholder="Name"
          className="p-2 w-full border rounded-lg mb-4"
          value={newAccessory.name}
          onChange={(e) =>
            setNewAccessory({ ...newAccessory, name: e.target.value })
          }
          disabled={!isUserSignedIn} // Disable if not signed in
        />
        <input
          type="text"
          placeholder="Price"
          className="p-2 w-full border rounded-lg mb-4"
          value={newAccessory.price}
          onChange={handlePriceChange}
          disabled={!isUserSignedIn} // Disable if not signed in
        />
        <button
          onClick={handleSubmit}
          className={`w-full p-2 ${
            isUserSignedIn ? "bg-red-500" : "bg-gray-500"
          } text-white rounded-lg transition-transform transform hover:scale-105 hover:opacity-90 ${
            isUserSignedIn ? "hover:bg-stone-700" : ""
          }`}
          disabled={!isUserSignedIn} // Disable button if not signed in
        >
          {accessory ? "Update Accessory" : "Add Accessory"}
        </button>
        <button
          onClick={onClose}
          className="w-full p-2 mt-2 bg-gray-300 text-black rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AccessoryModal;
