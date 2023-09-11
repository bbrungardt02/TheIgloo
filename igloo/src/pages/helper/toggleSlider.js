import React from "react";
import PropTypes from "prop-types";

const ToggleSlider = ({ isAdmin, onClick }) => (
  <button
    className={`${
      isAdmin ? "bg-green-500" : "bg-gray-400"
    } relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none`}
    onClick={onClick}
  >
    <div
      className={`${
        isAdmin ? "translate-x-8" : "translate-x-0"
      } absolute inset-y-0 w-8 h-8 bg-white rounded-full transform transition-transform duration-300`}
    ></div>
  </button>
);

ToggleSlider.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToggleSlider;
