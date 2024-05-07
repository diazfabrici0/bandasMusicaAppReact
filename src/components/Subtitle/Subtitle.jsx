import style from "./Subtitle.module.css";

export const Subtitle = ({ text }) => {
  return <div className={style.subtitle_container}>{text}</div>;
};
