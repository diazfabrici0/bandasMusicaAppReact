import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


const ButtonHome = () => {
    return (
      <Link to="/">
        <button>
          <FaHome size={30} />
        </button>
      </Link>
    );
  }

export default ButtonHome