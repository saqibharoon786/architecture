import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOGS } from "@/lib/blogs";
import { COMPANY, DISCLAIMER } from "@/lib/services";
import designImage from "@/assets/design-documentation.jpg";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOGS.find((item) => item.slug === params.slug);
    if (!post) throw notFound();
    return post.slug;
  },
  head: ({ loaderData }) => {
    const post = BLOGS.find((item) => item.slug === loaderData);
    return {
      meta: [
        { title: post ? `${post.title} — ${COMPANY}` : "Article not found" },
        { name: "description", content: post?.excerpt ?? "The requested article could not be found." },
        { property: "og:title", content: post?.title ?? "Article not found" },
        { property: "og:description", content: post?.excerpt ?? "Read permit-drawing notes from Hassan Building Design Group USA." },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: PostNotFound,
});

function BlogPostPage() {
  const slug = Route.useLoaderData();
  const post = BLOGS.find((item) => item.slug === slug);
  if (!post) return <PostNotFound />;
  const others = BLOGS.filter((item) => item.slug !== slug);

  return (
    <main>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Button asChild variant="link" className="px-0">
          <Link to="/blog"><ArrowLeft /> All articles</Link>
        </Button>
        <p className="mt-8 text-sm font-semibold uppercase text-primary">{post.category}</p>
        <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-5 text-sm text-muted-foreground">{post.date} · {post.readTime} · {COMPANY}</p>
        <img src={designImage} alt="" className="mt-8 aspect-[16/9] w-full rounded-md object-cover" />
        <p className="mt-8 text-lg leading-8 text-foreground">{post.excerpt}</p>
        <div className="mt-10 space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold">{section.heading}</h2>
              <div className="mt-4 space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="leading-8 text-muted-foreground">{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <p className="mt-12 rounded-md bg-secondary p-6 text-sm leading-7 text-muted-foreground">{DISCLAIMER}</p>
        <Button asChild className="mt-8">
          <Link to="/" hash="contact">Talk through your sheet list <ArrowRight /></Link>
        </Button>
      </article>
      <aside className="mx-auto max-w-3xl px-4 pb-4 sm:px-6">
        <h2 className="text-xl font-bold">More from the blog</h2>
        <div className="mt-5 grid gap-4">
          {others.map((item) => (
            <Link key={item.slug} to="/blog/$slug" params={{ slug: item.slug }} className="rounded-md border border-border p-5 transition-colors hover:border-primary">
              <p className="text-xs font-semibold uppercase text-primary">{item.category}</p>
              <h3 className="mt-2 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </aside>
    </main>
  );
}

function PostNotFound() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20">
      <h1 className="text-3xl font-bold">Article not found</h1>
      <Button asChild className="mt-6">
        <Link to="/blog">Back to the blog</Link>
      </Button>
    </main>
  );
}
