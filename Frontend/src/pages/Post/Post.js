import { useState } from "react";
import Input from "../../components/Input";
import { baseUrl } from "../../constant";
import {
  ToastError,
  ToastInfo,
  ToastSuccess,
} from "../../helpers/toast.helper";
import { axiosPost } from "../../utils/httpUtil";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [postInfo, setPostInfo] = useState({});
  const navigate = useNavigate();

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
  const onPost = async (e) => {
    e.preventDefault();
    if (postInfo.title === undefined || postInfo.title === "") {
      ToastInfo("Title or content is empty");
      return;
    }
    if (postInfo.content === undefined || postInfo.content === "") {
      ToastInfo("Title or content is empty");
      return;
    }
    try {
      const res = await axiosPost(baseUrl, "/post", {
        postInfo,
      });
      if (res.status === 200) {
        ToastSuccess("success");
        navigate('/myposts')
      }
    } catch (error) {
      if (error.response) {
        ToastError(error.response.data.msg);
      } else {
        ToastError("Server Error");
      }
    }
  };
  const onCancel = () => {
    setPostInfo({});
  };
  const select = (e) => {
    setPostInfo({
      ...postInfo,
      type: e.target.value,
    });
  };
  return (
    <div>
      <div className="w-[90%] sm:w-[500px] mx-auto pt-6">
        <label>Choose a type</label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mt-2"
          onChange={select}
        >
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>
        <Input placeholder="Title" onChange={(e) => onChange(e, "Title")} />
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mt-[20px] h-24"
          onChange={(e) => onChange(e, "Content")}
        />
        <div className="flex justify-end mt-[20px]">
          <button
            className="bg-[#6dabe4] w-[80px] rounded-[10px]"
            onClick={onPost}
          >
            <p className="text-[white]  py-2">Post</p>
          </button>
          <button
            className="bg-[red] w-[80px] rounded-[10px] ml-4"
            onClick={onCancel}
          >
            <p className="text-[white]  py-2">Cancel</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
