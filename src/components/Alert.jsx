
import React from "react";
import PropTypes from "prop-types";
import infoIcon from "./icons/info-icon.png";
import successIcon from "./icons/success-icon.png";
import warningIcon from "./icons/warning-icon.png";
import errorIcon from "./icons/error-icon.png";
import "./Alert.css";

function Alert({ type }) {
  let iconSource;

  switch (type) {
    case "info":
      iconSource = infoIcon;
      break;
    case "success":
      iconSource = successIcon;
      break;
    case "warning":
      iconSource = warningIcon;
      break;
    case "error":
      iconSource = errorIcon;
      break;
    default:
      break;
  }

  return (
    <div className={`alert ${type}`}>
      <img src={iconSource} alt={`${type} icon`} />
      <p>{`This is ${type} alert.`}</p>
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(["info", "success", "warning", "error"]).isRequired,
};

export default Alert;
