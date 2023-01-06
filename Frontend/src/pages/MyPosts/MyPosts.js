import { useEffect, useState } from "react";
import { axiosGet } from "../../utils/httpUtil";
import { baseUrl } from "../../constant";
import EditModal from "../../components/EditModal";

export default function MyPosts() {
  const [myPosts, setMyPosts] = useState([]);
  const [selEdit, setSelEdit] = useState(-1);
  const [openModal, setOpenModal] = useState(false);

  const getPost = async () => {
    let res = await axiosGet(baseUrl, "/post");
    setMyPosts(res.data);
  };
  useEffect(() => {
    getPost();
  }, []);
  const onEdit = (i) => {
    setSelEdit(i);
    setOpenModal(true);
  };
  return (
    <div className="pt-10">
      <table className="table-auto w-[50%] mx-auto rounded-[20px]">
        <thead>
          <tr className="bg-[grey] h-[60px]">
            <th>No</th>
            <th>Title</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myPosts.map((post, index) => (
            <tr key={index}>
              <td className=" text-center">{index + 1}</td>
              <td className=" text-center">{post.title}</td>
              <td className=" text-center">{post.pay}</td>
              <td className=" text-center">
                <button
                  className="hover:bg-[grey] rounded-sm p-2"
                  onClick={() => onEdit(index)}
                >
                  <img className="w-[30px]" src="icon/edit.png" alt="edit" />
                </button>
                <button className="ml-[20px] hover:bg-[red] rounded-sm p-2">
                  <img
                    className="h-[30px] "
                    src="icon/delete.png"
                    alt="delete"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditModal
        openModal={openModal}
        onClose={() => setOpenModal(false)}
        editPost={myPosts[selEdit]}
      />
    </div>
  );
}
