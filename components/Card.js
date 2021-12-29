import Modal from "./Modal";
import { useState } from "react";
import Maps from "./Maps";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
const Card = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <div
        onClick={() => {
          setShow(true);
        }}
        className="w-full cursor-pointer md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 hover:p-0 hover:border hover:shadow-blue-500/30 hover:shadow-md"
      >
        <div className="px-6">
          <img
            alt={props.imgAlt}
            src={props.imgSrc}
            className="rounded-xl shadow-lg max-w-full h-auto align-middle border-none"
          />
          <div className="pt-6 text-center">
            <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
              {props.title}
            </h1>
            <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
              {props.subtitle}
            </p>
          </div>
        </div>

        <button  onClick={() => {
          setShow(true);
        }} className="bg-stone-50 p-2 font-bold rounded" type="button">
          Contactanos
        </button>
      </div>
      <Modal show={show} handleClose={handleClose}>
        <p className="font-bold text-2xl">{props.title}</p>
        <p className="font-bold text-xl my-2">{props.address}</p>
        <p className="text-lg my-2">
          <BsFillTelephoneFill className="inline text-teal-600 text-2xl" />{" "}
          {props.phone} {" "}
          <MdMarkEmailRead className="inline text-red-600 text-2xl" />
          contacto@cajapopularcristorey.com.mx
        </p>
        <Maps></Maps>
      </Modal>
    </>
  );
};
export default Card;
