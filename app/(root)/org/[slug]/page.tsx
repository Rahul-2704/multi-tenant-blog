'use client'
import { NavBar } from "@/app/components/nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { createBlog } from "./actions";
import { useOrganization } from "@clerk/nextjs";

const OrganisationLandingPage = () => {
  const selectedOrg = useOrganization();
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  const handleCreateBlog = () => {
    createBlog({
      body: blogContent.trim(),
      orgId: selectedOrg.organization?.id,
      title:blogTitle 
    });
  };
  return (
    <div>
      <NavBar />
      <div className="p-6">
        <Input
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          className="mb-4"
          placeholder="Enter your blog Title"
        />
        <Textarea
          placeholder="Enter blog Content"
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
        />
        <Button onClick={handleCreateBlog} className="bg-black text-white mt-2">Create Blog</Button>
      </div>
    </div>
  );
};

export default OrganisationLandingPage;
