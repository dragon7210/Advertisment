import Modal from "react-modal";
import Input from "../Input";
import { useState } from "react";

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

const EditModal = ({ openModal, onClose, editPost }) => {
  const [postInfo, setPostInfo] = useState({});
  const closeModal = () => {
    onClose();
  };
  const select = (e) => {
    setPostInfo({
      ...postInfo,
      type: e.target.value,
    });
  };
  const onChange = (e, field) => {
    if (field === "Title") {
      setPostInfo({
        ...postInfo,
        title: e.target.value,
      });
    }
    if (field === "Content") {
      setPostInfo({
        ...postInfo,
        content: e.target.value,
      });
    }
  };
  return (
    <Modal isOpen={openModal} ariaHideApp={false} style={customStyles}>
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mt-2"
        onChange={select}
        value={editPost && (editPost.pay === 0 ? "free" : "paid")}
      >
        <option value="free">Free</option>
        <option value="paid">Paid</option>
      </select>
      <Input
        placeholder="Title"
        onChange={(e) => onChange(e, "Title")}
        value={editPost && editPost.title}
      />
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mt-[20px] h-24"
        onChange={(e) => onChange(e, "Content")}
        value={editPost && editPost.content}
      />

      <div className="mt-5 flex justify-end">
        <button className="bg-[green] px-4 py-2 rounded-lg w-[80px]">
          <p className="text-white">Save</p>
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

export default EditModal;
