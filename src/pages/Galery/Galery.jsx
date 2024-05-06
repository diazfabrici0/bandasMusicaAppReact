import { useEffect, useState } from "react";
import { Card, CardInfo, SearchInput, Title } from "../../components";

import style from "./Galery.module.css";

export const Galery = () => {
  const [bands, setBands] = useState([]);
  const [searchBand, setSearchBand] = useState("");

  const fecthBands = async () => {
    const response = await fetch("/mocks/bandas.json");
    const data = await response.json();
    setBands(data);
  };

  useEffect(() => {
    fecthBands();
  }, []);

  const onChangeSearch = (event) => {
    setSearchBand(event.target.value.toLowerCase().trim());
  };

  const filteredBand = bands.filter((band) =>
    band.name.toLowerCase().includes(searchBand)
  );

  if (bands.length === 0) return <div>Loading...</div>;
  return (
    <div className={style.galery_container}>
      <div className="text-center">
        <Title text="Galeria" />
      </div>
      <div className="flex justify-end">
        <SearchInput placeholder="Buscar Banda" onChange={onChangeSearch} />
      </div>
      <div className={style.galery_container_card}>
        {searchBand === "" ? (
          bands.map((band) => <Card band={band} key={band.id} />)
        ) : filteredBand.length === 0 ? (
          <CardInfo text="No se encontraron Bandas" />
        ) : (
          filteredBand.map((band) => <Card band={band} key={band.id} />)
        )}
      </div>
    </div>
  );
};
