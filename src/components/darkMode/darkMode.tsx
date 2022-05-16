import { useState } from "react";
import { useDarkMode } from "next-dark-mode";

const DarkMode = () => {
  const {
    autoModeActive,
    autoModeSupported,
    darkModeActive,
    switchToAutoMode,
    switchToDarkMode,
    switchToLightMode,
  } = useDarkMode();
  return (
    <>
      <button onClick={switchToDarkMode}>Tekan</button>
    </>
  );
};

export default DarkMode;
