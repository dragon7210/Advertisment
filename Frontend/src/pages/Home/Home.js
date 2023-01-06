import { useEffect, useState } from "react";
import Input from "../../components/Input";
import { baseUrl } from "../../constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { axiosGet } from "../../utils/httpUtil";
import { ToastError } from "../../helpers/toast.helper";

const Home = () => {
  const [searchWord, setSearchWord] = useState("");
  const navigate = useNavigate();
  const onChange = (e) => {
    setSearchWord(e.target.value);
  };
  const onSearch = async (que) => {
    let keywords = searchWord.split(" ");
    if (que) {
      keywords = que.split(" ")
    }
    let query = keywords.join('+')
    navigate('?q=' + query);
    try {
      const res = await axiosGet(baseUrl, '/search?q=' + query);
      console.log(res)
    } catch (error) {
      if (error.response) {
        ToastError(error.response.data.msg);        
      } else {
        ToastError('Server Error')
      }
    }
  };
  useEffect(() => {
    let url = new URL(window.location.href);
    let query = url.searchParams.get('q');
    if (query) {
      setSearchWord(query);
      onSearch(query)
    }
  }, [])
  return (
    <div>
      <div className="w-[400px] mx-auto mt-[10vh] flex">
        <Input
          placeholder="Enter the search keyword"
          type="text"
          onChange={onChange}
          value={searchWord}
        />
        <button
          className="bg-[#c7f2ff] px-5 rounded-[10px] mt-8 ml-5 hover:bg-[blue]"
          onClick={()=>onSearch(null)}
        >
          <p className="text-black font-bold hover:text-white">Search</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
