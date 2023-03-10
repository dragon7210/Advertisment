import { useEffect, useState } from "react";
import { axiosGet } from "../../utils/httpUtil";
import { baseUrl } from "../../constant";
import EditModal from "../../components/EditModal";
import DelModal from "../../components/DelModal";

export default function MyPosts() {
  const [myPosts, setMyPosts] = useState([]);
  const [selEdit, setSelEdit] = useState(0);
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
  const afterEditFunc = (data) => {
    let temp = [...myPosts];
    temp[selEdit].pay = data.type === 'free' ? 0 : 20;
    temp[selEdit].title = data.title;
    temp[selEdit].content = data.content;

    setMyPosts(temp)
  }
  const afterDelFunc = (selDel) => {
    let temp = [...myPosts];
    temp.splice(selDel, 1);
    setMyPosts(temp);
  };
  return (
    <div className="pt-10">
      {myPosts.length != 0 && (
        <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200">
          <thead>
            <tr className="text-left border-b border-gray-300">
              <th className="p-2 sm:px-4 sm:py-3">No</th>
              <th className="p-2 sm:px-4 sm:py-3 w-[50%]">Title</th>
              <th className="p-2 sm:px-4 sm:py-3">Type</th>
              <th className="p-2 sm:px-4 sm:py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {myPosts.map((post, index) => (
              <tr key={index} className="bg-gray-700 border-b border-gray-600">
                <td className="p-2 sm:px-4 sm:py-3">{index + 1}</td>
                <td className="p-2 sm:px-4 sm:py-3">{post.title.slice(0, 40)}</td>
                <td className="p-2 sm:px-4 sm:py-3">{post.pay}</td>
                <td className="p-2 sm:px-4 sm:py-3">
                  <button
                    className="rounded-sm p-2"
                    onClick={() => onEdit(index)}
                  >
                    <img className="w-[15px] sm:w-[20px]" src="icon/edit.png" alt="edit" />
                  </button>
                  <button
                    className="sm:ml-[20px] rounded-sm p-2"
                    onClick={() => onDelete(index)}
                  >
                    <img
                      className="h-[15px] sm:h-[20px] "
                      src="icon/delete.png"
                      alt="delete"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {openEditModal ? (
        <EditModal
          openModal={openEditModal}
          onClose={() => setOpenEditModal(false)}
          data={myPosts[selEdit]}
          afterEdit={afterEditFunc}
          fetchPosts={getPost}
        />
      ) : null}
      {openDelModal ? (
        <DelModal
          openModal={openDelModal}
          onClose={() => setOpenDelModal(false)}
          selDel={selDel}
          afterDel={afterDelFunc}
          data={myPosts[selDel].id}
        />
      ) : null}
    </div>
  );
}
