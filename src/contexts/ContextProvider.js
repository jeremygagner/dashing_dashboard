import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  cart: false,
  chat: false,
  notification: false,
  userProfile: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [activeThemeSettings, setActiveThemeSettings] = useState(false);
  const [currentColor, setCurrentColor] = useState("#0080FF");
  const [currentMode, setCurrentMode] = useState("Light");
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked) => {
    setIsClicked({ ...isClicked, [clicked]: true });
  };

  const handleClose = (clicked) => {
    setIsClicked({ ...isClicked, [clicked]: false });
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("themeColor", color);
    console.log(currentColor);
    setActiveThemeSettings(false);
  };

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setActiveThemeSettings(false);
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        activeThemeSettings,
        setActiveThemeSettings,
        currentColor,
        setCurrentColor,
        setColor,
        currentMode,
        setCurrentMode,
        setMode,
        isClicked,
        setIsClicked,
        handleClick,
        handleClose,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
