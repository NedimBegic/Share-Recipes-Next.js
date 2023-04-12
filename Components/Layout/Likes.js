import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as starS } from "@fortawesome/free-solid-svg-icons";
import { faStar as starR } from "@fortawesome/free-regular-svg-icons";
library.add(starS, starR);

const Likes = (props) => {
  // avarage amount of likes
  let likes = Math.round(
    props.likes.reduce((x, y) => x + y, 0) / props.likes.length
  );
  if (likes == 3) {
    return (
      <span>
        <FontAwesomeIcon icon={starS} style={{ color: "gold" }} />
        <FontAwesomeIcon icon={starS} style={{ color: "gold" }} />
        <FontAwesomeIcon icon={starS} style={{ color: "gold" }} />
      </span>
    );
  } else if (likes == 2) {
    return (
      <span>
        <FontAwesomeIcon icon={starS} style={{ color: "gold" }} />
        <FontAwesomeIcon icon={starS} style={{ color: "gold" }} />
        <FontAwesomeIcon icon={starR} style={{ color: "gold" }} />
      </span>
    );
  } else if (likes == 1) {
    <span>
      <FontAwesomeIcon icon={starS} style={{ color: "gold" }} />
      <FontAwesomeIcon icon={starR} style={{ color: "gold" }} />
      <FontAwesomeIcon icon={starR} style={{ color: "gold" }} />
    </span>;
  } else {
    return (
      <span>
        <FontAwesomeIcon icon={starR} style={{ color: "gold" }} />
        <FontAwesomeIcon icon={starR} style={{ color: "gold" }} />
        <FontAwesomeIcon icon={starR} style={{ color: "gold" }} />
      </span>
    );
  }
};

export default Likes;
