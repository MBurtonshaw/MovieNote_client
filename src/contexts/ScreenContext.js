import React, { createContext, useState, useEffect } from "react";

export const ScreenContext = createContext();

export const ScreenProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const value = {
    width,
  };

  return <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>;
};