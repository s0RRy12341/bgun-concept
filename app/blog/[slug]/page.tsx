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
    <div className="min-h-screen bg-[#111111]">
      {/* Hero */}
      <div className="bg-[#1A1A1A] border-b border-[#333333]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          {/* Breadcrumb */}
          <p className="text-[#666666] text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">בית</Link>
            {' '}/{' '}
            <Link href="/blog" className="hover:text-white transition-colors">בלוג</Link>
            {' '}/{' '}
            <span className="text-[#A0A0A0]">{post.title}</span>
          </p>

          <div className="flex items-center gap-3 mb-5">
            <span className="bg-[#C62828] text-white text-xs font-bold px-3 py-1 rounded">
              {post.category}
            </span>
            <span className="text-[#666666] text-sm">{post.readTime} דקות קריאה</span>
          </div>

          <h1 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-[#A0A0A0] text-lg leading-relaxed mb-8">{post.excerpt}</p>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#C62828] rounded-full flex items-center justify-center text-white font-black">
              B
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{post.author}</p>
              <p className="text-[#666666] text-xs">
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
        <div className="aspect-video bg-[#1A1A1A] border border-[#333333] rounded-xl overflow-hidden flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-[#333333] mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <p className="text-[#666666] text-sm">{post.title}</p>
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
                  return <h2 key={i} className="text-white font-black text-2xl mt-10 mb-4">{line.slice(3)}</h2>;
                }
                if (line.startsWith('### ')) {
                  return <h3 key={i} className="text-white font-bold text-xl mt-8 mb-3">{line.slice(4)}</h3>;
                }
                if (line.startsWith('- ')) {
                  return (
                    <li key={i} className="text-[#A0A0A0] text-base leading-relaxed mb-1 ms-5">
                      {line.slice(2).replace(/\*\*(.*?)\*\*/g, (_, m) => m)}
                    </li>
                  );
                }
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={i} className="text-[#C62828] font-bold text-base mt-4 mb-2">{line.slice(2, -2)}</p>;
                }
                if (line === '') return <br key={i} />;
                return <p key={i} className="text-[#A0A0A0] text-base leading-relaxed mb-4">{line}</p>;
              })}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-[#333333]">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#1A1A1A] border border-[#333333] text-[#A0A0A0] text-xs px-3 py-1.5 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author card */}
            <div className="mt-8 bg-[#1A1A1A] border border-[#333333] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#C62828] rounded-full flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                  B
                </div>
                <div>
                  <p className="text-white font-bold">{post.author}</p>
                  <p className="text-[#A0A0A0] text-sm mt-1">מייסד B-Gun Boutique Holster, נושא נשק יומיומי ומומחה לנרתיקי Kydex מיוצרים בישראל.</p>
                  <Link href="/about" className="text-[#C62828] text-sm hover:underline mt-2 inline-block">
                    קרא עוד עלינו ←
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* CTA */}
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-5 text-center sticky top-24">
              <svg className="w-10 h-10 text-[#C62828] mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <h3 className="text-white font-bold mb-2">מוכן לנרתיק?</h3>
              <p className="text-[#A0A0A0] text-sm mb-4">נרתיקי Kydex פרימיום, עשויים בישראל בהתאמה אישית.</p>
              <Link
                href="/collections"
                className="block w-full bg-[#C62828] hover:bg-[#D32F2F] text-white py-3 rounded-md font-bold text-sm transition-colors"
              >
                לחנות שלנו
              </Link>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div>
                <h4 className="text-white font-bold text-sm mb-3 pb-2 border-b border-[#333333]">
                  מאמרים קשורים
                </h4>
                <div className="space-y-3">
                  {related.map((p) => (
                    <Link
                      key={p.id}
                      href={`/blog/${p.slug}`}
                      className="block text-[#A0A0A0] hover:text-white text-sm transition-colors leading-snug"
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
