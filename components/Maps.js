import Styles from '../styles/Home.module.css'
const Maps = ({src}) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className={Styles.iframe}>
        <iframe
          width="700"
          height="150"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={src} ></iframe>
        <br />
      </div>
    </div>
  );
};
export default Maps;
