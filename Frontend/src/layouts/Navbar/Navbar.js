import { useNavigate } from "react-router-dom";
import { clearIsLoggedIn } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="h-[50px] bg-[#c7f2ff] px-[2%] text-white flex justify-end">
      <div className="my-auto flex">
        <div className="flex ml-[20px]">
          <button
            className="my-auto mr-5 p-[5px] text-black cursor-pointer font-bold hover:bg-[#6dabe4] hover:rounded-lg hover:text-[white]"
            onClick={() => navigate("/home")}
          >
            Home
          </button>
          <button
            className="my-auto mr-5 p-[5px] text-black cursor-pointer font-bold hover:bg-[#6dabe4] hover:rounded-lg hover:text-[white]"
            onClick={() => navigate("/post")}
          >
            New Post
          </button>
          <button
            className="my-auto mr-5 p-[5px] text-black cursor-pointer font-bold hover:bg-[#6dabe4] hover:rounded-lg hover:text-[white]"
            onClick={() => navigate("/myposts")}
          >
            My Posts
          </button>
          <button
            className="my-auto  ml-5 px-4 py-2 rounded-[10px] bg-[#6dabe4] hover:bg-[blue]"
            onClick={() => {
              localStorage.setItem("token", "");
              dispatch(clearIsLoggedIn);
              window.location.href = "/";
              navigate("/");
            }}
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
}
