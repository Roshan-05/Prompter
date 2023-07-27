import React from "react";
import Sidebar from "@components/Sidebar";
import Dashboard from "@components/Dashboard_nav";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div className="grid grid-rows-header">
        <Dashboard />

        {/* sidebar */}
        <div className="grid md:grid-cols-sidebar ">
          <Sidebar />
          {children}
        </div>
        {/*  */}
      </div>
      <footer className="dark:bg-gray-800 rounded-lg border-t border-stone-200 bg-white shadow bottom-0 w-full">
        <div className="dark:text-gray-400 mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between gap-2 p-4 text-center text-sm text-gray-blue ">
         
          <p>Built by Roshan, as an excuse to learn NextJs</p>
          <Link
            href="#"
            className="text-black-800 hover:underline"
          >
            GitHub
          </Link>
          <div className="darkmode-icon"></div>
          <Image src="/assets/icons/icons8-sun.svg" width={18} height={5} alt="Dark mode" />
        </div>
      </footer>
    </>
  );
}
