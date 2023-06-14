import React, { useEffect } from "react";
import "./styles.scss";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    textAlign: "center",
    padding: 0,
    margin: 0,
    width: "max-content",
    transform: "translate(-50%, -50%)",
  },
};

const ModalComponent = ({ isOpen, changeIsOpen, modalImgSrc }) => {
  function closeModal() {
    changeIsOpen(false);
  }

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <img
          className="ReactModal__Pic"
          style={{ maxHeight: "80%" }}
          src={modalImgSrc}
          alt=""
        />
        <div onClick={closeModal} className="ReactModal__Close">
          <img src="cross.svg" alt="" />
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
