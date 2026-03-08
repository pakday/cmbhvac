import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { blogPosts, formatDate } from "@/lib/blog-data";
import { ArrowRight, Clock, Tag, Phone } from "lucide-react";

export const metadata = {
  title: "Expert HVAC Advice & Tips — CMB HVAC Blog",
  description:
    "Honest HVAC and plumbing advice from CMB HVAC's certified technicians. Tips, guides, and industry news for Utah homeowners.",
};

const categoryColors: Record<string, string> = {
  "HVAC Tips": "bg-blue-50 text-primary",
  Maintenance: "bg-green-50 text-green-700",
  Technology: "bg-purple-50 text-purple-700",
  Membership: "bg-orange-50 text-accent",
  "Energy Savings": "bg-yellow-50 text-yellow-700",
  Plumbing: "bg-teal-50 text-teal-700",
};

export default function BlogPage() {
  // show all posts in one list; featured section removed per design request
  const posts = blogPosts;

  return (
    <>
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="hero-dark relative overflow-hidden pt-20 pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-br from-brand via-primary-light to-primary-dark" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge badge-white mb-4 inline-flex">
            <Tag className="w-3.5 h-3.5" />
            CMB HVAC Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Expert HVAC Advice & Honest Reviews
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Practical tips, seasonal guides, and industry insights from our
            certified technicians — written for Utah homeowners, not engineers.
          </p>
        </div>
      </section>

      {/* ═══ ALL POSTS ═══ */}
      <section className="bg-muted py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-foreground">
            All Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-secondary text-foreground"}`}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {post.author} · {formatDate(post.date)}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Have an HVAC Question?"
        description="Our certified technicians are happy to help. Call or book a free in-home consultation today."
        primaryText="Book Free Consultation"
        primaryHref="/schedule-us"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
        icon={<Phone className="w-5 h-5" />}
      />

      <Footer />
    </>
  );
}
