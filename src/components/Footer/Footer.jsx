import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaRegCopyright,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="flex flex-col dark:bg-neutral-950 mt-10">
      <div className="grid grid-cols-3 my-8">
        <div className="flex justify-center items-center">
          <p className="text-5xl font-Nunito">Grupo 6</p>
          {/* <div class="border-l h-24 border-gray-500"></div> */}
        </div>
        <div>
          <p className="mb-5 text-center text-lg font-bold font-Montserrat underline">
            ¿Quienes Somos?
          </p>
          <div>
            <div className="flex justify-center items-center space-x-2">
              <FaGithub />
              <p>Fabricio Diaz</p>
            </div>
            <div className="flex justify-center items-center space-x-2 my-2">
              <FaGithub />
              <p>Jose Centena</p>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <FaGithub />
              <p>Nacho Cayuqueo</p>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-5 text-center text-lg font-bold font-Montserrat underline">
            Nuestras Redes sociales
          </p>
          <div className="flex justify-center mb-6 space-x-6 text-2xl">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="fill-white hover:fill-blue-700 cursor-pointer" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="fill-white hover:fill-cyan-700 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="fill-white hover:fill-red-700 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <hr className="my-3 border-white" />
      <div className="flex items-center justify-center p-4 space-x-2">
        <FaRegCopyright />
        <p>GRUPO 6 Todos los derechos reservados, 2024</p>
      </div>
    </footer>
  );
};

// export const Footer = () => {
//   return (
//     <footer className="bg-card flex flex-col dark:bg-neutral-950 mt-10 border-t-4 border-white border-double">
//       <div className="container pt-9">
//         {/* social media */}
//         <div className="flex justify-center mb-6 space-x-6">
//           <FaFacebookF />
//           <FaXTwitter />
//           <FaInstagram />
//           <FaGithub />
//         </div>
//         {/* Copyright */}
//         <div className="flex items-center justify-center w-full bg-black/5 p-4 space-x-2">
//           <FaRegCopyright />
//           <p>2024 Copyright: Grupo 6</p>
//         </div>
//       </div>
//     </footer>
//   );
// };
