import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../Action/ModalAction";
import "./Modal.css";

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const { openClose, content } = modal;
  let modalInLineStyle;

  if (openClose === "open") {
    modalInLineStyle = { display: "block" };
  } else {
    modalInLineStyle = { display: "none" };
  }
  const closeModalHandler = () => {
    dispatch(openClose("close", ""));
  };
  return (
    <div className="site-modal" style={modalInLineStyle}>
      <div className="modal-content">
        <div className="col right">
          <span onClick={closeModalHandler} className="close">
            &times;
          </span>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
