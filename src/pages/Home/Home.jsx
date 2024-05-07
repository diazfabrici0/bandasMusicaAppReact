import { useNavigate } from "react-router-dom";
import { useBands } from "../../hook/useBands";
import { ROUTES } from "../../const/routes";
import { Button, Loading, Slider, Subtitle, Title } from "../../components";

import style from "./Home.module.css";

export const Home = () => {
  const { bands, isLoading } = useBands();

  const navigate = useNavigate();

  const onClickGaleryHandler = () => {
    navigate(ROUTES.galery);
  };

  if (isLoading)
    return (
      <div className="flex justify-center">
        <Loading text="Cargando..." />
      </div>
    );

  return (
    <div className={style.home_container}>
      <Title text="Bienvenido" />
      <Subtitle
        text="Explora el emocionante mundo de la música con nosotros. En nuestro
          sitio, encontrarás una colección diversa de bandas musicales, tanto
          nacionales como internacionales, que han dejado una marca indeleble en
          la historia de la música."
      />
      <Subtitle text="¡Únete a nosotros y sumérgete en el fascinante universo de la música!" />
      <Slider bands={bands} />
      <Button text="Ingresar" onClick={onClickGaleryHandler} />
    </div>
  );
};
