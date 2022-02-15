import ReactDOM from "react-dom";
import "./Modal.css";
const Modal = ({ children, isOpen, closeModal }) => {
  function stopPropagation(e) {
    e.stopPropagation();
  }
  return ReactDOM.createPortal(
    <>
      <article
        onClick={closeModal}
        className={`article-container-modal ${isOpen && "is-open"}`}
      >
        <div onClick={stopPropagation} className="div-modal">
          <button onClick={closeModal}>X</button>
          {children}
        </div>
      </article>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
