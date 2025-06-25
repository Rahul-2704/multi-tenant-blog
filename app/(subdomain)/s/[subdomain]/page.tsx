import { db } from "@/db";
import { blogTable } from "@/db/schema";
import { clerkClient } from "@clerk/nextjs/server";
import { equal } from "assert";
import { eq } from "drizzle-orm";
interface Params {
  subdomain: string;
}
export default async function SubDomainPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { subdomain } = await params;
  const client = await clerkClient();
  const org = await client.organizations.getOrganization({ slug: subdomain });
  const orgId = org.id;
  const blogs = await db
    .select()
    .from(blogTable)
    .where(eq(blogTable.orgId, orgId));
  return (
    <>
      <h1 className="p-10 text-2xl font-bold">Organisation Blogs</h1>
      <div className="p-10 grid grid-cols-4 gap-2">
        {blogs.map((blog, id) => (
          <div key={id} className="border border-black-400 p-4 rounded-md">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
