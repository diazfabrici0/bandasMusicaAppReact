export const filterBandsByName = (bands, name = "") => {
  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) return [];

  return bands.filter((band) => band.name.toLowerCase().includes(name));
};
