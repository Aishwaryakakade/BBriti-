import React from "react";

import { Link } from "react-router-dom";
const Email = ({ mailto, label }) => {
  return (
    <Link
      to="dummy@bbriti.com"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default Email;
