import { useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

import TextEditor from "./TextEditor";
import { Post, createPost } from "../api/post";

const NewPost: React.FC = () => {
  const { userId } = useAuth();

  const navigate = useNavigate();

  const [title, settitle] = useState<string>("");
  const [content, setcontent] = useState<string>("");

  const handleCreatePost = () => {
    const post: Post = {
      author_id: userId!,
      title,
      content,
    };

    createPost(post)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex w-full">
      <div className="mx-auto w-full max-w-screen-lg px-5 py-16 lg:px-0">
        <h1 className="mb-10 text-center text-3xl font-semibold">
          Create a new post
        </h1>
        <label
          htmlFor="title"
          className="mb-4 flex flex-wrap items-center gap-2 text-xl tracking-widest"
        >
          Title
          <input
            className="w-full border-[1px] border-gray-300 bg-transparent p-2 outline-none"
            type="text"
            id="title"
            onChange={(e) => settitle(e.target.value)}
            value={title}
          />
        </label>
        <label
          htmlFor="content"
          className="flex flex-wrap gap-2 text-xl tracking-widest"
        >
          Content
          <TextEditor setContent={setcontent} />
        </label>
        <div className="absolute bottom-2 right-2 mt-20 flex justify-end lg:relative lg:bottom-0 lg:right-0">
          <button
            className="rounded-sm bg-slate-600 px-4 py-2 text-white shadow-lg hover:bg-slate-600/80"
            onClick={handleCreatePost}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
