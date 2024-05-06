import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaRegCopyright,
} from "react-icons/fa6";
import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={style.footer_container}>
      <div className={style.footer_container_grid}>
        <div className={style.footer_container_group_name}>
          <p className={style.footer_text_group_name}>Grupo 6</p>
        </div>
        <div>
          <p className={style.footer_title}>¿Quienes Somos?</p>
          <div>
            <div className={style.footer_text}>
              <FaGithub />
              <p>Fabricio Diaz</p>
            </div>
            <div className={`${style.footer_text} my-2`}>
              <FaGithub />
              <p>Jose Centena</p>
            </div>
            <div className={style.footer_text}>
              <FaGithub />
              <p>Nacho Cayuqueo</p>
            </div>
          </div>
        </div>
        <div>
          <p className={style.footer_title}>Nuestras Redes sociales</p>
          <div className={style.footer_container_button}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className={`${style.footer_button} hover:fill-blue-700`}
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter
                className={`${style.footer_button} hover:fill-cyan-700`}
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className={`${style.footer_button} hover:fill-red-700`}
              />
            </a>
          </div>
        </div>
      </div>
      <hr className={style.horizontal_line} />
      <div className={`${style.footer_text} p-4`}>
        <FaRegCopyright />
        <p>GRUPO 6 Todos los derechos reservados, 2024</p>
      </div>
    </footer>
  );
};
