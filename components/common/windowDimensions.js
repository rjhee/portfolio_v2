import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } =
      typeof window !== 'undefined' ? window : false;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowDimensions;
}
