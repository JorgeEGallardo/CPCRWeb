import Image from "next/image"
import H1 from "./H1"


const TextImage = (props) => {
    return (
        <>
         <div className="w-full mb-20 block md:flex items-center">
          <div className="md:w-8/12 md:pl-4 w-full">
             {props.children &&<H1>{props.title}</H1>}
             <div className="md:max-w-7xl px-3 mx-auto">
                {props.children}
                </div>
            </div>
          <div className="md:w-4/12 w-8/12 mx-auto mt-20 md:mt-0">
          <Image height="500" alt={props.alt} src={props.image} />
          </div>
        </div>
        </>
    )
}
export default TextImage