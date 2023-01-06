import { ToastContainer, toast } from 'react-toastify';

export const ToastError = (msg) => {
  toast.error(msg, {
    position: 'top-right',
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    className: 'submit-feedback success toast-error',
    toastId: 'notifyToast'
  });
}
export const ToastInfo = (msg) => {
  toast.info(msg, {
    position: 'top-right',
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    className: 'submit-feedback success toast-info',
    toastId: 'notifyToast'
  });
}
export const ToastSuccess = (msg) => {
  toast.success(msg, {
    position: 'top-right',
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    className: 'submit-feedback success toast-success',
    toastId: 'notifyToast'
  });
}
