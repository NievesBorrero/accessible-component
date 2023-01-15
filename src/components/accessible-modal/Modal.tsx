import { useEffect } from "react";

export const Modal = () => {
  useEffect(() => {
    console.log(document.activeElement);
  }, []);
  
  return <div></div>;
};
