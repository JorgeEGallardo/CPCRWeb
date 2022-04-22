import Layout from "../components/Layaout";
import TextImage from "../components/TextImage";
import Title from "../components/Title";
import inversion from "../data/inversion";
export default function Inversion() {
  var rowColor = "bg-white";
  const Table = () => {
    return (
      <div className="overflow-x-auto lg:px-20 lg:mx-20">
        <table className="table-auto w-full   md:px-20">
          <thead className="bg-blue-700 text-stone-50">
            <tr>
              {Object.entries(inversion[0]).map(([key, value]) => {
                return (
                  <td className="border px-4 py-2" key={key}>
                    {key}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {inversion.map((element, index) => {
              rowColor = (index + 1) % 2 == 0 ? "bg-blue-100" : "bg-blue-50";
              return (
                <tr className={rowColor} key={element + index}>
                  {Object.entries(element).map(([key, value]) => {
                    return (
                      <td className="border px-4 py-2" key={key}>
                        {value}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  return (
    <Layout>
      <Title title="Servicios de inversión" large="fondoahorro.jpg" mobile="fondoahorroMB.jpg"></Title>
      <TextImage
        title="Depositos a plazo fijo"
        image="undraw_Investing_re_bov7.png"
      >
        <p className="text-xl mt-10 ml-3 md:ml-20 text-left text-gray-600 font-medium">
          Para depositar cantidades que no se usarán de momento, con vencimiento
          a fechas previamente establecidas a un interés pactado. Se trata de un
          producto de ahorro que ofrece un rendimiento seguro. Es decir, el
          cliente y la institución financiera acuerdan un tipo de interés, por
          lo que la rentabilidad es conocida de antemano por ambos.  </p> 
          <p className="text-xl mt-10 ml-3 md:ml-20 text-left text-gray-600 font-medium">El
          tipo de interés que ofrecen estos depósitos es mayor que el de una
          cuenta de ahorros, dado que el cliente no puede disponer de los fondos
          hasta culminar el plazo pactado.
        </p>
      </TextImage>
      <Table></Table>
    </Layout>
  );
}
