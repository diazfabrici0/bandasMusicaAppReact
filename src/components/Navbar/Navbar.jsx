import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";

export const Navbar = () => {
  const navigate = useNavigate();
  const onClickHomeHandler = () => {
    navigate(ROUTES.home);
  };
  return (
    <nav className="bg-card_extra border-b-4 border-white border-double py-2 p-6">
      <div className="text-5xl cursor-pointer">
        <FaHome onClick={onClickHomeHandler} />
      </div>
    </nav>
  );
};
