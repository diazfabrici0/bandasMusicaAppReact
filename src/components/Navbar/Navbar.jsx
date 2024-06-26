import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";

import style from "./Navbar.module.css";
import { Tooltip } from "../Tooltip/Tooltip";

export const Navbar = () => {
  const navigate = useNavigate();
  const onClickHomeHandler = () => {
    navigate(ROUTES.home);
  };
  return (
    <nav className={style.navbar_container}>
      <div className={style.navbar_button_container}>
        <Tooltip message="Home">
          <FaHome className="cursor-pointer" onClick={onClickHomeHandler} />
        </Tooltip>
      </div>
    </nav>
  );
};
