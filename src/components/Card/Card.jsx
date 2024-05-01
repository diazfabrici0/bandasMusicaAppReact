import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import { Button } from "../Button/Button";

export const Card = ({ band }) => {
  const { id, image, name, genre, country } = band;
  const navigate = useNavigate();

  const onClickDetailsHandler = () => {
    navigate(`${ROUTES.details.replace(":id", id)}`);
  };

  return (
    <div className="bg-card flex flex-row gap-10 m-10 rounded-lg px-6 py-8 shadow-lg shadow-white border-2 border-white">
      <div className="flex items-center">
        <img src={image} alt={name} />
      </div>

      <div className="">
        <p className="font-Montserrat text-2xl font-bold">{name}</p>
        <p className="font-Nunito text-lg">{genre}</p>
        <p className="font-Nunito text-lg">{country}</p>
        <div className="mt-10">
          <Button text="Mas Info" onClick={onClickDetailsHandler} />
        </div>
      </div>
    </div>
  );
};
