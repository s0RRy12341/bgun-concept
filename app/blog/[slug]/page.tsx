import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getBlogPostBySlug, blogPosts } from '@/data/blog-posts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#f0f0e8] border-b border-[#d4d4cc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          {/* Breadcrumb */}
          <p className="text-zinc-400 text-sm mb-6">
            <Link href="/" className="hover:text-[#5c6b30] transition-colors">בית</Link>
            {' '}/{' '}
            <Link href="/blog" className="hover:text-[#5c6b30] transition-colors">בלוג</Link>
            {' '}/{' '}
            <span className="text-zinc-600">{post.title}</span>
          </p>

          <div className="flex items-center gap-3 mb-5">
            <span className="bg-[#5c6b30] text-white text-xs font-bold px-3 py-1 rounded">
              {post.category}
            </span>
            <span className="text-zinc-400 text-sm">{post.readTime} דקות קריאה</span>
          </div>

          <h1 className="text-black font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-zinc-600 text-lg leading-relaxed mb-8">{post.excerpt}</p>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#5c6b30] rounded-full flex items-center justify-center text-white font-black">
              B
            </div>
            <div>
              <p className="text-black font-semibold text-sm">{post.author}</p>
              <p className="text-zinc-400 text-xs">
                {new Date(post.date).toLocaleDateString('he-IL', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured image placeholder */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="aspect-video bg-[#f0f0e8] border border-[#d4d4cc] rounded-xl overflow-hidden flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-zinc-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <p className="text-zinc-400 text-sm">{post.title}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main content */}
          <article className="lg:col-span-3">
            <div className="prose max-w-none">
              {post.content.trim().split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return <h2 key={i} className="text-black font-black text-2xl mt-10 mb-4">{line.slice(3)}</h2>;
                }
                if (line.startsWith('### ')) {
                  return <h3 key={i} className="text-black font-bold text-xl mt-8 mb-3">{line.slice(4)}</h3>;
                }
                if (line.startsWith('- ')) {
                  return (
                    <li key={i} className="text-zinc-700 text-base leading-relaxed mb-1 ms-5">
                      {line.slice(2).replace(/\*\*(.*?)\*\*/g, (_, m) => m)}
                    </li>
                  );
                }
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={i} className="text-[#5c6b30] font-bold text-base mt-4 mb-2">{line.slice(2, -2)}</p>;
                }
                if (line === '') return <br key={i} />;
                return <p key={i} className="text-zinc-700 text-base leading-relaxed mb-4">{line}</p>;
              })}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-[#d4d4cc]">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#e8e8e0] text-zinc-600 text-xs px-3 py-1.5 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author card */}
            <div className="mt-8 bg-[#f0f0e8] border border-[#d4d4cc] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#5c6b30] rounded-full flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                  B
                </div>
                <div>
                  <p className="text-black font-bold">{post.author}</p>
                  <p className="text-zinc-400 text-sm mt-1">מייסד B-Gun Boutique Holster, נושא נשק יומיומי ומומחה לנרתיקי Kydex מיוצרים בישראל.</p>
                  <Link href="/about" className="text-[#5c6b30] text-sm hover:underline mt-2 inline-block">
                    קרא עוד עלינו ←
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* CTA */}
            <div className="bg-[#f0f0e8] border border-[#d4d4cc] rounded-xl p-5 text-center sticky top-24">
              <div className="text-3xl mb-3">🛒</div>
              <h3 className="text-black font-bold mb-2">מוכן לנרתיק?</h3>
              <p className="text-zinc-600 text-sm mb-4">נרתיקי Kydex פרימיום, עשויים בישראל בהתאמה אישית.</p>
              <Link
                href="/collections"
                className="block w-full bg-[#5c6b30] hover:bg-[#6e7f3a] text-white py-3 rounded-md font-bold text-sm transition-colors"
              >
                לחנות שלנו
              </Link>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div>
                <h4 className="text-black font-bold text-sm mb-3 pb-2 border-b border-[#d4d4cc]">
                  מאמרים קשורים
                </h4>
                <div className="space-y-3">
                  {related.map((p) => (
                    <Link
                      key={p.id}
                      href={`/blog/${p.slug}`}
                      className="block text-zinc-600 hover:text-[#5c6b30] text-sm transition-colors leading-snug"
                    >
                      ← {p.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
