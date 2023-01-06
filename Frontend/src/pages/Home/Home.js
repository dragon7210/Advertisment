import { useState } from "react";
import Input from "../../components/Input";
import { baseUrl } from "../../constant";
import axios from "axios";

const Home = () => {
  const [searchWord, setSearchWord] = useState("");
  const onChange = (e) => {
    setSearchWord(e.target.value);
  };
  const onSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(baseUrl + "post", {
        searchWord,
      });
      if (res.status === 200) {
        localStorage.setItem("token", res.data.accessToken);
        window.location.href = "/search";
      }
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <div className="w-[400px] mx-auto mt-[10vh] flex">
        <Input
          placeholder="Enter the search keyword"
          type="text"
          onChange={onChange}
        />
        <button
          className="bg-[#c7f2ff] px-5 rounded-[10px] mt-8 ml-5 hover:bg-[blue]"
          onClick={onSearch}
        >
          <p className="text-black font-bold hover:text-white">Search</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
