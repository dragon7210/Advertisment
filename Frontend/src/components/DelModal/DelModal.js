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
    top: "30%",
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
    <Modal className="w-[250px] sm:w-[400px] absolute  bg-white p-[20px] rounded-xl text-center" isOpen={openModal} ariaHideApp={false} style={customStyles}>
      <h3 className="text-[20px]">Would you like to remove this?</h3>
      <div className="mt-5 flex justify-around">
        <button
          className="bg-[green] p-2 sm:px-4 sm:py-2 rounded-lg w-[80px]"
          onClick={onDelete}
        >
          <p className="text-white">Sure</p>
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
