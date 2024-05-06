import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import { Button } from "../Button/Button";
import style from "./Card.module.css";

export const Card = ({ band }) => {
  const { id, image, name, genre, country } = band;
  const navigate = useNavigate();

  const onClickDetailsHandler = () => {
    navigate(`${ROUTES.details.replace(":id", id)}`);
  };

  return (
    <div className={`${style.card_container} md:max-w-2xl`}>
      <div className="md:flex">
        <div className={style.card_container_image}>
          <img className="md:h-full md:w-48" src={image} alt={name} />
        </div>

        <div className="ml-5">
          <p className={style.card_title}>{name}</p>
          <p className={style.card_text}>{genre}</p>
          <p className={style.card_text}>{country}</p>
          <div className="mt-10">
            <Button text="Mas Info" onClick={onClickDetailsHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};
