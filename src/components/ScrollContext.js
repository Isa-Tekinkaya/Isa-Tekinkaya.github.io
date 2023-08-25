import React, { createContext, useContext } from "react";

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

export function ScrollProvider({ children }) {
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <ScrollContext.Provider value={scrollToRef}>
      {children}
    </ScrollContext.Provider>
  );
}