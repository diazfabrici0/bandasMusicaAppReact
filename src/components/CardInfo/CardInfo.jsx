import style from "./CardInfo.module.css";

export const CardInfo = ({ text }) => {
  return (
    <div className={style.cardinfo_container}>
      <p className={style.carinfo_text}>{text}</p>
    </div>
  );
};
