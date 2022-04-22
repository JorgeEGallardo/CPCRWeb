const H1 = (props) => {
  const text = props.children ? props.children : "";
  return (
    <>
      <div className="w-full max-w-2xl mx-auto  mt-10">
        <h1 className="text-3xl text-blue-900 tracking-tight font-semibold w-full items-center mx-auto text-center mt-10 mb-2"> {text}</h1>
        <hr className="w-full max-w-4xl mx-auto mb-10 h-0.5 bg-indigo-500/10 shadow-lg shadow-indigo-500/90" />
      </div>
      
    </>
  );
};
export default H1;
