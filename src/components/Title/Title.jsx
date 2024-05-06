import style from "./Title.module.css";

export const Title = ({ text }) => {
  return <div className={style.title_container}>{text}</div>;
};
