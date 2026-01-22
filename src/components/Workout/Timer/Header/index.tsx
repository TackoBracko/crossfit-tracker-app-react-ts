import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import Button from "../../../Button";
import { ArrowLeft } from "lucide-react";

export default function TimerHeader() {
  const navigate = useNavigate();

  return (
    <header className={classes.timerHeader}>
      <Button
        variation="secondary"
        iconLeft={<ArrowLeft />}
        onClick={() => navigate(-1)}
      />
      <img />
    </header>
  );
}
