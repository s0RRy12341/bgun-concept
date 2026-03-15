import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, blogCategories } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'בלוג',
  description: 'מדריכים, טיפים וכל מה שצריך לדעת לפני שבוחרים נרתיק Kydex.',
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#f0f0e8] border-b border-[#d4d4cc] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#5c6b30] font-semibold text-sm tracking-widest uppercase mb-3">
            הבלוג שלנו
          </p>
          <h1 className="text-black font-black text-5xl mb-4">
            👉 כל מה שצריך לדעת
          </h1>
          <p className="text-zinc-600 text-xl">לפני שבוחרים נרתיק — תקרא קודם</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Featured post */}
        <div className="mb-14">
          <Link
            href={`/blog/${featured.slug}`}
            className="group block bg-[#f0f0e8] border border-[#d4d4cc] rounded-2xl overflow-hidden hover:border-[#5c6b30]/30 transition-all"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image placeholder */}
              <div className="aspect-video md:aspect-auto md:min-h-[300px] bg-[#ebebе4] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e8e8e0] to-[#d4d4cc] group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">📖</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-[#5c6b30] text-white text-xs font-bold px-3 py-1.5 rounded">
                    מובחר
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-zinc-400 text-xs mb-4">
                  <span className="bg-[#e8e8e0] px-3 py-1 rounded-full">{featured.category}</span>
                  <span>•</span>
                  <span>{new Date(featured.date).toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>•</span>
                  <span>{featured.readTime} דקות קריאה</span>
                </div>
                <h2 className="text-black font-black text-2xl sm:text-3xl leading-tight mb-4 group-hover:text-[#5c6b30] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-zinc-600 text-base leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-2 text-[#5c6b30] font-bold">
                  <span>קרא את המאמר המלא</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 bg-[#e8e8e0] hover:bg-[#d4d4cc] text-zinc-700 hover:text-black text-sm rounded-md transition-colors first:bg-[#5c6b30] first:text-white"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block bg-white border border-[#d4d4cc] rounded-xl overflow-hidden hover:border-[#5c6b30]/30 transition-all"
            >
              {/* Image */}
              <div className="aspect-video bg-[#ebebе4] relative overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, hsl(${index * 40 + 200}, 25%, 88%) 0%, hsl(${index * 40 + 220}, 20%, 84%) 100%)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <svg className="w-14 h-14 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-[#5c6b30] text-white text-xs font-bold px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-zinc-400 text-xs mb-3">
                  <span>{new Date(post.date).toLocaleDateString('he-IL', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{post.readTime} דקות</span>
                </div>
                <h3 className="text-black font-bold text-base leading-snug mb-3 group-hover:text-[#5c6b30] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
