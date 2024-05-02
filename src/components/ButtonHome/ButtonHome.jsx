import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


const ButtonHome = () => {
    return (
      <Link to="/">
          <FaHome size={30} />
      </Link>
    );
  }

export default ButtonHome