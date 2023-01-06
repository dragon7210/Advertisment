import Post from "../models/PostModel";

export const postSave = async (req, res) => {
  const { type, title, content } = req.body.postInfo;
  if (!(title || content)) {
    return res.json({ msg: "Title or content shouldn't  be empty" });
  }
  let pay = 0;
  if (type === 'paid') {
    pay = 20;
  }
  try {
    await Post.create({
      user_id: req.userId,
      title,
      content,
      pay
    });
    res.json({ msg: "Registration Successful" });
  } catch (error) {
    res.json({ msg: "Interval Server Error" });
    console.log(error);
  }
}
export const postGet = async (req, res) => {
  try {
    let res = await Post.findAll({
      user_id: req.userId
    });
    console.log(res)
    res.send({
      data: "ddd"
    })
  } catch (error) {
    res.json({ msg: "Interval Server Error" })
  }
}
export const postGetById = async (req, res) => {
  try {
    let res = await Post.findOne({
      id:req.params.id
    })
    res.send({
      data:'ddd'
    })
  } catch (error) {
    res.json({ msg: "Interval Server Error" })
  }
}
export const postUpdate = async (req, res) => {
  try {
    // let res = await Post.update({

    // })
  } catch (error) {
    res.json({ msg: "Interval Server Error" })
  }
}

