import PropTypes from 'prop-types';
import './Toast.css'

const Toast = ({ message, type, onClose }) => {
  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>
      <button className="toast-close-button" onClick={onClose}>
        x
      </button>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Toast;
