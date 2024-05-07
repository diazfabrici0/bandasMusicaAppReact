import { useState } from "react";
import { filterBandsByName } from "../../helper";
import { Card, CardInfo, Loading, SearchInput, Title } from "../../components";

import style from "./Galery.module.css";
import { useBands } from "../../hook/useBands";

export const Galery = () => {
  const { bands, isLoading } = useBands();
  const [searchBand, setSearchBand] = useState("");

  const onChangeSearch = (event) => {
    setSearchBand(event.target.value);
  };

  const filteredBand = filterBandsByName(bands, searchBand);

  if (isLoading)
    return (
      <div className="flex justify-center">
        <Loading text="Cargando..." />
      </div>
    );
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
