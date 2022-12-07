import React, { useEffect, useState } from 'react';
import { ResponsiveContainer } from 'recharts';

function CustomResponsiveContainer({ children }) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);
  return (
    <>
      {windowHeight >= 616 && windowWidth >= 616 ? (
        <div style={{ width: '100%', height: '100%' }}>
          <ResponsiveContainer>{children}</ResponsiveContainer>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
export default CustomResponsiveContainer;
