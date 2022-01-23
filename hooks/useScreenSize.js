import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if(window){
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }
  }, []);
  useEffect(() => {
     setWidth(window.innerWidth);
  }, []);
  


  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return { width };
};

export default useScreenSize;
