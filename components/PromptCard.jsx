"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const PromptCard = ({ post, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathName = usePathname();
  const [copied, setCopied] = useState(false);

  const handleProfileClick = () => {
    if (post.creator._id === session?.user.id) return router.push("/dashboard");

    // check if the below navigation works properly
    return router.push(
      `/dashboard/${post.creator._id}?name=${post.creator.username}`
    );
  };

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(setCopied(false, 5000));
  };

  return (
    <div className=" flex-1 break-inside-avoid rounded-lg border border-stone-300 bg-white/40 bg-clip-padding p-4 pb-4  md:w-[360px] h-fit m-3">
      <div className="flex justify-between items-start gap-5">
        <div 
        className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
        onClick={handleProfileClick}>
          <Image
            src={post.creator.image}
            alt="user-image"
            width={35}
            height={25}
            className='rounded-full object-contain'
          />
          <div className='flex flex-col'>
            <h3 className="font-semibold">{post.creator.username}</h3>
            <p className=" text-sm text-gray-blue">{post.creator.email}</p>
          </div>
        </div>
        <div
        className="w-7 h-7 rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] flex justify-center items-center cursor-pointer" 
        onClick={handleCopy}>
          <Image            
            src={copied ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
            alt="copy icon"
            width={20}
            height={12}
          />
        </div>
      </div>
      <p className="my-4 text-sm text-slate-800">{post.prompt}</p>
      <p className='font-inter text-sm text-slate-800  cursor-pointer'>#{post.tag}</p>

      {session.user.id === post.creator._id && pathName === "/dashboard" && (
        <div className='mt-5 flex justify-center gap-4 border-t border-stone-300 pt-3'>
          
          <button className="white_btn py-1 px-10" onClick={handleEdit}>Edit</button>
          <button className="black_btn py-1 px-8" onClick={handleDelete}>Delete</button>
          
        </div>
      )}
    </div>
  );
};

export default PromptCard;
