import { useState } from "react";
import TextEditor from "./TextEditor";

const NewPost = () => {
  const [title, settitle] = useState<string>("");

  return (
    <div className="flex w-full">
      <div className="mx-auto w-full max-w-screen-lg py-16">
        <h1 className="mb-10 text-center text-3xl font-semibold">
          Create a new post
        </h1>
        <label
          htmlFor="title"
          className="flex items-center gap-2 text-xl tracking-widest"
        >
          Title
          <input
            className="flex-1 rounded-md border-2 p-2"
            type="text"
            id="title"
            onChange={(e) => settitle(e.target.value)}
            value={title}
          />
        </label>
        <label htmlFor="content" className="text-xl tracking-widest">
          Content
          <TextEditor />
        </label>
      </div>
    </div>
  );
};

export default NewPost;
