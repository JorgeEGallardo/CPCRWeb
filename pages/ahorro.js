import H1 from "../components/H1";
import Layaout from "../components/Layaout";
import Taxes from "../components/Taxes";
import TextImage from "../components/TextImage";
import Title from "../components/Title";
export default function Ahorro() {
  const calcAhorro = (val) => {
    return val * 12 * 1.025;
  };
  return (
    <Layaout >
      <Title title="Servicios de ahorro" large="fondoahorro.jpg" mobile="fondoahorroMB.jpg"></Title>
         
      <TextImage title="Ahorro de Mayores y menores" image='undraw_wallet_aym5.png'>
        <p className="text-xl mt-10 ml-3 md:ml-20 text-left text-gray-600 font-medium">
          Con el ahorro se logra la seguridad de un respaldo económico, es la
          base principal para obtener préstamos. Se recomienda un ahorro
          constante y sistemático, el cual conviene que sea de un 5% de sus
          ingresos. Te ofrecemos una tasa de interés del 2.5% anual. 
        </p>
        <p className="text-xl mt-10 ml-3 md:ml-20 text-left text-gray-600 font-medium">
          Los niños pueden abrir sus cuentas de ahorro por medio de sus padres o
          tutor. Únicamente presentando dos fotografías, acta de nacimiento,
          comprobante de domicilio, CURP y llenar una solicitud e iniciar con
          $20.00 pesos mínimo.
        </p>
        <Taxes op={calcAhorro} type="Sí ahorro cada mes" time="un año" />
      </TextImage>
      <H1>Deposito a la vista</H1>
      <p className="text-xl mt-10 text-left text-gray-600 font-medium md:w-7/12 w-full mx-auto">
        Este tipo de ahorro no genera interés. Tendrás tu dinero disponible en
        todo momento y lo puedes usar para pagar servicios de manera mensual o
        guardarlos para un imprevisto.
      </p>

    </Layaout>
  );
}
