import React, { useEffect, useState, useCallback } from "react";
import { supabase } from "../supabaseClient";
import ScopesModal from "./ScopesModal"; // Import the modal component for adding/editing scopes
import { ToastContainer, toast } from "react-toastify"; // Add toast notifications
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number; // Make id required
  model: string;
  type: string;
  tube: string;
  description: string;
  reticle: string;
  price: string;
}

const Scopes: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // Loading state for submitting

  // Fetch products from Supabase on component mount
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        toast.error("Error fetching products: " + error.message); // Improved error message
      } else {
        setProducts(data || []);
        setFilteredProducts(data || []);
      }
    } catch (error) {
      toast.error("Error fetching products.");
    } finally {
      setLoading(false);
    }
  };

  const checkUserAuth = async () => {
    const { data } = await supabase.auth.getUser();

    // Removed toast notification for error checking user authentication
    setIsLoggedIn(!!data.user);
  };

  useEffect(() => {
    fetchProducts();
    checkUserAuth();
  }, []);

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const term = event.target.value.toLowerCase();
      setSearchTerm(term);
      if (term) {
        setFilteredProducts(
          products.filter(
            (product) =>
              product.model.toLowerCase().includes(term) ||
              product.tube.toLowerCase().includes(term) ||
              product.description.toLowerCase().includes(term) ||
              product.reticle.toLowerCase().includes(term)
          )
        );
      } else {
        setFilteredProducts(products);
      }
    },
    [products]
  );

  const handleEdit = (product: Product) => {
    if (isLoggedIn) {
      setEditProduct(product);
      setIsModalOpen(true); // Open modal for editing
    } else {
      toast.error("You must be signed in to edit.");
    }
  };

  const handleSubmit = async (product: Product) => {
    setIsSubmitting(true); // Set submitting state
    if (
      !product.model ||
      !product.type ||
      !product.tube ||
      !product.description ||
      !product.reticle ||
      !product.price
    ) {
      toast.error("All fields are required.");
      setIsSubmitting(false); // Reset submitting state
      return;
    }

    try {
      if (product.id) {
        const { error } = await supabase
          .from("products")
          .update(product)
          .eq("id", product.id);

        if (error) {
          toast.error("Error updating product: " + error.message); // Improved error message
        } else {
          toast.success("Product updated successfully!");
          fetchProducts(); // Refresh data
        }
      } else {
        const { error } = await supabase.from("products").insert([product]);

        if (error) {
          toast.error("Error adding product: " + error.message); // Improved error message
        } else {
          toast.success("Product added successfully!");
          fetchProducts(); // Refresh data
        }
      }
    } catch (error) {
      toast.error("Error processing request.");
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div className="bg-white text-gray-800 py-24 px-6 sm:px-12 lg:px-24 pb-40">
      <h1 className="text-3xl font-bold mb-6 text-center">Scopes</h1>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => navigate("/gunshop/ammunition")} // Navigate to Ammunition page
          className="bg-red-500 text-white p-2 rounded-lg transition-transform transform hover:scale-105 hover:opacity-80 duration-300 hover:bg-stone-600"
        >
          Go to Ammunition
        </button>

        <button
          onClick={() => navigate("/gunshop/accessories")} // Navigate to Accessories page
          className="bg-red-500 text-white p-2 rounded-lg transition-transform transform hover:scale-105 hover:opacity-80 duration-300 hover:bg-stone-600"
        >
          Go to Accessories
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by model, tube, description, reticle..."
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-red-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-300 rounded-lg shadow-lg p-4"
              >
                <h2 className="font-semibold text-lg">{product.model}</h2>
                <p>
                  <strong>Type:</strong> {product.type}
                </p>
                <p>
                  <strong>Tube:</strong> {product.tube}
                </p>
                <p>
                  <strong>Description:</strong> {product.description}
                </p>
                <p>
                  <strong>Reticle:</strong> {product.reticle}
                </p>
                <p>
                  <strong>Price:</strong> {product.price}
                </p>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => handleEdit(product)}
                    className={`text-red-500 p-2 rounded-lg ${
                      isLoggedIn
                        ? "hover:underline"
                        : "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!isLoggedIn} // Disable for unauthorized users
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No scopes found.</p>
          )}
        </div>
      )}

      <button
        onClick={() => {
          setEditProduct(null);
          setIsModalOpen(true);
        }}
        className={`bg-red-500 text-white p-2 rounded-lg mt-4 transform transition-combined duration-300 ease-in-out ${
          isLoggedIn
            ? "hover:bg-stone-600 hover:scale-105 hover:opacity-90"
            : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!isLoggedIn}
      >
        Add New Scope
      </button>

      <ScopesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={editProduct}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting} // Pass submitting state to modal
      />

      <ToastContainer />
    </div>
  );
};

export default Scopes;
