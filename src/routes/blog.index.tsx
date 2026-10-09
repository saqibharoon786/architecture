import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOGS } from "@/lib/blogs";
import { COMPANY } from "@/lib/services";
import designImage from "@/assets/design-documentation.jpg";
import officeProject from "@/assets/project-office.jpg";
import hospitalProject from "@/assets/project-hospital.jpg";

const COVERS = [designImage, officeProject, hospitalProject];

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: `Blog — ${COMPANY}` },
      { name: "description", content: "Notes on U.S. permit drawing sets, MEP coordination, and residential addition documentation." },
      { property: "og:title", content: `Blog — ${COMPANY}` },
      { property: "og:description", content: "Practical writing on permit sets, coordination, and home-addition drawings." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase text-primary">Blog</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">Notes on U.S. drawing requirements.</h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
        Practical writing for contractors, architects, engineers, and owners on permit documentation, MEP coordination, load calculations, ADUs, and when a professional seal is required.
      </p>
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {BLOGS.map((post, index) => (
          <article key={post.slug} className="flex flex-col overflow-hidden rounded-md border border-border bg-card">
            <img src={COVERS[index % COVERS.length]} alt="" className="aspect-[16/10] w-full object-cover" />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold uppercase text-primary">{post.category}</p>
              <h2 className="mt-3 text-xl font-bold leading-snug">{post.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
              <p className="mt-4 text-xs text-muted-foreground">{post.date} · {post.readTime}</p>
              <Button asChild variant="link" className="mt-4 justify-start px-0">
                <Link to="/blog/$slug" params={{ slug: post.slug }}>Read article <ArrowRight /></Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
