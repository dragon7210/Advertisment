import { useEffect, useState } from "react";
import Input from "../../components/Input";
import { baseUrl } from "../../constant";
import { useNavigate } from "react-router-dom";
import { axiosGet } from "../../utils/httpUtil";
import { ToastError } from "../../helpers/toast.helper";
import { useDispatch, useSelector } from "react-redux";
import { postData, setPostData } from "../../redux/post/postSlice";
import ViewModal from "./ViewModal";

const Home = () => {
  const [searchWord, setSearchWord] = useState("");
  const [openViewModal, setOpenViewModal] = useState(false);
  const [viewData, setViewData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postList = useSelector(postData);
  const onChange = (e) => {
    setSearchWord(e.target.value);
  };
  const onSearch = async (que) => {
    let keywords = searchWord.split(" ");
    if (que) {
      keywords = que.split(" ");
    }
    let query = keywords.join("+");
    navigate("?q=" + query);
    try {
      const res = await axiosGet(baseUrl, "/search?q=" + query);
      dispatch(setPostData(res.data));
    } catch (error) {
      if (error.response) {
        ToastError(error.response.data.msg);
      } else {
        ToastError("Server Error");
      }
    }
  };
  const handleClickDataRow = (data) => {
    setOpenViewModal(true);
    setViewData(data);
  }
  useEffect(() => {
    let url = new URL(window.location.href);
    let query = url.searchParams.get("q");
    if (query) {
      setSearchWord(query);
      onSearch(query);
    }
  }, []);
  return (
    <div>
      <div className="w-[250px] sm:w-[400px] mx-auto mt-[10vh] flex">
        <Input
          placeholder="Enter the search keyword"
          type="text"
          onChange={onChange}
          value={searchWord}
        />
        <button
          className="bg-[#c7f2ff] px-5 rounded-[10px] mt-8 ml-5 hover:bg-[blue]"
          onClick={() => onSearch(null)}
        >
          <p className="text-black font-bold hover:text-white">Search</p>
        </button>
      </div>
      <div className="w-[80%] mx-auto mt-[10vh] flex justify-center">
        {postList.length != 0 && (
          <table className="rounded-t-lg m-1 sm:m-5 w-[90%] md:w-[70%] mx-auto bg-gray-800 text-gray-200 text-center">
            <thead>
              <tr className="border-b border-gray-300 text-center">
                <th className="px-1 py-1 sm:px-4 sm:py-3">No</th>
                <th className="px-1 py-1 sm:px-4 sm:py-3">Title</th>
                {/* <th className="px-1 py-1 sm:px-4 sm:py-3">Content</th> */}
                <th className="px-1 py-1 sm:px-4 sm:py-3">Payment</th>
                {/* <th className="px-1 py-1 sm:px-4 sm:py-3">createdAt</th>
                <th className="px-1 py-1 sm:px-4 sm:py-3">updatedAt</th> */}
              </tr>
            </thead>
            <tbody>
              {postList.map((item, ind) => {
                return (
                  <tr
                    key={ind}
                    className="bg-gray-700 border-b border-gray-600"
                    onClick={() => handleClickDataRow(item)}
                  >
                    <td className="px-1 py-1 sm:px-4 sm:py-3">{ind + 1}</td>
                    <td className="px-1 py-1 sm:px-4 sm:py-3">{item.title}</td>
                    {/* <td className="px-4 py-3">
                      {item.content.slice(0, 120)}...
                    </td> */}
                    <td className="px-1 py-1 sm:px-4 sm:py-3">
                      <span className="badge badge-blue">{item.pay}</span>
                    </td>
                    {/* <td className="px-4 py-3 w-[15%]">{item.createdAt}</td>
                    <td className="px-4 py-3">{item.updatedAt}</td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )
        }
      </div>
      {
        openViewModal ? (<ViewModal onClose={() => setOpenViewModal(false)} data={viewData} />) : null
      }
    </div>
  );
};

export default Home;
