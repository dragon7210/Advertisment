import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="h-[50px] bg-[#c7f2ff] px-[2%] text-white flex justify-end">
      <div className="my-auto flex">
        <ul className="flex ml-[20px]">
          <li
            className="my-auto mr-5 p-[5px] text-black cursor-pointer font-bold hover:bg-[#6dabe4] hover:rounded-lg hover:text-[white]"
            onClick={() => navigate("/home")}
          >
            Home
          </li>
          <li
            className="my-auto mr-5 p-[5px] text-black cursor-pointer font-bold hover:bg-[#6dabe4] hover:rounded-lg hover:text-[white]"
            onClick={() => navigate("/post")}
          >
            New Post
          </li>
          <button
            className="my-auto  ml-5 px-4 py-2 rounded-[10px] bg-[#6dabe4] hover:bg-[blue]"
            onClick={() => {
              localStorage.setItem("token", "");
              window.location.href = "/";
            }}
          >
            LogOut
          </button>
        </ul>
      </div>
    </nav>
  );
}
