import Curves from "../components/Curves";
import H1 from "../components/H1";
import Text from "../components/Text";
import Jumbo from "../components/Jumbo";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Service from "../components/Service";
import Certificate from "../public/certificate.svg";
import {
  FaPiggyBank,
  FaMoneyCheckAlt,
  FaChartLine,
  FaCashRegister,
} from "react-icons/fa";
import Image from "next/image";
import Footer from "../components/Footer";
import TextImage from "../components/TextImage";
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Jumbo></Jumbo>
      <section>
        {/* Contacto */}
        <Curves></Curves>
        <H1>Tu mejor opción para ahorrar y financiar tus proyectos.</H1>
        <Text>
          Somos una institución financiera que opera como caja de ahorro con mas
          de 65 años de experiencia con el objetivo de brindar servicios de
          ahorro, educacion y credito. Estamos comprometidos a salvaguardar tu
          patrimonio familiar y luchar por el desarrollo de los asociados.
        </Text>
        <div className="container max-w-7xl px-3 mx-auto mt-20">
          <div className="flex flex-wrap justify-center text-center mb-20">
            <div className="flex flex-wrap">
              <Card
                title="Sucursal del Maestro"
                subtitle="Durango, Durango"
                address="Francisca Escarzaga #126, Colonia del Maestro, Durango, Dgo"
                phone="618-810-27-19"
                imgSrc="/suc1.jpg"
                imgAlt="Sucursal del maestro durango Caja popular cristo rey ahorro prestamo credito"
              ></Card>
              <Card
                title="Sucursal Centro"
                subtitle="Durango, Durango"
                address="Pino Suarez #212, Zona Ote, Centro, Durango, Dgo"
                phone="618-812-87-31"
                imgSrc="/suc2.jpg"
                imgAlt="Sucursal centro durango Caja popular cristo rey ahorro prestamo credito"
              ></Card>
              <Card
                title="Sucursal El Salto"
                subtitle="El Salto, Pueblo Nuevo , Durango"
                address="Francisco I. Madero S/N, Zona Centro, Pueblo Nuevo, El Salto, Dgo."
                phone="673-876-46-49"
                imgSrc="/suc3.jpg"
                imgAlt="Sucursal el salto durango Caja popular cristo rey ahorro prestamo credito"
              ></Card>
              <Card
                title="Sucursal Sombrerete"
                subtitle="Sombrerete, Zacatecas"
                address="Ave. Miguel Hidalgo #124, Colonia Centro, Sombrerete, Zacatecas."
                phone="433-935-25-17"
                imgSrc="/suc4.jpg"
                imgAlt="Sucursal sombrerete durango Caja popular cristo rey ahorro prestamo credito"
              ></Card>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 pt-7">
        <H1>Ven y conoce los productos y servicios que tenemos para ti. </H1>
        <Text>
          {" "}
          Contamos con servicios de ahorro, educación financiera, inversiones y
          crédito. Tenemos como objetivo ayudarte a cumplir tus metas con
          servicios accesibles y transparentes.
        </Text>
        <div className="container max-w-7xl px-3 mx-auto mt-20 pb-3">
          <div className="flex flex-wrap justify-center text-center mb-20">
            <div className="flex flex-wrap justify-center">
              <Service
                title="Ahorro"
                text="Con el ahorro se logra la seguridad de un respaldo económico, es la base para obtener préstamos.  Fomentamos el ahorro de adultos y niños."
                link="/ahorro"
              >
                {" "}
                <FaPiggyBank />
              </Service>
              <Service
                title="Prestamo"
                text="Para apoyarte en la realización de proyectos, enfrentar un imprevisto o realizar ese viaje que siempre quisiste, tenemos para tí la mejor opción."
                link="/google"
              >
                {" "}
                <FaMoneyCheckAlt />
              </Service>
              <Service
                title="Inversión"
                text="Te ayudamos a poner tu dinero a trabajar. Al invertir con nosotros, ese dinero que no usarás en este momento puede generarte mas dinero él solo."
                link="/google"
              >
                {" "}
                <FaChartLine />
              </Service>
              <Service
                title="Pago de servicios"
                text="Ponemos a tu disposición pago de servicios de luz, agua, telefono; seguros de vida, de auto, recepción de remesas y mucho más."
                link="/google"
              >
                {" "}
                <FaCashRegister />
              </Service>
            </div>
          </div>
        </div>
      </section>
      <section>
        <TextImage title="¿Por qué confiar en nosotros?" image={Certificate} alt="certificado supervisada CNBV CPCR CAJA POPULAR CRISTO REY CHECK">
          {" "}
          <p className="text-xl mt-10 ml-3 md:ml-20 text-left text-gray-600 font-medium">
            Somos una entidad financiera supervisada y autorizada por la CNBV
            (Comisión Nacional Bancaria y Valores) y FOCOOP (Fideicomiso Fondo
            de Supervisión Auxiliar de Sociedades Cooperativas de Ahorro y
            Préstamo y de Protección a sus Ahorradores). Esto significa que tu
            dinero estará seguro con nosotros.
          </p>
          <p className="text-xl mt-10 ml-3 md:ml-20 text-left text-gray-600 font-medium">
            Ademas contamos con multiples seguros que protegen tu ahorro, tu
            patrimonio y sobretodo a tu familia. Por si fuera poco, contamos con
            tasas realmente bajas con plazos flexibles y accessibles para que
            puedas elegir lo que mas te convenga en este momento.
          </p>
        </TextImage>
      </section>
      <Footer></Footer>
    </div>
  );
}
