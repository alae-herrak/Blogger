import pool from "../db.js";

class Post {
  constructor(author_id, title, content) {
    this.author_id = author_id;
    this.title = title;
    this.content = content;
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  async createPost() {
    const [result] = await pool.query(
      "INSERT INTO `posts` (`author_id`, `title`, `content`, `created_at`, `updated_at`) VALUES (?, ?, ?, ?, ?)",
      [
        this.author_id,
        this.title,
        this.content,
        this.created_at,
        this.updated_at,
      ]
    );
    const postId = result.insertId;
    return this.getPostById(postId);
  }

  async getPostById(id) {
    const [result] = await pool.query(
      "SELECT * FROM `posts` WHERE `post_id` = ?",
      [id]
    );
    return result[0];
  }
}

export default Post;
