import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Title } from "../../components";
import { CardMember } from "./components/CardMember/CardMember";
import { CardDiscography } from "./components/CardDiscography/CardDiscography";

import style from "./Details.module.css";

export const Details = () => {
  const [band, setBand] = useState([]);
  const { id } = useParams();

  const fecthBandById = async (id) => {
    const response = await fetch(`/mocks/bandas.json`);
    const data = await response.json();

    const band = data.find((band) => band.id === id);
    setBand(band);
  };

  useEffect(() => {
    fecthBandById(id);
  }, [id]);

  if (band.length === 0) return <div>Loading...</div>;

  return (
    <div className={style.details_container}>
      <div className="text-center">
        <Title text={band.name} />
      </div>
      <div className="flex justify-center">
        <img src={band.image} alt={band.name} />
      </div>
      {/* espacio para primeros datos */}
      <div className={style.details_container_info}>
        <p>
          <span className={style.details_text}>Genero:</span> {band.genre}
        </p>
        <p>
          <span className={style.details_text}>Año de Formación:</span>{" "}
          {band.formation_year}
        </p>
        <p>
          <span className={style.details_text}>Pais:</span> {band.country}
        </p>
      </div>
      {/* espacio para miembros */}
      <div className={style.details_container_members}>
        <p className={style.details_title}>INTEGRANTES</p>
        <div className="flex flex-row">
          {band.members.map((member, index) => (
            <CardMember memberData={member} key={index} />
          ))}
        </div>
      </div>

      {/* espacio para discografia #5c1a1c - #090504*/}
      <div className={style.details_container_discography}>
        <p className={style.details_title}>DISCOGRAFIA</p>
        <div className="grid grid-cols-3 gap-5">
          {band.discography.map((disco, index) => (
            <CardDiscography discography={disco} />
          ))}
        </div>
      </div>
    </div>
  );
};
