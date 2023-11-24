import React, { useState, useContext, ReactNode } from 'react';

interface AppContextProps {
  isSideBarOpen: boolean;
  openSideBar: () => void;
  closeSideBar: () => void;
}

const AppContext = React.createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };

  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  return (
    <AppContext.Provider value={{ isSideBarOpen, openSideBar, closeSideBar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within an AppProvider');
  }
  return context;
};

export { AppContext, AppProvider };
