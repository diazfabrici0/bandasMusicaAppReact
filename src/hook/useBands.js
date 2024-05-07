import { useEffect, useState } from "react";

export const useBands = () => {
  const [bands, setBands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fecthBands = async () => {
    const response = await fetch("/mocks/bandas.json");
    const data = await response.json();
    setBands(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fecthBands();
  }, []);

  return { bands, isLoading };
};
