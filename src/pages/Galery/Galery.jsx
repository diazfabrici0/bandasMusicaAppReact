import { useEffect, useState } from "react";
import { Card, Title } from "../../components";

export const Galery = () => {
  const [bands, setBands] = useState([]);

  const fecthBands = async () => {
    const response = await fetch("/mocks/bandas.json");
    const data = await response.json();
    setBands(data);
  };

  useEffect(() => {
    fecthBands();
  }, []);

  if (bands.length === 0) return <div>Loading...</div>;

  return (
    <div className="container mt-10">
      <div className="text-center">
        <Title text="Galeria" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {bands.map((band) => (
          <Card band={band} key={band.id} />
        ))}
      </div>
    </div>
  );
};
