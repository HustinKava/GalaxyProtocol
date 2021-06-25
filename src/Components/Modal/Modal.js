import React, { useState } from 'react';

export const Modal = ({ modalContent }) => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal ? (
        <div className="modal">
          <div className="modal__content-container">
            <div className="modal__text">{modalContent}</div>
            <button
              onClick={() => setShowModal(false)}
              className="modal__button"
            >
              close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
