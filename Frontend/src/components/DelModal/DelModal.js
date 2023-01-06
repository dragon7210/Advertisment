import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "500px",
    transform: "translate(-50%, -50%)",
  },
};

const DelModal = ({ openModal, onClose, selDel }) => {
  const closeModal = () => {
    onClose();
  };
  const onDelete = () => {
    onClose();
  };
  return (
    <Modal isOpen={openModal} ariaHideApp={false} style={customStyles}>
      <p>Are you delete?</p>
      <div className="mt-5 flex justify-end">
        <button
          className="bg-[green] px-4 py-2 rounded-lg w-[80px]"
          onClick={onDelete}
        >
          <p className="text-white">Delete</p>
        </button>
        <button
          className="bg-[red] px-4 py-2 rounded-lg w-[80px] ml-6"
          onClick={closeModal}
        >
          <p className="text-white">Cancel</p>
        </button>
      </div>
    </Modal>
  );
};

export default DelModal;
