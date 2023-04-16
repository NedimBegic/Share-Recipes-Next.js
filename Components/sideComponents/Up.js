import styleUp from "./Up.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

const Up = (props) => {
  const handleScroll = () => {
    props.element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button className={styleUp.up} onClick={handleScroll} type="button">
      <FontAwesomeIcon className={styleUp.icon} icon={faCircleUp} />
    </button>
  );
};

export default Up;
