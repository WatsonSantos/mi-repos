"use client";

import { createContext, useContext, useState } from "react";

const NotFoundPageStatusContext = createContext({});

export const NotFoundPageStatusProvider = ({ children }) => {
  const [status, setStatus] = useState(0);

  return (
    <NotFoundPageStatusContext.Provider value={{ status, setStatus }}>
      {children}
    </NotFoundPageStatusContext.Provider>
  );
};

export const useNotFoundPageStatusContext = () =>
  useContext(NotFoundPageStatusContext);
