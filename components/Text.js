const Text = (props) => {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <span>
          <p className="w-full text-center text-blue-gray-700 text-xl font-light leading-relaxed px-3 md:px-0">
            {props.children}
          </p>
        </span>
      </div>
    </>
  );
};

export default Text;
