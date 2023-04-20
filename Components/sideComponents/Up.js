import styleUp from "./Up.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Up = (props) => {
  return (
    <button onClick={props.onClick} className={styleUp.up} type="button">
      <FontAwesomeIcon className={styleUp.icon} icon={faCircleUp} />
    </button>
  );
};

export default Up;
