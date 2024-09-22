import React, { useEffect } from "react";
import "./Modal.css";

export function Modal({ children, show, onClose }) {
  useEffect(() => {
    if (show) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup function
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="modal-background">
      <section className="modal-main">
        {children}
        <button className="close" type="button" onClick={onClose}>
          &#x2715;
        </button>
      </section>
    </div>
  );
}
