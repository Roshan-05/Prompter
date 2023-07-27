"use client";

import Form from "@components/Form";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const UpdatePrompt = () => {
  const router = useRouter();
const searchParams = useSearchParams();
const promptId = searchParams.get('id')
  const [submitting, SetSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
 
  useEffect(() => {
    const promptDetails = async()=>{

        const response = await fetch(`/api/prompt/${promptId}`)
        const data = await response.json()
        
        setPost({
            prompt : data.prompt,
            tag: data.tag
        })
    }
    if(promptId) promptDetails()
  }, [promptId]);

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    SetSubmitting(true);
    if(!promptId) return alert("PromptId not found")
    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      SetSubmitting(false);
    }
  };
  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      handleSubmit={handleSubmit}
      submitting={submitting}
    />
  );
};

export default UpdatePrompt;
