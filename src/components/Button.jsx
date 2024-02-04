// Start coding here


import React from "react";
import PropTypes from "prop-types";
import "./Button.css"; // ไฟล์ CSS สำหรับ Button Component

function Button({ type }) {
  const buttonClass = type === "primary" ? "primary-button" : "secondary-button";

  return (
    <button className={buttonClass}>
      {/* ใส่เนื้อหาของปุ่มตามที่ต้องการ */}
      {type === "primary" ? "Primary Button" : "Secondary Button"}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]).isRequired,
};

export default Button;

