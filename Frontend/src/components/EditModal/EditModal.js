import Modal from "react-modal";
import Input from "../Input";
import { ToastError, ToastInfo, ToastSuccess } from "../../helpers/toast.helper";
import { useEffect, useState } from "react";
import { axiosPut } from "../../utils/httpUtil";
import { baseUrl } from "../../constant";

const customStyles = {
  overlay: {
    position:'absolute',
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

const EditModal = ({ openModal, onClose, data, fetchPosts, afterEdit }) => {
  const [postInfo, setPostInfo] = useState({
    post_id: 0,
    type: 'free',
    title: '',
    content: '',
  });
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
  const handleUpdatePost = async () => {
    if (postInfo.title === undefined || postInfo.title === "") {
      ToastInfo("Title or content is empty");
      return;
    }
    if (postInfo.content === undefined || postInfo.content === "") {
      ToastInfo("Title or content is empty");
      return;
    }
    try {
      const res = await axiosPut(baseUrl, "/post", {
        postInfo,
      });
      if (res.status === 200) {
        ToastSuccess("success");
        afterEdit(postInfo)
        onClose();
        // fetchPosts();
      }
    } catch (error) {
      if (error.response) {
        ToastError(error.response.data.msg);
      } else {
        ToastError("Server Error");
      }
    }
  }
  useEffect(() => {
    setPostInfo({
      post_id: data.id,
      type: data.pay === 0 ? "free" : "paid",
      title: data.title,
      content: data.content,
    })
  }, [])
  return (
    <Modal className="w-[250px] sm:w-[400px] absolute  bg-white p-[20px] rounded-xl" isOpen={openModal} ariaHideApp={false} style={customStyles}>
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mt-2"
        onChange={select}
        value={postInfo.type}
      >
        <option value="free">Free</option>
        <option value="paid">Paid</option>
      </select>
      <Input
        placeholder="Title"
        onChange={(e) => onChange(e, "Title")}
        value={postInfo.title}
      />
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mt-[20px] h-24"
        onChange={(e) => onChange(e, "Content")}
        value={postInfo.content}
      />

      <div className="mt-5 flex justify-end">
        <button className="bg-[green] px-4 py-2 rounded-lg w-[80px]" onClick={handleUpdatePost}>
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
