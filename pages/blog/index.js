import Link from "next/link";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import blogs from "../api/blogs";
import SeoHead from "../components/Seo";

export default function Blog() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12">
            <SeoHead
                title="Crypto & Web3 Blog | xDefiDev"
                description="Read the latest insights and guides on Web3 development, Crypto Casinos, Telegram Bots, and Blockchain technology from the experts at xDefiDev."
                path="/blog"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-gray-900 mb-6">
                        xDefiDev <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Expert insights, guides, and news about Web3 development, decentralized applications, and the crypto ecosystem.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((post, index) => (
                        <Link key={index} href={`/blog/${post.slug}`} className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
                            <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                                {post.image ? (
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400 font-semibold bg-gradient-to-br from-gray-100 to-gray-200">
                                        xDefiDev
                                    </div>
                                )}
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-4 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <span className="font-semibold text-blue-600 group-hover:text-purple-600 transition-colors duration-300 flex items-center">
                                        Read Article
                                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? 'en', ['common'])),
        },
    };
}
