import Modal from "react-modal";
import { axiosDestroy } from "../../utils/httpUtil";
import { ToastError, ToastSuccess, ToastInfo } from "../../helpers/toast.helper";
import { baseUrl } from "../../constant";

const customStyles = {
  overlay: {
    position:"absolute",
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    // width: "500px",
    transform: "translate(-50%, -50%)",
  },
};

const DelModal = ({ openModal, onClose, selDel, data, afterDel }) => {
  const closeModal = () => {
    onClose();
  };
  const onDelete = async () => {
    try {
      const res = await axiosDestroy(baseUrl, "/post/" + data);
      if (res.status === 200) {
        ToastSuccess("success");
        onClose();
        afterDel(selDel);
      }
    } catch (error) {
      if (error.response) {
        ToastError(error.response.data.msg);
      } else {
        ToastError("Server Error");
      }
    }
  };
  return (
    <Modal className="w-[250px] sm:w-[400px] absolute  bg-white p-[10px] text-center" isOpen={openModal} ariaHideApp={false} style={customStyles}>
      <p>Are you delete?</p>
      <div className="mt-5 flex justify-end">
        <button
          className="bg-[green] p-2 sm:px-4 sm:py-2 rounded-lg w-[80px]"
          onClick={onDelete}
        >
          <p className="text-white">Delete</p>
        </button>
        <button
          className="bg-[red] p-2 sm:px-4 sm:py-2 rounded-lg w-[80px] ml-6"
          onClick={closeModal}
        >
          <p className="text-white">Cancel</p>
        </button>
      </div>
    </Modal>
  );
};

export default DelModal;
