import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IconContext } from "react-icons";
const Taxes = (props) => {
  const [inputText, setInputText] = useState(0);
  const calculate = (val) => {
      console.log(props.op(2))
    return props?.op(val) ?? 0
  }
  const handleChangeNumber = (e) => {
    setInputText(Math.round(calculate(e.target.value) * 100) / 100);
  };
  return (
    <div className="mx-auto w-full">
      <div className="mb-4">
        <h2
          className="block text-2xl w-full text-center text-indigo-600 mt-6 font-bold mb-8 "
          htmlFor="aaa"
        >
          Cálcula cuanto tendrás en un año:
        </h2>
        <div className="w-full md:flex md:max-w-5xl mx-auto">
            <div div className="w-full md:mr-5">
        <label
          className="block text-gray-700 text-lg font-bold mb-2"
          htmlFor="username"
        >
          Cuando ahorre
        </label>
        
        <input
          type="number"
          className="shadow appearance-none border max-w-xl w-full rounded text-2xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChangeNumber}
          placeholder="1500"
        />
        </div>
        <div className="w-full">
        <label
          className="block text-gray-700 text-lg font-bold mb-2"
          htmlFor="username"
        >
          Despues de un año tendré
        </label>
        <input
          type="text"
          readOnly
          text="asdads"
          className="shadow inline appearance-none border  w-full md:rounded py-2 px-3 text-indigo-700 leading-tight text-2xl focus:outline-none focus:shadow-outline"
          value={`$` + inputText}
        />
        </div>
        </div>
      </div>
    </div>
  );
};
export default Taxes;
