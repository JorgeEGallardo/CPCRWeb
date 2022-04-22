import Curves from "../components/Curves";
import H1 from "../components/H1";
import Text from "../components/Text";
import Jumbo from "../components/Jumbo";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Service from "../components/Service";
import {
  FaPiggyBank,
  FaMoneyCheckAlt,
  FaChartLine,
  FaCashRegister,
} from "react-icons/fa";
import Footer from "../components/Footer";
import TextImage from "../components/TextImage";
import Head from "next/head";
export default function Home() {
  return (
    <div>
        <Head>
      <title>Caja Popular Cristo Rey</title>
      <meta name="description" content="Somos una sociedad cooperativa de ahorro y prestamo con las mejores tasas de interes. 
      Contamos con pago de servicios, ahorro, prestamo e inversiones."/>
    </Head>
      <Navbar></Navbar>
      <Jumbo></Jumbo>
      <section id="contacto">
        {/* Contacto */}
        <Curves></Curves>
        <H1>Tu mejor opción para ahorrar y financiar tus proyectos.</H1>
        <Text>
          Somos una institución financiera que opera como caja de ahorro con mas
          de 65 años de experiencia con el objetivo de brindar servicios de
          ahorro, educacion y credito. Estamos comprometidos a salvaguardar tu
          patrimonio familiar y luchar por el desarrollo de los asociados.
        </Text>
        <div  className="container max-w-7xl px-3 mx-auto mt-20">
          <div className="flex flex-wrap justify-center text-center mb-20">
            <div className="flex flex-wrap">
              <Card
                title="Sucursal del Maestro"
                subtitle="Durango, Durango"
                address="Francisca Escarzaga #126, Colonia del Maestro, Durango, Dgo"
                phone="618-810-27-19"
                imgSrc="/suc1.jpg"
                imgAlt="Sucursal del maestro durango Caja popular cristo rey ahorro prestamo credito"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.993241570674!2d-104.64213388469075!3d24.031303484451577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb7c16a84eee3%3A0x856653815991f50!2sCaja%20Popular%20Cristo%20Rey!5e0!3m2!1ses-419!2smx!4v1640732731255!5m2!1ses-419!2smx"
              ></Card>
              <Card
                title="Sucursal Centro"
                subtitle="Durango, Durango"
                address="Pino Suarez #212, Zona Ote, Centro, Durango, Dgo"
                phone="618-812-87-31"
                imgSrc="/suc2.jpg"
                imgAlt="Sucursal centro durango Caja popular cristo rey ahorro prestamo credito"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.2223043409817!2d-104.66495238455283!3d24.023224684455492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fc12870e863df%3A0x5472ef1d0f44f12b!2sCaja%20Popular%20Cristo%20Rey!5e0!3m2!1ses-419!2smx!4v1641591006120!5m2!1ses-419!2smx"
              ></Card>
              <Card
                title="Sucursal El Salto"
                subtitle="El Salto, Pueblo Nuevo , Durango"
                address="Francisco I. Madero S/N, Zona Centro, Pueblo Nuevo, El Salto, Dgo."
                phone="673-876-46-49"
                imgSrc="/suc3.jpg"
                imgAlt="Sucursal el salto durango Caja popular cristo rey ahorro prestamo credito"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0795200750213!2d-105.3632715845566!3d23.78018248457468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86996b86c0c984a5%3A0x24f654bc63060aa0!2sCaja%20Popular%20Cristo%20Rey!5e0!3m2!1ses-419!2smx!4v1641591114021!5m2!1ses-419!2smx"
              ></Card>
              <Card
                title="Sucursal Sombrerete"
                subtitle="Sombrerete, Zacatecas"
                address="Ave. Miguel Hidalgo #124, Colonia Centro, Sombrerete, Zacatecas."
                phone="433-935-25-17"
                imgSrc="/suc4.jpg"
                imgAlt="Sucursal sombrerete durango Caja popular cristo rey ahorro prestamo credito"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.1792847496895!2d-103.6391295845588!3d23.633749584647042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869b515512494cbf%3A0xc23e2101346fa423!2sCaja%20Popular%20Cristo%20Rey!5e0!3m2!1ses-419!2smx!4v1641591165020!5m2!1ses-419!2smx" />

            </div>
          </div>
        </div>
      </section>
      <section id="servicios" className="bg-gray-50 pt-7">
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
                link="/credito"
              >
                {" "}
                <FaMoneyCheckAlt />
              </Service>
              <Service
                title="Inversión"
                text="Te ayudamos a poner tu dinero a trabajar. Al invertir con nosotros, ese dinero que no usarás en este momento puede generarte mas dinero él solo."
                link="/inversion"
              >
                {" "}
                <FaChartLine />
              </Service>
              <Service
                title="Pago de servicios"
                text="Ponemos a tu disposición pago de servicios de luz, agua, telefono; seguros de vida, de auto, recepción de remesas y mucho más."
                link="//#servicios"
              >
                {" "}
                <FaCashRegister />
              </Service>
            </div>
          </div>
        </div>
      </section>
      <section>
        <TextImage
          title="¿Por qué confiar en nosotros?"
          image="undraw_Certificate_re_yadi.png"
          alt="certificado supervisada CNBV CPCR CAJA POPULAR CRISTO REY CHECK"
        >
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
