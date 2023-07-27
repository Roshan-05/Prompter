"use client";

import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptList = ({ data }) => {
  return (
    <div className="mt-16 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
      {data.map((post) => {
        <PromptCard key={post._id} post={post} />;
      })}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
    };
    fetchFunc();
  }, []);

  return (
    <div className="mx-auto mt-16 flex w-full max-w-xl flex-col items-center justify-center gap-2">
      <div className="relative flex w-full items-center justify-center">
        <input
          type="text"
          value={searchText}
          placeholder="Search a tag or a username"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          required
          className=" block w-full rounded-md mx-3 py-2.5 pl-5 pr-12 text-sm font-medium shadow-lg"
        />
      </div>
      <PromptList data={posts} />
    </div>
  );
};

export default Feed;
