import Styles from '../styles/Home.module.css'
const Maps = () => {
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.993241570674!2d-104.64213388469075!3d24.031303484451577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb7c16a84eee3%3A0x856653815991f50!2sCaja%20Popular%20Cristo%20Rey!5e0!3m2!1ses-419!2smx!4v1640732731255!5m2!1ses-419!2smx"
          ></iframe>
        <br />
      </div>
    </div>
  );
};
export default Maps;
