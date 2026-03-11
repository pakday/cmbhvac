import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  blogPosts,
  getBlogPost,
  getRecommendedPosts,
  formatDate,
} from "@/lib/blog-data";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Tag,
  Calendar,
  Phone,
} from "lucide-react";
import { BlogContent } from "@/components/BlogContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — CMB HVAC Blog`,
    description: post.excerpt,
  };
}

const categoryColors: Record<string, string> = {
  "HVAC Tips": "bg-blue-50 text-primary",
  Maintenance: "bg-green-50 text-green-700",
  Technology: "bg-purple-50 text-purple-700",
  Membership: "bg-orange-50 text-accent",
  "Energy Savings": "bg-yellow-50 text-yellow-700",
  Plumbing: "bg-teal-50 text-teal-700",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const recommended = getRecommendedPosts(slug, 3);

  return (
    <>
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary font-medium mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs font-semibold px-3 py-1.5 rounded-full ${categoryColors[post.category] ?? "bg-secondary text-foreground"}`}
              >
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>

            <h1 className="heading-m lg:heading-l font-bold text-foreground mb-5 leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>

            <div className="flex items-center gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {post.author}
                  </div>
                  <div className="text-xs text-muted-foreground">{post.authorRole}</div>
                </div>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
            </div>
          </div>
        </div>

        {/* Cover image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden aspect-[2/1] md:aspect-[21/9] shadow-xl">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={1400}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ═══ CONTENT ═══ */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {/* Article */}
            <article>
              <BlogContent content={post.content} />

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-border">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1.5 bg-secondary text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* (author card removed) */}
            </article>
          </div>
        </div>
      </section>

      {/* ═══ RECOMMENDED POSTS ═══ */}
      <section className="bg-muted py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="h-small font-bold text-foreground">
              Recommended for You
            </h2>
            <Link
              href="/blog"
              className="text-sm text-accent font-semibold flex items-center gap-1 hover:gap-2 transition-all"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommended.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block rounded-2xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <Image
                    src={p.coverImage}
                    alt={p.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[p.category] ?? "bg-secondary text-foreground"}`}
                    >
                      {p.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {p.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {p.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      {p.author} · {formatDate(p.date)}
                    </span>
                    <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Home of the Free Service Call"
        description="Don't wait until something breaks. Call or book online for your free in-home consultation."
        primaryText="Schedule Your Appointment"
        primaryHref="/schedule-us"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
        icon={<Phone className="w-5 h-5" />}
      />

      <Footer />
    </>
  );
}
