import { forwardRef, useImperativeHandle, useState } from 'react';
import Toast from './Toast';
import './ToastContainer.css';

const ToastContainer = forwardRef((props, ref) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type) => {
    const id = Date.now();

    setToasts((prevToasts) => [...prevToasts, { message, type, id }]);

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
    }, 3000);
  };

  useImperativeHandle(ref, () => ({
    addToast,
  }));

  return (
    <div className="toast-container">
      {toasts.map((toast, index) => (
        <Toast
          key={index}
          message={toast.message}
          type={toast.type}
          onClose={() => {
            setToasts((prevToasts) =>
              prevToasts.filter((t) => t.id !== toast.id)
            );
          }}
        />
      ))}
    </div>
  );
});

ToastContainer.displayName = 'ToastContainer';

export default ToastContainer;
