import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import AccessoryModal from "./AccessoryModal"; // Modal component for adding/editing accessories
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

interface Accessory {
  id?: number;
  name: string;
  price: string;
}

const Accessories: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [filteredAccessories, setFilteredAccessories] = useState<Accessory[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedAccessory, setSelectedAccessory] = useState<Accessory | null>(
    null
  );
  const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>(false); // State for user authentication

  // Fetch accessories from Supabase
  const fetchAccessories = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("accessories").select("*");

      if (error) {
        toast.error("Error fetching accessories.");
      } else {
        setAccessories(data || []);
        setFilteredAccessories(data || []);
      }
    } catch (error) {
      toast.error("Error fetching accessories.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching session:", error);
        setIsUserSignedIn(false);
      } else {
        setIsUserSignedIn(!!data?.session);
      }
    };

    fetchSession();
    fetchAccessories();
  }, []);

  // Handle search functionality
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    if (term) {
      setFilteredAccessories(
        accessories.filter((accessory) =>
          accessory.name.toLowerCase().includes(term)
        )
      );
    } else {
      setFilteredAccessories(accessories);
    }
  };

  // Handle edit functionality
  const handleEdit = (accessory: Accessory) => {
    if (isUserSignedIn) {
      setSelectedAccessory(accessory);
      setIsModalOpen(true);
    } else {
      toast.error("You must be signed in to edit.");
    }
  };

  // Handle form submission for adding or editing accessories
  const handleSubmit = async (accessory: Accessory) => {
    if (!accessory.name || !accessory.price) {
      toast.error("All fields are required.");
      return;
    }

    try {
      if (accessory.id) {
        const { error } = await supabase
          .from("accessories")
          .update({
            name: accessory.name,
            price: accessory.price,
          })
          .eq("id", accessory.id);

        if (error) {
          toast.error("Error updating accessory.");
        } else {
          toast.success("Accessory updated successfully!");
          fetchAccessories();
        }
      } else {
        const { error } = await supabase
          .from("accessories")
          .insert([accessory]);

        if (error) {
          toast.error("Error adding accessory.");
        } else {
          toast.success("Accessory added successfully!");
          fetchAccessories();
        }
      }
    } catch (error) {
      toast.error("Error processing request.");
    }
  };

  return (
    <div className="bg-white text-gray-800 py-24 px-6 sm:px-12 lg:px-24 pb-40">
      <h1 className="text-3xl font-bold mb-6 text-center">Accessories</h1>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => navigate("/gunshop/scopes")} // Navigate to Scopes page
          className="bg-red-500 text-white p-2 rounded-lg transition-transform transform hover:scale-105 hover:opacity-80 duration-300 hover:bg-stone-600"
        >
          Go to Scopes
        </button>

        <button
          onClick={() => navigate("/gunshop/ammunition")} // Navigate to Accessories page
          className="bg-red-500 text-white p-2 rounded-lg transition-transform transform hover:scale-105 hover:opacity-80 duration-300 hover:bg-stone-600"
        >
          Go to Ammunition
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for accessories..."
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-red-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          {filteredAccessories.length > 0 ? (
            <div className="block md:hidden">
              {/* Mobile View */}
              {filteredAccessories.map((accessory) => (
                <div
                  key={accessory.id}
                  className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-300"
                >
                  <h2 className="font-bold text-lg">{accessory.name}</h2>
                  <p>Price: R {accessory.price}</p>
                  <button
                    onClick={() => handleEdit(accessory)}
                    className={`mt-2 bg-red-500 text-white p-2 rounded-lg ${
                      isUserSignedIn
                        ? "hover:bg-stone-600 hover:scale-105"
                        : "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!isUserSignedIn}
                  >
                    Edit
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No accessories found.</p>
          )}

          <table className="min-w-full hidden md:table bg-white border border-gray-300 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-3 px-4 border-b">Name</th>
                <th className="py-3 px-4 border-b">Price</th>
                <th className="py-3 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAccessories.map((accessory, index) => (
                <tr
                  key={accessory.id}
                  className={`text-gray-700 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-4 border-b">{accessory.name}</td>
                  <td className="py-3 px-4 border-b">R {accessory.price}</td>
                  <td className="py-3 px-4 border-b">
                    <button
                      onClick={() => handleEdit(accessory)}
                      className={`text-red-500 p-2 rounded-lg ${
                        isUserSignedIn
                          ? "hover:underline"
                          : "opacity-50 cursor-not-allowed"
                      }`}
                      disabled={!isUserSignedIn} // Disable for unauthorized users
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button
        onClick={() => {
          setSelectedAccessory(null);
          setIsModalOpen(true);
        }}
        className={`bg-red-500 text-white p-2 rounded-lg mt-4 transform transition-all duration-300 ease-in-out ${
          isUserSignedIn
            ? "hover:bg-stone-600 hover:scale-105 hover:opacity-90"
            : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!isUserSignedIn} // Disable button if user is not signed in
      >
        Add New Accessory
      </button>

      <AccessoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        accessory={selectedAccessory}
        onSubmit={handleSubmit}
        isUserSignedIn={isUserSignedIn} // Pass authentication status to the modal
      />

      <ToastContainer />
    </div>
  );
};

export default Accessories;
