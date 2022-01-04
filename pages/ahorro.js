import { useState } from "react";
import Layaout from "../components/Layaout";
export default function Ahorro() {
    const [inputText, setInputText] = useState("")
    const handleChangeNumber = (e) =>{
        setInputText(Math.round((e.target.value*1.025)*100)/100);
      }
    return (
        <Layaout title="Ahorro">
            <input type="number" onChange={handleChangeNumber} placeholder="1500"/>
            {inputText}
        </Layaout>
    )
}
