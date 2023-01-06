import { useState } from "react";
import Input from "../../components/Input";
import { baseUrl } from "../../constant";
import axios from "axios";

const Post = () => {
  const [postInfo, setPostInfo] = useState({});
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
  const [msg, setMsg] = useState("");
  const onPost = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(baseUrl + "post", {
        postInfo,
      });
      if (res.status === 200) {
        localStorage.setItem("token", res.data.accessToken);
        window.location.href = "/home";
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
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
      <div className="w-[500px] mx-auto pt-6">
        <label>Choose a type</label>
        <select
          id="countries"
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
