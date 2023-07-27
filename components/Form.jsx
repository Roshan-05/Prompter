import Link from "next/link";
import React from "react";

const Form = ({ type, post, setPost, handleSubmit, submitting }) => {
  return (
    <section className="mx-10 mt-16">
      <h1 className="mb-3 text-4xl font-extrabold">{type} Prompt</h1>
      <p className="text-gray-blue">
        {type} and Share amazing and useful prompts with the World
      </p>
      <form 
      onSubmit={e=>{
        console.log("Submit button clicked")
        handleSubmit(e)
      }}
      className="my-5 rounded border border-stone-100 bg-stone-50 p-5">
        <label className="text-sm text-gray-blue">Your AI Prompt</label>
        <textarea 
        value={post.prompt}
        onChange={(e)=>setPost({
            ...post,
            prompt:e.target.value
        })}
        placeholder="Write your prompt here..."
        required
        className="mb-6 mt-2 block h-48 w-full rounded border border-stone-300 p-2 " />
        <label className="text-sm text-gray-blue">
          Tag {` `}
          <span className="">(#webdevelopment, #fullstack, #ideas)</span>
        </label>
        <input 
        value={post.tag}
        onChange={e => setPost({...post, tag:e.target.value})}
        placeholder="tag"
        required
        className="my-2 block h-8 w-full rounded border border-stone-300 p-2" />

        <div className="flex gap-2 mt-5 justify-end">
          <Link href="/" className="white_btn text-gray-500 text-sm px-3 py-1">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="rounded-xl px-3 py-1 text-sm text-white black_btn"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
