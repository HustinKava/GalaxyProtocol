import React from 'react';
import { CgClose } from 'react-icons/cg';

export const Modal = ({ modalContent, closeModal }) => {
  return (
    <>
      <div className="modal">
        <div
          className="modal__content-container"
          tabIndex={0}
          onBlur={() => closeModal(false)}
        >
          <div className="modal__content">
            <CgClose
              onClick={() => closeModal(false)}
              className="modal__close"
            />
            {modalContent}
          </div>
          <button onClick={() => closeModal(false)} className="modal__button">
            close
          </button>
        </div>
      </div>
    </>
  );
};
