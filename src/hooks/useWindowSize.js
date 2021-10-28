import { useEffect, useState } from 'react';

export const useWindowHeight = () => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  const handleWindowResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    return () => window.addEventListener('resize', handleWindowResize);
  }, []);

  return dimensions;
};
