import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import { Button, Slider, Subtitle, Title } from "../../components";

import style from "./Home.module.css";

export const Home = () => {
  const [bands, setBands] = useState([]);

  const navigate = useNavigate();

  const fecthBands = async () => {
    const response = await fetch("/mocks/bandas.json");
    const data = await response.json();
    setBands(data);
  };

  useEffect(() => {
    fecthBands();
  }, []);

  const onClickGaleryHandler = () => {
    navigate(ROUTES.galery);
  };

  if (bands.length === 0) return <div>Loading...</div>;

  return (
    <div className={style.home_container}>
      <Title text="Nombre Banda" />
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
