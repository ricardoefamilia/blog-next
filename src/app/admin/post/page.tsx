import PostsListAdmin from "@/components/admin/PostsListAdmin";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Posts Admin",
};

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<SpinLoader className="mb-16" />}>
      <PostsListAdmin />
    </Suspense>
  );
}
