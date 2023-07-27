"use client";
import React from "react";
import classNames from "classnames";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div
      className={classNames({
        "ml-8 hidden md:flex": true,
        "flex flex-col justify-between": true, // layout
        " text-gray-blue": true, // colors
        "sticky top-0 z-20 md:top-16 md:z-0 md:w-full ": true, // positioning
        "h-screen w-[220px] md:h-[615px]": true, // for height and width
      })}
    >
      <nav className="top-0 md:sticky md:top-16">
        <div className="flex flex-col gap-3 px-6 pt-10 text-right text-gray-blue">
          <Link className="rounded-xl p-1 pr-3 hover:bg-stone-200" href="#">
            Create Prompt
          </Link>

            
          <Link className="rounded-xl p-1 pr-3 hover:bg-stone-200" href="#">Blogs
          </Link>
          <Link className="rounded-xl p-1 pr-3 hover:bg-stone-200" href="#">
            Pricing
          </Link>
          <Link className="rounded-xl p-1 pr-3 hover:bg-stone-200" href="#">
            Settings
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

{
  /* <div className="border-t border-t-stone-400 p-4">
        <div className="flex gap-4 justify-end mb-3 ">
          <Image
            src=""
            height={36}
            width={36}
            alt="profile image"
            className="rounded-full"
          />
          <div className="flex flex-col ">
            <span className=" my-0 font-semibold text-stone-800 text-lg">Tom Cook</span>
            <Link href="/" className="text-sm">
              View Profile
            </Link>
          </div>
        </div>
      </div> */
}
