import Link from 'next/link'
const Service = ({text, title, link, children}) => {
    return (
          <> 
        <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-blue-gray-800 p-3 w-20 h-20 shadow-lg shadow-indigo-500/30 rounded-full bg-white inline-flex items-center justify-center mb-6">
          <span className="leading-none text-indigo-500 text-4xl">
            {children}
          </span>
        </div>
        <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
          {title}
        </h1>
        <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
          {text}
        </p>
        <Link href={link}>
        <button className="bg-stone-50 p-2 font-bold rounded" type="button">
         <span className="text-red-800 text-2xl"> + </span> Mas informacion
        </button>
        </Link>
      </div>
      </>
    )
}

export default Service