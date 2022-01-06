
  
import LeadText from '@material-tailwind/react/LeadText';
const Header = ({title}) => {
    return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-40 ">
        <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center flex items-middle">
                    <h1 className="font-serif text-white text-4xl md:text-5xl font-bold flex items-center justify-center mx-auto leading-normal pt-20 mb-4">{title}</h1>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Header