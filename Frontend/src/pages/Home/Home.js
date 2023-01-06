import { useState } from "react";
import Input from "../../components/Input";

const Home = () => {
  const [searchWord, setSearchWord] = useState("");
  const onChange = (e) => {
    setSearchWord(e.target.value);
  };
  console.log(searchWord);
  return (
    <div>
      <div className="w-[400px] mx-auto mt-[10vh] flex">
        <Input
          placeholder="Enter the search keyword"
          type="text"
          onChange={onChange}
        />
        <button className="bg-[#c7f2ff] px-5 rounded-[10px] mt-8 ml-5 hover:bg-[blue]">
          <p className="text-black font-bold hover:text-white">Search</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
