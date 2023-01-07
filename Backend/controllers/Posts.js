import Posts from "../models/PostModel";

export const postSave = async (req, res) => {
  const { type, title, content } = req.body.postInfo;
  if (!(title || content)) {
    return res.status(500).json({ msg: "Title or content shouldn't  be empty" });
  }
  let pay = 0;
  if (type === "paid") {
    pay = 20;
  }
  try {
    await Posts.create({
      user_id: req.userId,
      title,
      content,
      pay,
    });
    res.json({ msg: "Registration Successful" });
  } catch (error) {
    res.status(500).json({ msg: "Interval Server Error" });
    console.log(error);
  }
};
export const postGet = async (req, res) => {
  try {
    let posts = await Posts.findAll({
      user_id: req.userId,
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ msg: "Interval Server Error" });
  }
};
export const postGetById = async (req, res) => {
  try {
    let res = await Posts.findOne({
      id: req.params.id,
    });
    res.send({
      data: "ddd",
    });
  } catch (error) {
    res.status(500).json({ msg: "Interval Server Error" });
  }
};
export const postUpdate = async (req, res) => {
  const { type, title, content, post_id } = req.body.postInfo;
  if (!(title || content)) {
    return res.status(500).json({ msg: "Title or content shouldn't  be empty" });
  }
  let pay = 0;
  if (type === "paid") {
    pay = 20;
  }
  try {
    await Posts.update(
      {
        pay: pay,
        title: title,
        content: content,
      },
      {
        where: {
          id: post_id,
        },
      }
    );
    res.json({ msg: "Updated Successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Interval Server Error" });
  }
}

export const postDelete = async (req, res) => {
  let post_id = req.params.id;
  if (post_id === undefined || post_id === '') {
    return res.status(500).json({ msg: "Invalid Request" });
  }
  try {
    await Posts.destroy({
      where: { id: post_id }
    })
    res.json({ msg: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Interval Server Error" });
  }
}

export const searchPost = async (req, res) => {
  let search = req.query['q'];
  let query = `SELECT * FROM posts WHERE MATCH (title, content) AGAINST ( '${search}' IN NATURAL LANGUAGE MODE ) ORDER BY pay desc`;
  try {
    Posts.sequelize.query(
      query,
      { type: Posts.sequelize.QueryTypes.SELECT }
    ).then(result => {
      res.send(result)
    })
  } catch (error) {
    res.status(500).json({ msg: "Interval Server Error" })
  }
}

