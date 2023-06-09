import { useState, useEffect } from "react";

export default () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // This section is important to prevent memory leak
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
