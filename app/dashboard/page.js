"use client"
import Profile from "@components/Profile";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const [myposts, setMyposts] = useState([]);
  const { data: session } = useSession();
  const router = useRouter()

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setMyposts(data);
    };
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const handleEdit = async (post) => {
router.push("/dashboard/update-prompt?id="+post._id)
  };

  const handleDelete = async (post) => {
    const isConfirmed = confirm("Are you sure you want to delete this Prompt");

    if(isConfirmed){
      try{
        await fetch(`/api/prompt/${post._id.toString()}`,{
          method:"DELETE",
        })

        const newPosts = myposts.filter(item => item._id !== post._id)
        setMyposts(newPosts)
      }
      catch(error){
        console.log(error)
      }
    }
  };

  return <Profile data={myposts} 
    handleDelete={handleDelete}
    handleEdit={handleEdit}

  />;
};

export default ProfilePage;
