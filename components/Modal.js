import Styles from '../styles/Home.module.css'
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'visible' : 'invisible';
  
    return (
      <div className={showHideClassName + " " + Styles.modals} >
        <section className={' max-w-5xl mt-10 bg-indigo-500 ' + Styles.modalMain}>
          {children}
          <section className="mx-auto">
          </section>
          <div className="px-10 mx-10 mb-5 ">
          <button className="w-full text-white bg-gradient-to-r shadow-md shadow-red-500/30 hover:shadow-red-500/90 from-red-900 to-red-900 px-1 p-3 mt-4 md:px-10 text-xl rounded text-center"       
            onClick={handleClose}>
            Cerrar
          </button>
          </div>
        </section>
      </div>
    );
  };
  export default Modal