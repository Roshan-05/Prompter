"use client"
import Feed from "@components/Feed";
import Navbar from "@components/Navbar";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const {data:session} = useSession()
  return (
    <section>
      <Navbar />
      <div className="text-center max-w-full mx-10">
        <header className="text-primary-black text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl mt-20 lg:mt-35">
          An experimental app built using NextJS 13
        </header>
        <p className="text-gray-blue mx-7 my-6">
          Amet non aute cillum elit occaecat nulla duis quasi aliquam corporis
          ipsum assumenda explicabo ex? Reiciendis tenetur odio dignissimos?.
        </p>
      </div>
      <div className="flex gap-5 justify-center my-10">
      <Link href={session?.user ? "/dashboard":"/login"}>
        <button className="black_btn px-6 py-3">Get Started</button></Link>
        <button className="white_btn px-6 py-3">GitHub</button>
      </div>

      <div>
  <Feed />
      </div>

      {/* footer section */}
      <div className="text-gray-blue text-center mb-6 mt-10 absolute bottom-0 w-full">
        <div className="block">
          <h5>Click here to check out Blogs</h5>
        </div>
        <div className="copyright">
          {/* logo  */}
          <div className="purpose">
            <p>Built by Roshan, as an excuse to learn NextJs</p>
            <p>GitHub</p>
            <div className="darkmode-icon"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
