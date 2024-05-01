export const CardDiscography = ({ discography }) => {
  const { album, year, cover } = discography;

  return (
    <div className="border-2 border-gray-300 p-5 rounded-tl-lg rounded-br-lg tracking-wider uppercase">
      <img className="w-[300px]" src={cover} alt={album} />
      <p className="font-Nunito font-semibold text-lg mt-3">{album}</p>
      <p className="font-Nunito font-semibold text-xl mt-2">{year}</p>
    </div>
  );
};
