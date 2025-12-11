import { createContext, useState, useContext } from "react";

const BudgetContext = createContext();
export function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);

  const value = {
    budgetMode,
    setBudgetMode,
  };

  return (
    <BudgetContext.Provider value={value}>
      {children}
    </BudgetContext.Provider>
  );
}

export function useBudget() {
  return useContext(BudgetContext);
}
