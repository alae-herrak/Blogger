import axios from "axios";

export interface Post {
  post_id?: number;
  author_id: string;
  title: string;
  content: string;
  created_at?: Date;
  updated_at?: Date;
}

const BASE_URL = "http://localhost:5000/posts";
const API = axios.create({ baseURL: BASE_URL });

export const createPost = async (post: Post) => {
  return await API.post<Post>("/", post);
};
