import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import s from "./Modal.module.scss";

const Modal = ({ children, onClose, open }) =>
  open
    ? createPortal(
        <div className={s.ModalWrapper}>
            <div className={s.close} onClick={onClose}>Close</div>
          <div className={s.ModalInner}>
            {children}
          </div>
        </div>,
        document.body
      )
    : null;

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.number,
    PropTypes.element
  ]),
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool
};

Modal.defaultProps = {
  children: "TEXT"
};

export default Modal;
