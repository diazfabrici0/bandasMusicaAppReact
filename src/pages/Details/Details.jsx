import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Title } from "../../components";
import { CardMember } from "./components/CardMember/CardMember";
import { CardDiscography } from "./components/CardDiscography/CardDiscography";

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
    <div className="mt-10">
      <div className="text-center">
        <Title text={band.name} />
      </div>
      <div className="flex justify-center">
        <img src={band.image} alt={band.name} />
      </div>
      {/* espacio para primeros datos */}
      <div className="text-center font-Nunito py-3 text-lg tracking-wide">
        <p>
          <span className="font-bold uppercase">Genero:</span> {band.genre}
        </p>
        <p>
          <span className="font-bold uppercase">Año de Formación:</span>{" "}
          {band.formation_year}
        </p>
        <p>
          <span className="font-bold uppercase">Pais:</span> {band.country}
        </p>
      </div>
      {/* espacio para miembros */}
      <div className="bg-[#110814] items-center flex flex-col gap-10 px-6 py-8">
        <p className="font-Montserrat font-bold text-lg">INTEGRANTES</p>
        <div className="flex flex-row">
          {band.members.map((member, index) => (
            <CardMember memberData={member} key={index} />
          ))}
        </div>
      </div>

      {/* espacio para discografia #5c1a1c - #090504*/}
      <div className="bg-[#5c1a1c] items-center flex flex-col gap-10 px-6 py-8">
        <p className="font-Montserrat font-bold text-lg">DISCOGRAFIA</p>
        <div className="grid grid-cols-3 gap-5">
          {band.discography.map((disco, index) => (
            <CardDiscography discography={disco} />
          ))}
        </div>
      </div>
    </div>
  );
};
