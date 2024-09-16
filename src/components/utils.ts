// utils.ts
export const formatCurrency = (amount: string): string => {
    // Assuming the amount is in the format 'R1234,56'
    return amount.replace('.', ','); // Replace dot with comma if needed
  };
  