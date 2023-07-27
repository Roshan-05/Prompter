"use client";

import Form from "@components/Form";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const CreatePrompt = () => {
  const router = useRouter();
const {data:session} = useSession()
  const [submitting, SetSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    SetSubmitting(true);
    try {
      const response = await fetch(`/api/prompt/new`, {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
          creator: session?.user.id,
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
      type="Create"
      post={post}
      setPost={setPost}
      handleSubmit={handleSubmit}
      submitting={submitting}
    />
  );
};

export default CreatePrompt;
