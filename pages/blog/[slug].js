import Link from "next/link";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import blogs from "../api/blogs";
import SeoHead, { SITE_URL } from "../components/Seo";

export async function getStaticPaths() {
    const paths = blogs.map((post) => ({
        params: { slug: post.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
    const post = blogs.find((b) => b.slug === params.slug);

    if (!post) {
        return { notFound: true };
    }

    return {
        props: {
            post,
            ...(await serverSideTranslations(locale ?? 'en', ['common'])),
        },
    };
}

export default function BlogPost({ post }) {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: post.date,
        author: {
            "@type": "Organization",
            name: "XDefiDev",
        },
        publisher: {
            "@type": "Organization",
            name: "XDefiDev",
            url: SITE_URL,
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_URL}/blog/${post.slug}`,
        },
    };

    // Simple markdown parser for the demo content
    const renderContent = (content) => {
        return content.split('\n').map((line, index) => {
            if (line.startsWith('## ')) {
                return <h2 key={index} className="text-3xl font-bold text-gray-900 mt-12 mb-6">{line.replace('## ', '')}</h2>;
            } else if (line.startsWith('# ')) {
                return <h1 key={index} className="text-4xl font-extrabold text-gray-900 mt-8 mb-8">{line.replace('# ', '')}</h1>;
            } else if (line.trim() !== '') {
                return <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">{line}</p>;
            }
            return null;
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <SeoHead
                title={`${post.title} | xDefiDev Blog`}
                description={post.excerpt}
                path={`/blog/${post.slug}`}
                image={post.image}
                schema={[articleSchema]}
            />

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8">
                <div className="mb-10 text-center">
                    <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-purple-600 font-semibold mb-8 transition-colors duration-300">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Blog
                    </Link>
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-6 font-medium">
                        <span className="px-3 py-1 bg-white rounded-full border border-gray-200 shadow-sm">
                            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-gray-900 mb-8 max-w-3xl mx-auto">
                        {post.title}
                    </h1>
                </div>

                {post.image && (
                    <div className="rounded-3xl shadow-2xl overflow-hidden mb-16 border border-gray-200 max-h-[500px] flex items-center justify-center bg-gray-100">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full object-cover shadow-inner"
                        />
                    </div>
                )}

                <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100 mb-24">
                    <div className="prose prose-lg prose-blue max-w-none">
                        {renderContent(post.content)}
                    </div>
                </div>
            </article>
        </div>
    );
}
