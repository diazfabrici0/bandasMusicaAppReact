import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaCircleArrowLeft } from "react-icons/fa6";

import { useBands } from "../../hook/useBands";

import { Loading, Title, Tooltip } from "../../components";
import { CardMember } from "./components/CardMember/CardMember";
import { CardDiscography } from "./components/CardDiscography/CardDiscography";

import style from "./Details.module.css";

export const Details = () => {
  const [band, setBand] = useState([]);
  const { bands, isLoading } = useBands();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const foundBand = bands.find((band) => band.id === id) || [];
    setBand(foundBand);
  }, [bands, id]);

  const onClickGoBbackHandler = () => {
    navigate(-1);
  };

  if (isLoading || band.length === 0)
    return (
      <div className="flex justify-center">
        <Loading text="Cargando..." />
      </div>
    );

  return (
    <div className={style.details_container}>
      <div className="absolute">
        <Tooltip message="volver a galeria">
          <FaCircleArrowLeft
            className="text-5xl ml-5 cursor-pointer  hover:text-red-700"
            onClick={onClickGoBbackHandler}
          />
        </Tooltip>
      </div>
      <div className="text-center">
        <Title text={band.name} />
      </div>
      {/* espacio para primeros datos */}
      <div className="flex flex-col justify-center p-10">
        <div className="flex flex-row gap-10">
          <div className="w-60">
            <img src={band.image} alt={band.name} className="w-full h-auto" />
          </div>
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="border-t-2 border-b-2 py-8">
              <p>{band.bibliography}</p>
            </div>
            <div className="flex space-x-10 justify-center mt-5">
              <p>Genero: {band.genre}</p>
              <div className="border-l-2 h-6"></div>
              <p>País: {band.country}</p>
              <div className="border-l-2 h-6"></div>
              <p>Año de Formación: {band.formation_year}</p>
            </div>
          </div>
        </div>
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
      {/* espacio para discografia*/}
      <div className={style.details_container_discography}>
        <p className={style.details_title}>DISCOGRAFIA</p>
        <div className="grid grid-cols-3 gap-5">
          {band.discography.map((disco, index) => (
            <CardDiscography discography={disco} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
