import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Toastify.css'

const CloseButton = ({ closeToast }) => (
  <button
    type="button"
    className="Toastify__close-button Toastify__close-button--dark"
    onClick={closeToast}
    aria-label="Close Alert"
  >
    <svg aria-hidden="true" viewBox="0 0 14 16">
      <path
        fillRule="evenodd"
        d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
      ></path>
    </svg>
  </button>
)

export const CustomToastify = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        // autoClose={false}
        autoClose={15000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        closeButton={CloseButton}
      />
    </div>
  )
}
