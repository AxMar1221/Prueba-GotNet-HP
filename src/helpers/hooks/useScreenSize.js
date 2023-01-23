import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [width, setWidth] = useState(undefined);
  useEffect(() => {
    const handleReSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleReSize);
    //Call setState away so state gets updated with initial window size
    handleReSize();
    return () => window.removeEventListener("resize", handleReSize);
  }, []);
  return width;
};
