"use client";

import Image from "next/image";
import Link from "next/link";
import PromptCard from "./PromptCard";

const Profile = ({ data, handleEdit, handleDelete }) => {
  return (
    <section className="">
      <div className="mx-10 mt-10">
        {/* body of the profile */}
        <div className="flex justify-between ">
          {/* head of the profile section */}
          <div className="flex flex-col">
            <header className="text-2xl font-black">My Posts</header>
            <p className="text-gray-blue">Create & Share amazing AI Prompts</p>
          </div>
          <Link
            href="/dashboard/create-prompt"
            className="black_btn flex h-10 gap-2 px-4 py-2"
          >
            <Image src="/assets/images/icons8-plus-30.png" width={18} height={1} />
            New Posts
          </Link>
        </div>

        <div className=" my-5 h-[500px] rounded border border-gray-white ">
          {/* content of the profile section */}
          {data.length !== 0 ? (
            <div>
              {data.map((post) => (
                <PromptCard
                  key={post._id}
                  post={post}
                  handleEdit={() => handleEdit && handleEdit(post)}
                  handleDelete={() => handleDelete && handleDelete(post)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center pt-36">
              {/* heading of the login page */}
              <Image
                className="mb-3 rounded-full"
                src="/assets/icons/icons8-file (1).svg"
                width={56}
                height={56}
                alt="Prompter Logo"
              />
              <p className="p-2 text-xl font-bold ">No posts created</p>
              <p className="text-sm text-gray-blue">
                You don't have any posts yet. Start creating content.
              </p>
              <Link
                href="/dashboard/create-prompt"
                className="white_btn mt-3 flex h-10 gap-2 px-4 py-2"
              >
                <Image
                  className="pb-2"
                  src="/assets/images/plus.png"
                  width={14}
                  height={16}
                />
                New Posts
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
