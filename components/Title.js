import H1 from "./H1"

const Title = ({title, mobile, large}) => {
    return (
        <div className="mb-5">
        <div className="container py-5 -mb-10 md:w-8/12 md:max-w-7xl w-11/12  bg-slate-100  h-56 mx-auto rounded-lg">
        <div className="w-full max-w-2xl mx-auto  mt-10">
        <h1 className="text-5xl text-black-900 tracking-tight font-semibold w-full items-center mx-auto text-center mt-10 mb-2"> {title}</h1>
        <hr className="w-full max-w-4xl mx-auto mb-10 h-0.5 bg-indigo-500/10 shadow-lg shadow-indigo-500/90" />
      </div>
        </div>
        <div className="container  -mt-18 px-3 md:px10 py-5 md:w-7/12 md:max-w-5xl w-10/12 bg-white shadow-lg shadow-blue-900/50 h-96 mx-auto rounded-lg">
        <img loading="lazy" className="object-none object-left-top bg-yellow-300 w-full h-full xl:hidden block" src={"/" + mobile} />
        <img loading="lazy" className="object-none object-center w-full h-full xl:block hidden" src={"/"+ large} />
        </div>
    </div>
    )
}
export default Title