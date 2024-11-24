import React from "react";
import Modal from "react-modal";
import { Product } from "../Product";

interface ScopesModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onSubmit: (product: Product) => Promise<void>;
  isSubmitting: boolean;
}

const ScopesModal: React.FC<ScopesModalProps> = ({
  isOpen,
  onClose,
  product,
  onSubmit,
  isSubmitting,
}) => {
  const [formData, setFormData] = React.useState<Product>({
    id: 0,
    model: "",
    type: "",
    tube: "",
    description: "",
    reticle: "",
    price: "R", // Initialize price with "R"
  });

  React.useEffect(() => {
    if (product) {
      setFormData(product);
    } else {
      setFormData({
        id: 0,
        model: "",
        type: "",
        tube: "",
        description: "",
        reticle: "",
        price: "R", // Reset price to "R" when adding a new product
      });
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "price") {
      // Allow only numbers, commas, full stops, and spaces while keeping "R" at the start
      const numberPart = value.replace(/[^0-9., ]/g, ""); // Allow numbers, commas, full stops, and spaces
      setFormData({ ...formData, [name]: `R${numberPart}` });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
      onClose();
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          width: "400px",
          maxWidth: "90%",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          backgroundColor: "white",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      }}
    >
      <h2 className="text-xl font-bold mb-4 text-center text-black">
        {product ? "Edit Scope" : "Add New Scope"}
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          name="model"
          value={formData.model}
          onChange={handleChange}
          placeholder="Model"
          required
          aria-label="Model"
          className="border rounded-lg p-2 mb-4 w-full focus:ring-2 focus:ring-yellow-500 transition duration-200"
        />
        <input
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Type"
          required
          aria-label="Type"
          className="border rounded-lg p-2 mb-4 w-full focus:ring-2 focus:ring-yellow-500 transition duration-200"
        />
        <input
          name="tube"
          value={formData.tube}
          onChange={handleChange}
          placeholder="Tube"
          required
          aria-label="Tube"
          className="border rounded-lg p-2 mb-4 w-full focus:ring-2 focus:ring-yellow-500 transition duration-200"
        />
        <input
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
          aria-label="Description"
          className="border rounded-lg p-2 mb-4 w-full focus:ring-2 focus:ring-yellow-500 transition duration-200"
        />
        <input
          name="reticle"
          value={formData.reticle}
          onChange={handleChange}
          placeholder="Reticle"
          required
          aria-label="Reticle"
          className="border rounded-lg p-2 mb-4 w-full focus:ring-2 focus:ring-yellow-500 transition duration-200"
        />
        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price (e.g., R100.00)"
          required
          aria-label="Price"
          className="border rounded-lg p-2 mb-4 w-full focus:ring-2 focus:ring-yellow-500 transition duration-200"
        />

        <button
          type="submit"
          className={`bg-red-500 text-white p-2 rounded-lg mt-2 w-full transition duration-200 
            ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-stone-600 transform hover:scale-105"
            }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : product ? "Update" : "Add"}
        </button>
      </form>
      <button
        onClick={onClose}
        className="text-red-500 mt-4 w-full text-center hover:underline hover:text-red-600 transition duration-200"
      >
        Close
      </button>
    </Modal>
  );
};

export default ScopesModal;
