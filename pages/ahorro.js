import Layaout from "../components/Layaout";
import Taxes from "../components/Taxes";
import TextImage from "../components/TextImage";
import Savings from "../public/savings.svg";
export default function Ahorro() {
    return (
    <Layaout title="Servicio de ahorro">
      <TextImage title="Ahorro de Mayores y menores" image={Savings}>
        <p className="text-xl mt-10 ml-3 md:ml-20 text-left text-gray-600 font-medium">
          Con el ahorro se logra la seguridad de un respaldo económico, es la
          base principal para obtener préstamos. Se recomienda un ahorro
          constante y sistemático, el cual conviene que sea de un 5% de sus
          ingresos.
        </p>
        <p className="text-xl mt-10 ml-3 md:ml-20 text-left text-gray-600 font-medium">
          Los niños pueden abrir sus cuentas de ahorro por medio de sus padres o
          tutor. Únicamente presentando dos fotografías, acta de nacimiento,
          comprobante de domicilio, CURP y llenar una solicitud e iniciar con
          $20.00 pesos mínimo.
        </p>
        <Taxes op ={(val) => { val * 1.025 } }/>
      </TextImage>
    </Layaout>
  );
}
