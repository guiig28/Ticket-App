import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = ({ priority }) => {
  const icons = [];

  for (let i = 0; i < priority; i++) {
    icons.push(
      <FontAwesomeIcon icon={faFire} className="text-red-400" key={i} />
    );
  }
  return <div className="flex justify-start align-baseline">{icons}</div>;
};

export default PriorityDisplay;
