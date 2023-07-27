"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Dashboard = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const { data: session } = useSession();
  const [toggleDropDown, setToggleDropDown] = useState(false);
  return (
    <>
      <div className="nav sticky top-0 z-10 border-b border-gray-white bg-white px-10 py-4 shadow-sm">
        {/* mobile navigation */}
        <div>
          <div
            className="flex md:hidden"
            onClick={() => {
              setIsMenuClicked(!isMenuClicked);
            }}
          >
            <Link href="#" className="flex gap-2">
              <Image
                src={
                  isMenuClicked
                    ? "/assets/icons/circle-x.svg"
                    : "/assets/icons/paper-plane.svg"
                }
                width={24}
                height={5}
                alt="Prompter Logo"
              />
              <p className="pl-2 pt-1 text-base font-bold">Menu</p>
            </Link>
          </div>

          {/* Desktop navigation */}

          <div className="hidden gap-6 md:flex">
            <Link href="/" className="flex gap-2">
              <Image
                src="/assets/icons/paper-plane.svg"
                width={24}
                height={5}
                alt="Prompter Logo"
              />
              <p className="pl-2 pt-1  text-base font-bold">Prompter</p>
            </Link>
            <div className="flex gap-5 p-2 text-gray-blue">
              <Link href="/">Create Prompt</Link>

              <Link href="/">Blogs</Link>
              <Link href="/">Pricing</Link>
              <Link href="/">Settings</Link>
            </div>
          </div>
        </div>

        <div>

          {
            session?.user && (
              <div className="">
                <Image 
                src={session?.user.image}
                alt="profile img"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => {
                setToggleDropDown((prev) => !prev);
              }} />
              {toggleDropDown && (
              <div className="dropdown">
                <Link
                  onClick={() => setToggleDropDown(false)}
                  href="/dashboard"
                  className="dropdown_link"
                >
                  My Profile
                </Link>
                <Link
                  onClick={() => setToggleDropDown(false)}
                  href="#"
                  className="dropdown_link"
                >
                  Settings
                </Link>
                <button
                type="button"  
                className="w-full px-5 py-2 black_btn"
                onClick={()=>{
                    setToggleDropDown(false)
                    signOut()
                } }

                >Sign Out</button>
              </div>
            )}
              </div>
            )
          }

        </div>
      </div>
      {isMenuClicked && (
        <div className="m-5 flex flex-col gap-4 rounded px-5 pb-5 pt-3 shadow-md">
          <Link href="/" className="flex gap-2">
            <Image
              src="/assets/icons/paper-plane.svg"
              width={24}
              height={5}
              alt="Prompter Logo"
            />
            <p className="p-2 text-base font-bold">Prompter</p>
          </Link>
          <div className="flex flex-col gap-1 pl-3 text-gray-blue">
            <Link href="/">Create Prompt</Link>

            <Link href="/">Blogs</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">Settings</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
