import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function FreeTools() {
    const { t } = useTranslation('common');

    const tools = [
        {
            name: "Solana Volume Bot",
            description: "Advanced tools to increase token trading volume, build trust among holders, and attract new investors. Boost your token's activity on the Solana blockchain.",
            link: "#",
            status: "Coming Soon"
        },
        {
            name: "Wallet Tracker & Analytics",
            description: "Monitor any wallet address across multiple EVM chains and Solana. Get real-time alerts for large transactions and comprehensive portfolio analysis.",
            link: "#",
            status: "Coming Soon"
        },
        {
            name: "Impermanent Loss Calculator",
            description: "Accurately calculate potential impermanent loss for liquidity providers across different AMM protocols (Uniswap, PancakeSwap, etc.).",
            link: "#",
            status: "Coming Soon"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12">
            <Head>
                <title>Free Tools | xDefiDev</title>
                <meta name="description" content="Use our free tools designed for the crypto community. Explore calculators, generators, and analytics tools." />
            </Head>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-gray-900 mb-6">
                        Free <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tools</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A collection of free, open-source, and highly useful tools for crypto developers, traders, and project founders. Built by xDefiDev.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tools.map((tool, index) => (
                        <div key={index} className="group flex flex-col justify-between bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 p-8 transform hover:-translate-y-2 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{tool.name}</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-8">{tool.description}</p>
                            </div>

                            <div className="relative z-10 mt-auto pt-6 border-t border-gray-100">
                                {tool.status === 'Coming Soon' ? (
                                    <span className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-50 text-gray-500 font-semibold rounded-xl border border-gray-200">
                                        Coming Soon
                                    </span>
                                ) : (
                                    <Link href={tool.link} className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                                        Use Tool
                                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                )}
                            </div>
                        </div>
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
