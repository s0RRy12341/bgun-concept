import Link from 'next/link';
import { getRecentPosts } from '@/data/blog-posts';

export default function BlogPreview() {
  const posts = getRecentPosts(3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#b59d5a] font-semibold text-sm tracking-widest uppercase mb-2">
              הבלוג שלנו
            </p>
            <h2 className="text-black font-black text-4xl sm:text-5xl leading-tight">
              👉 כל מה שצריך לדעת
              <span className="block text-3xl sm:text-4xl text-zinc-500 mt-1">לפני שבוחרים נרתיק</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-2 text-zinc-500 hover:text-[#b59d5a] font-medium transition-colors"
          >
            <span>לכל הפוסטים</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block bg-[#f7f5ee] border border-[#e0d9c8] rounded-xl overflow-hidden hover:border-[#b59d5a]/40 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-[#e8e4d8] relative overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, hsl(${index * 20 + 40}, 25%, 88%) 0%, hsl(${index * 20 + 50}, 20%, 82%) 100%)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#c8bfa8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-[#b59d5a] text-black text-xs font-bold px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 text-zinc-400 text-xs mb-3">
                  <span>{new Date(post.date).toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>•</span>
                  <span>{post.readTime} דקות קריאה</span>
                </div>

                <h3 className="text-black font-bold text-base leading-snug mb-3 group-hover:text-[#b59d5a] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-zinc-600 text-sm leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-1 text-[#b59d5a] text-sm font-semibold">
                  <span>קרא עוד</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-10 sm:hidden">
          <Link
            href="/blog"
            className="inline-block border border-[#e0d9c8] hover:border-[#b59d5a] text-zinc-600 hover:text-black px-8 py-3 rounded-md font-bold transition-colors"
          >
            לכל הפוסטים בבלוג
          </Link>
        </div>
      </div>
    </section>
  );
}
