import { useEffect, useState } from "react";
import { axiosGet } from "../../utils/httpUtil";
import { baseUrl } from "../../constant";
import EditModal from "../../components/EditModal";
import DelModal from "../../components/DelModal";

export default function MyPosts() {
  const [myPosts, setMyPosts] = useState([]);
  const [selEdit, setSelEdit] = useState(-1);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selDel, setSelDel] = useState(-1);
  const [openDelModal, setOpenDelModal] = useState(false);

  const getPost = async () => {
    let res = await axiosGet(baseUrl, "/post");
    setMyPosts(res.data);
  };
  useEffect(() => {
    getPost();
  }, []);
  const onEdit = (i) => {
    setSelEdit(i);
    setOpenEditModal(true);
  };
  const onDelete = (i) => {
    setSelDel(i);
    setOpenDelModal(true);
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
                  className="rounded-sm p-2"
                  onClick={() => onEdit(index)}
                >
                  <img className="w-[30px]" src="icon/edit.png" alt="edit" />
                </button>
                <button
                  className="ml-[20px] rounded-sm p-2"
                  onClick={() => onDelete(index)}
                >
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
        openModal={openEditModal}
        onClose={() => setOpenEditModal(false)}
        editPost={myPosts[selEdit]}
      />
      <DelModal
        openModal={openDelModal}
        onClose={() => setOpenDelModal(false)}
        selDel={selDel}
      />
    </div>
  );
}
