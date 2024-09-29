import { createContext, useContext, useState } from 'react';

const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [roofLength, setRoofLength] = useState(5);
  const [roofWidth, setRoofWidth] = useState(3);

  return (
    <ConfiguratorContext.Provider
      value={{
        roofLength,
        setRoofLength,
        roofWidth,
        setRoofWidth,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
