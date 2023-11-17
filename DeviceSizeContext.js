// DeviceSizeContext.js
import React, { createContext, useState, useEffect } from 'react';
import { Dimensions, Platform } from 'react-native';

export const DeviceSizeContext = createContext();

const getDeviceSizeCategory = () => {
  const { height } = Dimensions.get('window');
  // Define height thresholds for different size categories
  if (height < 700) { // Adjust these numbers based on your requirements
    return 'S';
  } else if (height >= 700 && height < 800) {
    return 'M';
  } else if (height >= 800 && height < 1000) {
    return 'L';
  } else {
    return 'XL';
  }
};

export const DeviceSizeProvider = ({ children }) => {
  const [deviceSize, setDeviceSize] = useState(getDeviceSizeCategory());

  useEffect(() => {
    const updateLayout = () => {
      setDeviceSize(getDeviceSizeCategory());
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => Dimensions.removeEventListener('change', updateLayout);
  }, []);

  return (
    <DeviceSizeContext.Provider value={deviceSize}>
      {children}
    </DeviceSizeContext.Provider>
  );
};
