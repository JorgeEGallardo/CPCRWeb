
  
import LeadText from '@material-tailwind/react/LeadText';
const Jumbo = () => {
    return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
        <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <h1 className="font-serif text-white text-5xl font-bold leading-normal mb-4">Por un capital en manos del pueblo.</h1>
                    <div className="text-gray-300">
                        <LeadText color="text-gray-300 text-lg font-light leadind-relaxed mt-6 mb-4">
                            Somos una sociedad cooperativa de ahorro y prestamo supervisada y regulada por la CNBV Y FOCOOP que se preocupa
                            por tu patrimonio y tu familia. 
                        </LeadText>
                        <button className="bg-gradient-to-r shadow-md shadow-red-500/30 hover:shadow-red-500/90 from-red-900 to-red-900 p-3 mt-4 text-lg rounded"> Conocer mas </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Jumbo