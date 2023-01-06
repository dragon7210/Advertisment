import { useEffect, useState } from 'react';
import { axiosGet } from '../../utils/httpUtil';
import { baseUrl } from "../../constant";

export default function MyPosts() {
  const [myposts, setMyPosts] = useState([]);
  const getPost = async () => {
    let res = await axiosGet(baseUrl, '/post');
    console.log(res);
  }
  useEffect(() => {
    getPost();
  }, [])
  return (
    <div className='w-[90%] border'>

    </div>
  )
}