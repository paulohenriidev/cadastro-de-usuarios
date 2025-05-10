import React, { useEffect, useState } from "react";
import { Toast } from "./styles";

const ToastNotify = ({ message, show, duration = 3000, onClose }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (show) {
      setHide(false);

      const timer = setTimeout(() => {
        setHide(true);
        setTimeout(() => {
          onClose();
        }, 400);
      }, duration); 
      

      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  //Impede renderização do Toast se `show` for falso
  if (!show) return null;

  return (
    <Toast className={`${hide ? "hide" : ""}`}>
      {message}
    </Toast>
  );
};

export default ToastNotify;
