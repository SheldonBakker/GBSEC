function CallButton() {
    return (
      <a
        href="tel:+27218560214" // Format phone number as per international standards
        aria-label="Call us at 021 856 0214"
        className="bg-red-600 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
      >
        Get in Touch with Us
      </a>
    );
  }
  
  export default CallButton;
  