import Curves from "../components/Curves";
import H1 from "../components/H1";
import Text from "../components/Text";
import Jumbo from "../components/Jumbo";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Jumbo></Jumbo>
      <section>
        <Curves></Curves>
        <H1>Tu mejor opción para ahorrar y financiar tus proyectos.</H1>
        <Text>
          Somos una cooperativa de ahorro y prestamo que se compromete con sus
          socios para brindarles el mejor servicio. Tenemos mas de 50 años
          protegiendo el patrimonio de las familias mexicanas y ayudandolos a
          conseguir sus sueños. Te invitamos a formar parte de las miles de
          personas que ya confian en nosotros.
        </Text>
        <div className="container max-w-7xl px-3 mx-auto mt-20">
          <div className="flex flex-wrap justify-center text-center mb-20">
            <div className="flex flex-wrap">
              <Card title="Sucursal del Maestro" subtitle="Durango, Durango" imgSrc="/suc1.jpg" imgAlt="Sucursal del maestro durango Caja popular cristo rey ahorro prestamo credito"  ></Card>
              <Card title="Sucursal Centro" subtitle="Durango, Durango" imgSrc="/suc2.jpg" imgAlt="Sucursal centro durango Caja popular cristo rey ahorro prestamo credito"  ></Card>
              <Card title="Sucursal El Salto" subtitle="El Salto, Pueblo Nuevo , Durango" imgSrc="/suc3.jpg" imgAlt="Sucursal el salto durango Caja popular cristo rey ahorro prestamo credito"  ></Card>
              <Card title="Sucursal Sombrerete" subtitle="Sombrerete, Zacatecas" imgSrc="/suc4.jpg" imgAlt="Sucursal sombrerete durango Caja popular cristo rey ahorro prestamo credito"  ></Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
