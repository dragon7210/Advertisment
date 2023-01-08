import Modal from "react-modal";
import Input from "../../components/Input";
import { useEffect, useState } from "react";

const customStyles = {
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.55)'
  },
  content: {
    top: "10%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%)",
  },
};

const ViewModal = ({ onClose, data }) => {
  return (
    <Modal className="w-[250px] sm:w-[400px] absolute  bg-white p-[20px] rounded-xl" isOpen={true} ariaHideApp={false} style={customStyles}>
      <div className="flex w-[100%] sm:w-[100%]  mt-8 justify-center">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline text-[12px] sm:text-[18px] bg-transparent"
          value={data.title}
          readOnly={true}
        />
      </div>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mt-[20px] h-24"
        readOnly={true}
        value={data.content}
      />

      <div className="mt-5 flex justify-end">
        <button
          className="bg-[red] px-4 py-2 rounded-lg w-[80px] ml-6"
          onClick={onClose}
        >
          <p className="text-white">Cancel</p>
        </button>
      </div>
    </Modal>
  );
};

export default ViewModal;
