import { useState } from "react";
import TextEditor from "./TextEditor";

const NewPost = () => {
  const [title, settitle] = useState<string>("");
  const [content, setcontent] = useState<string>("");

  return (
    <div className="flex w-full">
      <div className="mx-auto w-full max-w-screen-lg py-16 px-5 lg:px-0">
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
          <TextEditor setContent={setcontent}/>
        </label>
        <div className="mt-20 flex justify-end absolute lg:relative bottom-2 right-2 lg:bottom-0 lg:right-0">
          <button className="rounded-sm bg-slate-600 px-4 py-2 text-white shadow-lg hover:bg-slate-600/80">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
