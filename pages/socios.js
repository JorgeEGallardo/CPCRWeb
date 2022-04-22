import H1 from "../components/H1";
import TextImage from "../components/TextImage";
import Layout from "../components/Layaout";
import Title from "../components/Title";

export default function Socios() {
  return (
    <Layout>
      <Title
        title="¿Cómo ser nuestro socio?"
        large="fondosocios.jpg"
        mobile="fondosociosMB.jpg"
      ></Title>
      <H1>Junta tu papelería y acude con nosotros</H1>
      <p className="text-xl mt-5 text-left text-gray-600 font-medium md:w-7/12 w-full mx-auto">
        Para ser parte de los miles de socios que ya confían en nosotros es tan fácil como juntar la siguiente 
        papelería y acudir a cualquiera de nuestras sucursales:
        <ul className="list-disc mt-3 leading-8 italic">
        <li>
          Identificación oficial.
        </li>
        <li>
          Acta de nacimiento.
        </li>
        <li>
          Sí es el caso acta de matrimonio.
        </li>
        <li>
          CURP.
        </li>
        <li>
          Comprobante de domicilio reciente.
        </li>
        <li>
          Comprobante de ingresos reciente.
        </li>
        <li>
          Consulta de buró (se puede consultar con nosotros).
        </li>
        <li>
          Parte social por $1350 pesos.
        </li>
      </ul>
      </p>
     
    </Layout>
  );
}
