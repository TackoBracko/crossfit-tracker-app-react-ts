import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

export interface ModalRef {
  open: () => void;
  close: () => void;
}

interface ModalProps {
  children: React.ReactNode;
}

const Modal = forwardRef<ModalRef, ModalProps>(function Modal(
  { children },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current?.showModal();
    },
    close() {
      dialog.current?.close();
    },
  }));

  return createPortal(
    <dialog ref={dialog} className="modal">
      <div className={classes.modalWrapper}>
        <div className={classes.modalContent}>{children}</div>
      </div>
    </dialog>,
    document.body
  );
});

export default Modal;
