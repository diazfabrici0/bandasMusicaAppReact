export const CardMember = ({ memberData }) => {
  const { name, photo } = memberData;
  return (
    <div className="px-4 flex flex-col items-center">
      <img className="rounded-full w-20 h-20" src={photo} alt={name} />
      <h3 className="text-lg font-semibold uppercase">{name}</h3>
    </div>
  );
};
