import Layout from "../components/Layaout";
import TextImage from "../components/TextImage";
import Savings from "../public/savings.svg";
import credits from "../data/credits";
import Title from "../components/Title";
export default function Credito() {
    var rowColor = "bg-white"
  const Table = () => {
    return (
      <div className="overflow-x-auto lg:px-20 lg:mx-20">
        <table className="table-auto   md:px-20">
          <thead className="bg-blue-700 text-stone-50">
            <tr>
              {Object.entries(credits[0]).map(([key, value]) => {
                return (
                  <td className="border px-4 py-2" key={key}>
                    {key}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {credits.map((element, index) => {
                 rowColor = (index + 1) % 2 == 0 ? "bg-blue-100" : "bg-blue-50" 
                return ( <tr className={rowColor} key={element+index}>
              {
                Object.entries(element).map(([key, value]) => {
                  return (
                    <td className="border px-4 py-2" key={key}>
                      {value}
                    </td>
                  )
                })
              }
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    );
  };
  return (
    <Layout>
       <Title title="Servicios de prestamo" large="fondocredito.jpg" mobile="fondocreditoMB.jpg"></Title>
      <TextImage title="Creditos" image='undraw_buy_house_560d.png'>
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
      </TextImage>
      <Table></Table>
    </Layout>
  );
}
