import Post from "../Models/Post.js";

export const createPost = async (req, res) => {
  try {
    const { author_id, title, content } = req.body;
    const post = new Post(author_id, title, content)
    const savedPost = await post.createPost()
    res.send(savedPost)
  } catch (error) {
    res.send(error);
  }
};
