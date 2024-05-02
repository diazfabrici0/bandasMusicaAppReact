import { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { Card, CardInfo, Title } from "../../components";

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
    setSearchBand(event.target.value.toLowerCase());
  };

  const filteredBand = bands.filter((band) =>
    band.name.toLowerCase().includes(searchBand)
  );

  if (bands.length === 0) return <div>Loading...</div>;
  return (
    <div className="container mt-10">
      <div className="text-center">
        <Title text="Galeria" />
      </div>
      <div className="flex justify-end">
        <form action="" className="w-[300px]">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="bg-transparent w-full text-white py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Buscar Banda"
              onChange={onChangeSearch}
            />
            <ImSearch />
          </div>
        </form>
      </div>
      <div className="grid grid-cols-2 gap-2">
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
