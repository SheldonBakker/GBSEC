import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import AmmunitionModal from "./AmmunitionModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

interface Ammunition {
  id?: number;
  type: string;
  stock: string;
  price: string;
}

const AmmunitionPage: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [ammunitionData, setAmmunitionData] = useState<Ammunition[]>([]);
  const [filteredData, setFilteredData] = useState<Ammunition[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedAmmo, setSelectedAmmo] = useState<Ammunition | null>(null);
  const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>(false);

  const fetchAmmunitionData = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("ammunition").select("*");

      if (error) {
        toast.error("Error fetching ammunition data.");
      } else {
        setAmmunitionData(data || []);
        setFilteredData(data || []);
      }
    } catch (error) {
      toast.error("Error fetching ammunition data.");
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
    fetchAmmunitionData();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    if (term) {
      setFilteredData(
        ammunitionData.filter((ammo) => ammo.type.toLowerCase().includes(term))
      );
    } else {
      setFilteredData(ammunitionData);
    }
  };

  const handleEdit = (ammo: Ammunition) => {
    if (isUserSignedIn) {
      setSelectedAmmo(ammo);
      setIsModalOpen(true);
    } else {
      toast.error("You must be signed in to edit.");
    }
  };

  const handleSubmit = async (ammo: Ammunition) => {
    if (!ammo.type || !ammo.stock || !ammo.price) {
      toast.error("All fields are required.");
      return;
    }

    try {
      if (ammo.id) {
        const { error } = await supabase
          .from("ammunition")
          .update({
            type: ammo.type,
            stock: ammo.stock,
            price: ammo.price,
          })
          .eq("id", ammo.id);

        if (error) {
          toast.error("Error updating ammunition.");
        } else {
          toast.success("Ammunition updated successfully!");
          fetchAmmunitionData();
        }
      } else {
        const { error } = await supabase.from("ammunition").insert([ammo]);

        if (error) {
          toast.error("Error adding ammunition.");
        } else {
          toast.success("Ammunition added successfully!");
          fetchAmmunitionData();
        }
      }
    } catch (error) {
      toast.error("Error processing request.");
    }
  };

  return (
    <div className="bg-white text-gray-800 py-24 px-6 sm:px-12 lg:px-24 pb-40">
      <h1 className="text-3xl font-bold mb-6 text-center">Ammunition</h1>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => navigate("/gunshop/scopes")} // Navigate to Scopes page
          className="bg-red-500 text-white p-2 rounded-lg transition-transform transform hover:scale-105 hover:opacity-80 duration-300 hover:bg-stone-600"
        >
          Go to Scopes
        </button>

        <button
          onClick={() => navigate("/gunshop/accessories")} // Navigate to Accessories page
          className="bg-red-500 text-white p-2 rounded-lg transition-transform transform hover:scale-105 hover:opacity-80 duration-300 hover:bg-stone-600"
        >
          Go to Accessories
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search ammunition..."
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-red-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          {filteredData.length > 0 ? (
            <div className="block md:hidden">
              {/* Mobile View */}
              {filteredData.map((ammo) => (
                <div
                  key={ammo.id}
                  className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-300"
                >
                  <h2 className="font-bold text-lg">{ammo.type}</h2>
                  <p>Stock: {ammo.stock}</p>
                  <p>Price: R {ammo.price}</p>
                  <button
                    onClick={() => handleEdit(ammo)}
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
            <p className="text-center text-gray-500">No ammunition found.</p>
          )}

          <table className="min-w-full hidden md:table bg-white border border-gray-300 rounded-lg shadow-lg">
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
                <tr
                  key={ammo.id}
                  className={`text-gray-700 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-4 border-b">{ammo.type}</td>
                  <td
                    className={`py-3 px-4 border-b ${
                      ammo.stock.toLowerCase() === "no stock"
                        ? "text-red-700 font-semibold"
                        : Number(ammo.stock) < 10
                        ? "text-yellow-500 font-semibold"
                        : ""
                    }`}
                  >
                    {ammo.stock}
                  </td>
                  <td className="py-3 px-4 border-b">R {ammo.price}</td>
                  <td className="py-3 px-4 border-b">
                    <button
                      onClick={() => handleEdit(ammo)}
                      className={`text-red-500 p-2 rounded-lg ${
                        isUserSignedIn
                          ? "hover:underline"
                          : "opacity-50 cursor-not-allowed"
                      }`}
                      disabled={!isUserSignedIn}
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

      {/* Add New Ammunition Button */}
      <button
        onClick={() => {
          setSelectedAmmo(null);
          setIsModalOpen(true);
        }}
        className={`bg-red-500 text-white p-2 rounded-lg mt-4 transform transition-all duration-300 ease-in-out ${
          isUserSignedIn
            ? "hover:bg-stone-600 hover:scale-105 hover:opacity-90"
            : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!isUserSignedIn}
      >
        Add New Ammunition
      </button>

      {/* Modal for Adding/Editing Ammunition */}
      <AmmunitionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ammunition={selectedAmmo}
        onSubmit={handleSubmit}
        isUserSignedIn={isUserSignedIn}
      />

      <ToastContainer />
    </div>
  );
};

export default AmmunitionPage;
