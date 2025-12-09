import type { ReactNode } from "react";
import classes from "./LayoutForModal.module.css";

interface LayoutForModalProps {
  children: ReactNode;
}

export default function LayoutForModal({ children }: LayoutForModalProps) {
  return (
    <div className={classes.modalWrapper}>
      <div className={classes.modalContent}>{children}</div>
    </div>
  );
}
