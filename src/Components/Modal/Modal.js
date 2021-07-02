import React from 'react';

export const Modal = ({ modalContent, closeModal }) => {

  return (
    <>  
        <div className="modal">
          <div
            className="modal__content-container"
            tabIndex={0}
            onBlur={() => closeModal(false)}
          >
            <div className="modal__text">{modalContent}</div>
            <button
              onClick={() => closeModal(false)}
              className="modal__button"
            >
              close
            </button>
          </div>
        </div>
    </>
  );
};
